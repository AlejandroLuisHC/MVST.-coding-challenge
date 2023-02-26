export default {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.ts$': 'esbuild-jest',
    },
    globals: {
        'ts-jest': {
            useESM: true,
        },
    },
};