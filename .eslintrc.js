module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
        'airbnb',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
            tsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
    plugins: ['react', '@typescript-eslint'],
    rules: {
        'react/react-in-jsx-scope': 0,
        '@typescript-eslint/ban-ts-comment': 0,
        '@typescript-eslint/no-inferrable-types': 0,
        'no-param-reassign': 0,
        'react/prop-types': 0,
        'import/no-extraneous-dependencies': 0,
        'react/jsx-filename-extension': 0,
        'jsx-a11y/label-has-associated-control': 0,
        'jsx-a11y/anchor-is-valid': 0,
        'import/no-unresolved': 0,
        'react/jsx-props-no-spreading': 0,
        'jsx-a11y/control-has-associated-label': 0,
        'import/prefer-default-export': 0,
        'react/jsx-one-expression-per-line': 'off',
        'import/extensions': 0,
        'import/order': 0,
        'no-console': 'off',
        'no-use-before-define': 0,
        'no-unused-vars': 1,
        'no-undef': 1,
        'no-restricted-syntax': 0,
        'no-underscore-dangle': 0,
        'no-explicit-any': 0,
        'quote-props': 0,
        'object-curly-newline': 'off',
        'operator-linebreak': 'off',
        'implicit-arrow-linebreak': 'off',
        'no-confusing-arrow': 'off',
        indent: 'off',
        'react/jsx-curly-newline': 'off',
        'function-paren-newline': 0,
        'no-shadow': 0,
    },
};
