import type { Linter } from 'eslint';

export const eslintRuleSettings: Linter.RulesRecord = {
  'no-empty': ['error', { allowEmptyCatch: true }],
  'no-undef': 'off',
};
