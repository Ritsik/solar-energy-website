document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('feedback-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(form);
            const name = formData.get('name');
            const email = formData.get('email');
            const feedback = formData.get('feedback');

            if (name && email && feedback) {
                document.getElementById('form-message').innerText = 'Thank you for your feedback!';
                form.reset();
            } else {
                document.getElementById('form-message').innerText = 'Please fill out all fields.';
            }
        });
    }
});
