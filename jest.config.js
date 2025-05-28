export default {
   testEnvironment: 'jest-environment-jsdom',
   testEnvironmentOptions: {
      customExportConditions: ['node', 'node-addons'],
   },
   setupFilesAfterEnv: ['./jest.setup.cjs'],
   moduleNameMapper: {
      '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
   },
   preset: 'ts-jest/presets/default-esm',
   transform: {
      '^.+\\.(ts|tsx)$': ['ts-jest', {
         tsconfig: './tsconfig.app.json',
         useESM: true,
      }],
   },
   extensionsToTreatAsEsm: ['.ts', '.tsx'],
};