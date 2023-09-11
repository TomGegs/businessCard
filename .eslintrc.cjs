module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'airbnb',
        'airbnb/hooks',
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:react-hooks/recommended',
        'plugin:prettier/recommended',
        'prettier',
    ],
    overrides: [
        {
            env: {
                node: true,
            },
            files: ['.eslintrc.{js,cjs}'],
            parserOptions: {
                sourceType: 'script',
            },
        },
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react', 'prettier'],
    rules: {
        'react/react-in-jsx-scope': 0,
        // Indent with 4 spaces
        indent: ['error', 4],

        // Indent JSX with 4 spaces
        'react/jsx-indent': ['error', 4],

        // Indent props with 4 spaces
        'react/jsx-indent-props': ['error', 4],
        // Allow semi-colons at end of line
        'prettier/prettier': [
            'error',
            {
                endOfLine: 'auto',
            },
        ],
        'react/prop-types': 'off',
    },
};
