import { render, screen } from "@testing-library/react";
import { ContactForm } from "../ContactForm";

jest.mock("@/app/actions/contact", () => ({
  submitContactForm: jest.fn(),
}));

describe("ContactForm", () => {
  it("renders all form fields", () => {
    render(<ContactForm />);
    
    expect(screen.getByLabelText(/Student Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Parent\/Guardian Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Phone\/WhatsApp/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Message/i)).toBeInTheDocument();
  });

  it("marks required fields", () => {
    render(<ContactForm />);
    
    const requiredFields = screen.getAllByText(/\*/);
    expect(requiredFields.length).toBeGreaterThan(0);
  });

  it("has proper input types", () => {
    render(<ContactForm />);
    
    const phoneInput = screen.getByLabelText(/Phone\/WhatsApp/i);
    expect(phoneInput).toHaveAttribute("type", "tel");
    
    const emailInput = screen.getByLabelText(/Email/i);
    expect(emailInput).toHaveAttribute("type", "email");
    
    const nameInput = screen.getByLabelText(/Student Name/i);
    expect(nameInput).toHaveAttribute("required");
  });

  it("renders submit button", () => {
    render(<ContactForm />);
    
    const submitButton = screen.getByText(/Send Message/i);
    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toHaveAttribute("type", "submit");
  });

  it("has honeypot field for spam protection", () => {
    render(<ContactForm />);
    
    // Honeypot field should exist but be hidden
    const honeypot = document.querySelector('input[name="honeypot"]');
    expect(honeypot).toBeInTheDocument();
    expect(honeypot).toHaveAttribute("tabIndex", "-1");
  });

  it("has proper form accessibility", () => {
    render(<ContactForm />);
    
    const form = document.querySelector("form");
    expect(form).toBeInTheDocument();
    
    // All labels should be associated with inputs
    const inputs = screen.getAllByRole("textbox");
    inputs.forEach((input) => {
      const id = input.getAttribute("id");
      if (id) {
        const label = document.querySelector(`label[for="${id}"]`);
        expect(label).toBeInTheDocument();
      }
    });
  });
});

