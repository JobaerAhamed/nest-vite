import type { JestConfigWithTsJest } from 'ts-jest';
import { pathsToModuleNameMapper } from 'ts-jest';

import { compilerOptions } from './tsconfig.json';

const jestConfig: JestConfigWithTsJest = {
  moduleFileExtensions: ['js', 'json', 'ts', 'tsx'],
  rootDir: './',
  testRegex: '.*\\.spec\\.(ts|tsx)$',
  testPathIgnorePatterns: ['/node_modules/', '/dist/', 'src/server/'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  collectCoverageFrom: ['src/ui/**/*.(ts|tsx)', '!src/ui/**/*.d.ts'],
  coverageDirectory: 'coverage/ui',
  testEnvironment: 'node',
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>/',
  }),
};

export default jestConfig;
