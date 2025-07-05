import '@testing-library/jest-dom';

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
  dispatchEvent: jest.fn(),
  })),
});


// Minimal IntersectionObserver mock for Framer Motion useInView
class IntersectionObserverMock {
  constructor() {}

  observe() {}
  unobserve() {}
  disconnect() {}
}


if (!('IntersectionObserver' in window)) {
  // @ts-ignore
  window.IntersectionObserver = IntersectionObserverMock;
}

