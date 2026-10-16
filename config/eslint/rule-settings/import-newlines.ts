import type { Linter } from 'eslint';

export const importNewlinesRuleSettings: Linter.RulesRecord = {
  'import-newlines/enforce': [
    'error',
    {
      items: 2,
      'max-len': 110,
      semi: true,
    },
  ],
};
