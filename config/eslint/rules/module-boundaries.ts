import path from 'node:path';
import type { Rule } from 'eslint';

export const moduleBoundariesRule: Rule.RuleModule = {
  meta: {
    type: 'problem',
    docs: {
      description: 'Enforce module import boundaries',
    },
    messages: {
      internalBarrel:
        'Do not import from the module barrel (index.ts) internally. Use direct relative imports.',
      internalAlias:
        'Internal module files must use relative imports, not cross-module path aliases.',
      deepExternal:
        'Deep imports into other modules are forbidden. Import from the module barrel instead.',
    },
    schema: [],
  },
  create(context) {
    const filename = (context.filename ?? '').replace(/\\/g, '/');
    const moduleMatch = filename.match(/\/src\/modules\/([^/]+)(\/(.*))?$/);
    const currentModule = moduleMatch ? moduleMatch[1] : null;

    function checkImport(node: Rule.Node, sourceNode?: { value?: unknown } | null) {
      if (!sourceNode || typeof sourceNode.value !== 'string') {
        return;
      }

      const importSource = sourceNode.value;

      // 1. Path Aliases: '@/modules/...'
      const aliasMatch = importSource.match(/^@\/modules\/([^/]+)(\/(.*))?$/);
      if (aliasMatch) {
        const targetModule = aliasMatch[1];
        const targetSubpath = aliasMatch[3] ? aliasMatch[3].trim() : '';

        // Disallow importing internal files via the module's public path alias (@/modules/*)
        if (currentModule && targetModule === currentModule) {
          context.report({
            node,
            messageId: 'internalAlias',
          });
          return;
        }

        const isTestingBarrel = /^index\.testing(\.[a-zA-Z]+)?$/.test(targetSubpath);

        // Disallow importing internal sub-files of another module directly
        if (targetSubpath !== '' && !isTestingBarrel) {
          context.report({
            node,
            messageId: 'deepExternal',
          });
          return;
        }

        // External barrel imports (@/modules/<targetModule> or @/modules/<targetModule>/index.testing) are allowed
        return;
      }

      // 2. Relative Imports: './...', '../...'
      if (importSource.startsWith('.')) {
        const fileDir = path.posix.dirname(filename);
        const resolvedTarget = path.posix.normalize(path.posix.resolve(fileDir, importSource));

        if (currentModule) {
          const idx = filename.indexOf(`/src/modules/${currentModule}`);
          const moduleRoot = filename.slice(0, idx + `/src/modules/${currentModule}`.length);

          // Disallow importing from the module's own barrel file (./index, ./index.testing, etc.)
          const isOwnBarrel =
            resolvedTarget === moduleRoot
            || resolvedTarget === `${moduleRoot}/index`
            || resolvedTarget === `${moduleRoot}/index.testing`
            || (/^index(\.testing)?(\.[a-zA-Z]+)?$/.test(path.posix.basename(resolvedTarget))
              && path.posix.dirname(resolvedTarget) === moduleRoot);

          if (isOwnBarrel) {
            context.report({
              node,
              messageId: 'internalBarrel',
            });
            return;
          }

          // Disallow relative imports crossing into another module's internals
          const otherModuleMatch = resolvedTarget.match(/\/src\/modules\/([^/]+)(\/(.*))?$/);
          if (otherModuleMatch && otherModuleMatch[1] !== currentModule) {
            context.report({
              node,
              messageId: 'deepExternal',
            });
            return;
          }

          // Direct internal imports within the module are allowed
          return;
        } else {
          // File outside src/modules importing into a module via relative path
          const otherModuleMatch = resolvedTarget.match(/\/src\/modules\/([^/]+)(\/(.*))?$/);
          if (otherModuleMatch) {
            const sub = otherModuleMatch[3] ? otherModuleMatch[3].replace(/^index(\.testing)?(\.[a-zA-Z]+)?$/, '') : '';
            if (sub) {
              context.report({
                node,
                messageId: 'deepExternal',
              });
              return;
            }
          }
        }
      }
    }

    return {
      ImportDeclaration(node: Rule.Node) {
        checkImport(node, 'source' in node ? (node.source as { value?: unknown }) : null);
      },
      ExportNamedDeclaration(node: Rule.Node) {
        checkImport(node, 'source' in node ? (node.source as { value?: unknown }) : null);
      },
      ExportAllDeclaration(node: Rule.Node) {
        checkImport(node, 'source' in node ? (node.source as { value?: unknown }) : null);
      },
      ImportExpression(node: Rule.Node) {
        checkImport(node, 'source' in node ? (node.source as { value?: unknown }) : null);
      },
    };
  },
};
