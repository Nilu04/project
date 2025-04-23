document.addEventListener('DOMContentLoaded', () => {
  const userTable = document.querySelector('#userTable tbody');

  const users = JSON.parse(localStorage.getItem('users')) || [
    { name: 'Mahenthiran Nilujan', email: 'admin@skillsaas.com', role: 'Admin' },
    { name: 'John Doe', email: 'john@example.com', role: 'Student' },
    { name: 'Jane Smith', email: 'jane@example.com', role: 'Instructor' },
  ];

  users.forEach((user, index) => {
    const row = document.createElement('tr');

    row.innerHTML = `
      <td>${user.name}</td>
      <td>${user.email}</td>
      <td>${user.role}</td>
      <td>
        <button class="edit-btn" onclick="editUser(${index})">Edit</button>
        <button class="delete-btn" onclick="deleteUser(${index})">Delete</button>
      </td>
    `;

    userTable.appendChild(row);
  });
});

function editUser(index) {
  alert('Edit function coming soon! User index: ' + index);
}

function deleteUser(index) {
  if (confirm('Are you sure you want to delete this user?')) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.splice(index, 1);
    localStorage.setItem('users', JSON.stringify(users));
    location.reload();
  }
}

function logout() {
  localStorage.removeItem('user');
  window.location.href = 'login.html';
}
