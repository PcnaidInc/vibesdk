import { afterEach, vi } from 'vitest';

// Restore mocked implementations so they do not leak into subsequent tests.
afterEach(() => {
  vi.restoreAllMocks();
});
