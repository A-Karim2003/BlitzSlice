// utils/validation.js

export default function validateOrder(data) {
  const errors = {};

  // First name validation
  if (!data.customer || data.customer.trim() === "") {
    errors.customer = "First name is required";
  }

  // Phone number validation
  if (!data.phoneNumber || data.phoneNumber.trim() === "") {
    errors.phoneNumber = "Phone number is required";
  } else if (!/^\+?\d{10,15}$/.test(data.phoneNumber.replace(/\s/g, ""))) {
    errors.phoneNumber = "Please provide a valid phone number (10-15 digits)";
  }

  // Address validation
  if (!data.address || data.address.trim() === "") {
    errors.address = "Address is required";
  }

  // Cart validation
  const cart = data.cart ? JSON.parse(data.cart) : [];
  if (!cart || cart.length === 0) {
    errors.cart = "Your cart is empty";
  }

  return errors;
}
