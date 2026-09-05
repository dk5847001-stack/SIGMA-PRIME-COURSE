const Joi = require("joi");

// -------------------- SIGNUP VALIDATION --------------------

const signupSchema = Joi.object({

    name: Joi.string()
        .trim()
        .min(2)
        .max(50)
        .required()
        .messages({
            "string.empty": "Name is required",
            "string.min": "Name must be at least 2 characters",
            "string.max": "Name must not exceed 50 characters",
            "any.required": "Name is required"
        }),

    email: Joi.string()
        .trim()
        .lowercase()
        .email()
        .required()
        .messages({
            "string.empty": "Email is required",
            "string.email": "Please enter a valid email",
            "any.required": "Email is required"
        }),

    password: Joi.string()
        .min(6)
        .max(30)
        .required()
        .messages({
            "string.empty": "Password is required",
            "string.min": "Password must be at least 6 characters",
            "string.max": "Password must not exceed 30 characters",
            "any.required": "Password is required"
        })
});


// -------------------- LOGIN VALIDATION --------------------

const loginSchema = Joi.object({

    email: Joi.string()
        .trim()
        .lowercase()
        .email()
        .pattern(/^[a-zA-Z0-9._%+-]+@gmail\.com$/)
        .required()
        .messages({
            "string.email": "Please enter a valid email",
            "string.pattern.base": "Only Gmail accounts are allowed",
            "any.required": "Email is required"
        }),

    password: Joi.string()
        .min(6)
        .max(30)
        .required()
        .messages({
            "string.empty": "Password is required",
            "string.min": "Password must be at least 6 characters",
            "string.max": "Password must not exceed 30 characters",
            "any.required": "Password is required"
        })
});

const verifyOTPSchema = Joi.object({
    email: Joi.string()
        .trim()
        .lowercase()
        .email()
        .required(),

    otp: Joi.string()
        .pattern(/^[0-9]{6}$/)
        .required()
});

module.exports = {
    signupSchema,
    loginSchema,
    verifyOTPSchema
};