import type { JestConfigWithTsJest } from 'ts-jest';
import { pathsToModuleNameMapper } from 'ts-jest';

import { compilerOptions } from './tsconfig.json';

const jestConfig: JestConfigWithTsJest = {
  preset: 'ts-jest',
  moduleFileExtensions: ['js', 'json', 'ts', 'tsx'],
  rootDir: './',
  testEnvironment: 'jest-environment-jsdom',
  testRegex: '.*\\.test\\.(ts|tsx)$',
  testPathIgnorePatterns: ['/node_modules/', '/dist/', 'src/server/'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  collectCoverageFrom: ['src/ui/**/*.(ts|tsx)', '!src/ui/**/*.d.ts'],
  coverageDirectory: 'coverage/ui',
  setupFilesAfterEnv: ['<rootDir>/src/ui/__test__/setupReactTests.ts'],
  moduleNameMapper: {
    '\\.(gif|ttf|eot|svg|png)$': 'identity-obj-proxy',
    '^.+\\.(css|less)$': 'identity-obj-proxy',
    ...pathsToModuleNameMapper(compilerOptions.paths, {
      prefix: '<rootDir>/',
    }),
  },
};

export default jestConfig;
