document.addEventListener('DOMContentLoaded', () => {
  // Load user data from local storage or placeholder
  const user = JSON.parse(localStorage.getItem('user')) || {
    name: "Mahenthiran Nilujan",
    email: "example@email.com",
  };

  document.getElementById('userName').textContent = user.name;
  document.getElementById('userEmail').textContent = user.email;
  document.getElementById('fullName').value = user.name;
  document.getElementById('email').value = user.email;

  // Handle form submission
  document.getElementById('profileForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const updatedUser = {
      name: document.getElementById('fullName').value,
      email: document.getElementById('email').value,
    };
    localStorage.setItem('user', JSON.stringify(updatedUser));
    alert('Profile updated!');
    location.reload();
  });
});

// Update profile picture
function updateProfileImage() {
  const file = document.getElementById('profileImageUpload').files[0];
  const reader = new FileReader();

  reader.onloadend = () => {
    document.getElementById('profilePic').src = reader.result;
    localStorage.setItem('profilePic', reader.result);
  };

  if (file) {
    reader.readAsDataURL(file);
  }
}

// Load stored profile image
window.onload = () => {
  const storedPic = localStorage.getItem('profilePic');
  if (storedPic) {
    document.getElementById('profilePic').src = storedPic;
  }
};

// Logout function
function logout() {
  localStorage.removeItem('user');
  window.location.href = 'login.html';
}



