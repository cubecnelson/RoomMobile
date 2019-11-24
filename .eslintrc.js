module.exports = {
    root: true,
    extends: [
        '@react-native-community',
        'prettier',
        'prettier/@typescript-eslint',
        'prettier/react'
    ],
    plugins: ['autofix'],
    rules: {
        'autofix/no-debugger': 'error',
        'no-unused-vars': 'error'
    }
};
