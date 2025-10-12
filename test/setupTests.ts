import '@testing-library/jest-dom/vitest'
// setupTests.ts (en la raíz o en src)
import matchers from '@testing-library/jest-dom/matchers';
import { expect } from 'vitest';
expect.extend(matchers);
