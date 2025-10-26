// Learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";

// Mock next/navigation
jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      push: jest.fn(),
      replace: jest.fn(),
      prefetch: jest.fn(),
      back: jest.fn(),
    };
  },
  useSearchParams() {
    return new URLSearchParams();
  },
  usePathname() {
    return "/";
  },
}));

// Mock next/font/google
jest.mock("next/font/google", () => ({
  Inter: jest.fn(() => ({
    variable: "--font-inter",
    className: "font-inter",
  })),
  Poppins: jest.fn(() => ({
    variable: "--font-poppins",
    className: "font-poppins",
  })),
  Geist: jest.fn(() => ({
    variable: "--font-geist-sans",
    className: "font-geist-sans",
  })),
  Geist_Mono: jest.fn(() => ({
    variable: "--font-geist-mono",
    className: "font-geist-mono",
  })),
}));

// Suppress console errors in tests
const originalError = console.error;
beforeAll(() => {
  console.error = (...args: any[]) => {
    if (
      typeof args[0] === "string" &&
      (args[0].includes("Warning: ReactDOM.render") ||
        args[0].includes("Warning: Function components cannot be given refs"))
    ) {
      return;
    }
    originalError.call(console, ...args);
  };
});

afterAll(() => {
  console.error = originalError;
});

