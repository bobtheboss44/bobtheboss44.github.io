// Add this to your existing script.js

function validateForm() {
    // Reset error messages
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(message => message.style.display = 'none');

    // Check each input for empty values
    const formFields = ['email', 'phone', 'country', 'name', 'message'];
    let hasError = false;

    formFields.forEach(field => {
        const input = document.getElementById(field);
        const errorMessage = document.getElementById(`${field}-error`);

        if (!input.value.trim()) {
            errorMessage.style.display = 'block';
            hasError = true;
        }
    });

    // Display a general error message if any field is empty
    if (!hasError) {
        alert('Form submitted successfully!');
    }
}
