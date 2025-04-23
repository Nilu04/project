// Login Form Handler
document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');

  if (loginForm) {
    loginForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const email = document.getElementById('email').value.trim();
      const password = document.getElementById('password').value.trim();
      const msg = document.getElementById('loginMessage');

      // Basic Validation
      if (!email || !password) {
        msg.textContent = 'Please fill in all fields.';
        msg.style.color = 'red';
        return;
      }

      // Simulated Authentication (replace with real API call)
      if (email === 'nilu@gmail.com' && password === '123456') {
        msg.style.color = 'green';
        msg.textContent = 'Login successful! Redirecting...';

        // Save session (basic)
        localStorage.setItem('user', JSON.stringify({ email }));

        // Redirect to dashboard
        setTimeout(() => {
          window.location.href = 'index.html';
        }, 1000);
      } else {
        msg.textContent = 'Invalid email or password.';
        msg.style.color = 'red';
      }
    });
  }
});
