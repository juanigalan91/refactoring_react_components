/* eslint-ignore */
module.exports = {
    verbose: true,
    testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)(test).js?(x)'],
    testEnvironment: 'node',
    coverageDirectory: '<rootDir>/coverage',
    coveragePathIgnorePatterns: ['.*\/tests\/.*'], // eslint-disable-line
    reporters: [
        'default',
    ],
    coverageReporters: [
        'lcov',
        'html',
        'json'
    ]
};
