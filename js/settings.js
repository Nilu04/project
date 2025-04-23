document.addEventListener('DOMContentLoaded', () => {
  const settingsForm = document.getElementById('settingsForm');
  const themeSelect = document.getElementById('theme');
  const languageSelect = document.getElementById('language');
  const notificationToggle = document.getElementById('notifications');

  // Load saved settings
  const settings = JSON.parse(localStorage.getItem('userSettings')) || {
    theme: 'light',
    language: 'en',
    notifications: true,
  };

  themeSelect.value = settings.theme;
  languageSelect.value = settings.language;
  notificationToggle.checked = settings.notifications;

  // Save settings
  settingsForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const updatedSettings = {
      theme: themeSelect.value,
      language: languageSelect.value,
      notifications: notificationToggle.checked,
    };
    localStorage.setItem('userSettings', JSON.stringify(updatedSettings));
    alert('Settings saved!');
  });
});

// Logout function
function logout() {
  localStorage.removeItem('user');
  window.location.href = 'login.html';
}

// Delete account (just clears localStorage for now)
function deleteAccount() {
  if (confirm('Are you sure you want to delete your account? This action is irreversible.')) {
    localStorage.clear();
    alert('Account deleted.');
    window.location.href = 'signup.html';
  }
}
