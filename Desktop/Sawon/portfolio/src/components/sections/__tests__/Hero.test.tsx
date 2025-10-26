import { render, screen } from "@testing-library/react";
import { Hero } from "../Hero";

describe("Hero", () => {
  it("renders heading and subheading", () => {
    render(<Hero />);
    expect(screen.getByText(/Welcome to SAWON Academy/i)).toBeInTheDocument();
    expect(screen.getByText(/Where Champions Are Made/i)).toBeInTheDocument();
  });

  it("renders primary CTA button", () => {
    render(<Hero />);
    const primaryButton = screen.getByText(/Join the Academy/i);
    expect(primaryButton).toBeInTheDocument();
    expect(primaryButton.closest("a")).toHaveAttribute("href", "/contact");
  });

  it("renders secondary CTA button", () => {
    render(<Hero />);
    const secondaryButton = screen.getByText(/View Programs/i);
    expect(secondaryButton).toBeInTheDocument();
    expect(secondaryButton.closest("a")).toHaveAttribute("href", "/coaching");
  });

  it("has proper accessibility attributes", () => {
    render(<Hero />);
    const links = screen.getAllByRole("link");
    links.forEach((link) => {
      expect(link).toHaveAttribute("href");
    });
  });
});

