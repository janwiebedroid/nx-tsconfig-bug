import { testlibChild } from '@nx-ts-config-bugs/testlib-child';

export function testlibWithDeps(): string {
  return testlibChild();
}
