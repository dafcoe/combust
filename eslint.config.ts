import js from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import { defineConfig } from 'eslint/config';
import importNewlines from 'eslint-plugin-import-newlines';
import importPlugin from 'eslint-plugin-import-x';
import vuePlugin from 'eslint-plugin-vue';
import tseslint from 'typescript-eslint';
import vueParser from 'vue-eslint-parser';
import { eslintRuleSettings } from './config/eslint/rule-settings/eslint.ts';
import { importNewlinesRuleSettings } from './config/eslint/rule-settings/import-newlines.ts';
import { importXRuleSettings } from './config/eslint/rule-settings/import-x.ts';
import { moduleBoundariesRuleSettings } from './config/eslint/rule-settings/module-boundaries.ts';
import { stylisticRuleSettings } from './config/eslint/rule-settings/stylistic.ts';
import { typescriptRuleSettings } from './config/eslint/rule-settings/typescript.ts';
import { moduleBoundariesRule } from './config/eslint/rules/module-boundaries.ts';

export default defineConfig(
  { ignores: ['dist/**'] },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...vuePlugin.configs['flat/recommended'],
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tseslint.parser,
        sourceType: 'module',
        extraFileExtensions: ['.vue'],
      },
    },
  },
  {
    plugins: {
      '@stylistic': stylistic,
      import: importPlugin,
      'import-newlines': importNewlines,
      modules: {
        rules: {
          boundaries: moduleBoundariesRule,
        },
      },
    },
    rules: {
      ...eslintRuleSettings,
      ...stylisticRuleSettings,
      ...importXRuleSettings,
      ...importNewlinesRuleSettings,
      ...typescriptRuleSettings,
      ...moduleBoundariesRuleSettings,
    },
  },
);
