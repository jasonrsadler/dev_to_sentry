const express = require('express');
const validator = require('validator');

const router = new express.Router();

function validateLoginForm(payload) {
    const errors = {};
    let isFormValid = true;
    let message = '';

    if (!payload || typeof payload.email !== 'string' || payload.email.trim().length === 0) {
        isFormValid = false;
        errors.email = 'Please enter your email address.';
    }
    if (!payload || typeof payload.password !== 'string' || payload.password.trim().length === 0) {
        isFormValid = false;
        errors.password = 'Please enter your password';
    }
    if (!isFormValid) {
        message = 'There were errors with logging on';
    }

    return {
        success: isFormValid,
        message,
        errors
    };
}

router.post('/login', (req, res) => {
    const validationResult = validateLoginForm(req.body);
    if (!validationResult.success) {
        return res.status(400).json({
            success: false,
            message: validationResult.message,
            errors: validationResult.errors
        });
    }
    return res.status(200).end();
});
module.exports = router;