const { z } = require("zod");

const loginSchema = z.object({
  email: z
    .string({ message: "Email is required" })
    .trim()
    .min(3, { message: "Email must be at least 3 characters." })
    .max(255, { message: "Email must not be more than 255 characters." })
    .email({ message: "Please enter a valid email address." }),
  password: z
    .string({ message: "Password is required" })
    .min(7, { message: "Password must be at least 7 characters." })
    .max(255, { message: "Password must not be more than 255 characters." }),
});

const signupSchema = loginSchema.extend({
  username: z
    .string({ message: "Name is required" })
    .trim()
    .min(3, { message: "Name must be at least 3 characters." })
    .max(255, { message: "Name must not be more than 255 characters." }),
  
  phone: z
    .string({ message: "Phone is required" })
    .trim()
    .min(10, { message: "Phone must be at least 10 characters." })
    .max(20, { message: "Phone must not be more than 20 characters." }),
  // Corrected the max length for passwords
});

module.exports = {signupSchema,loginSchema};
