import type { Linter } from 'eslint';

export const stylisticRuleSettings: Linter.RulesRecord = {
  '@stylistic/indent': ['error', 2],
  '@stylistic/quotes': ['error', 'single'],
  '@stylistic/semi': ['error', 'always'],
  '@stylistic/comma-dangle': ['error', 'always-multiline'],
  '@stylistic/arrow-parens': ['error', 'always'],
  '@stylistic/brace-style': ['error', '1tbs', { allowSingleLine: true }],
  '@stylistic/quote-props': ['error', 'as-needed'],
  '@stylistic/block-spacing': ['error', 'always'],
  '@stylistic/operator-linebreak': ['error', 'before', { overrides: { '=': 'after' } }],
};
