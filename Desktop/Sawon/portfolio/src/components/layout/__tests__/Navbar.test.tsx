import { render, screen } from "@testing-library/react";
import { Navbar } from "../Navbar";

jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
  usePathname: () => "/",
}));

describe("Navbar", () => {
  it("renders navigation links", () => {
    render(<Navbar />);
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
    expect(screen.getByText(/About/i)).toBeInTheDocument();
    expect(screen.getByText(/Coaching/i)).toBeInTheDocument();
    expect(screen.getByText(/Gallery/i)).toBeInTheDocument();
    expect(screen.getByText(/Contact/i)).toBeInTheDocument();
  });

  it("renders CTA button", () => {
    render(<Navbar />);
    const cta = screen.getByText(/Join the Academy/i);
    expect(cta).toBeInTheDocument();
  });

  it("has proper keyboard navigation", () => {
    render(<Navbar />);
    const links = screen.getAllByRole("link");
    
    // All links should be keyboard accessible
    links.forEach((link) => {
      expect(link).not.toHaveAttribute("tabIndex", "-1");
    });

    // Buttons should be keyboard accessible
    const buttons = screen.getAllByRole("button");
    buttons.forEach((button) => {
      expect(button).not.toHaveAttribute("tabIndex", "-1");
    });
  });

  it("has accessible logo with aria-label", () => {
    render(<Navbar />);
    const logo = screen.getByRole("img", { name: /SAWON Academy Logo/i });
    expect(logo).toBeInTheDocument();
  });

  it("has mobile menu toggle with proper ARIA attributes", () => {
    render(<Navbar />);
    const toggle = screen.getByLabelText(/Toggle menu/i);
    expect(toggle).toHaveAttribute("aria-expanded", "false");
    expect(toggle).toHaveAttribute("type", "button");
  });
});

