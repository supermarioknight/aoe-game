// src/setupTests.ts

import '@testing-library/jest-dom';

// Mock window.matchMedia
globalThis.matchMedia = globalThis.matchMedia || ((query: string) => ({
  matches: false,
  media: query,
  onchange: null,
  addListener: () => {},  // deprecated
  removeListener: () => {},  // deprecated
  addEventListener: () => {},
  removeEventListener: () => {},
  dispatchEvent: () => false,
}));
