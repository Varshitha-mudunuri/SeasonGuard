// Toggle between Login and Signup forms
function toggleForms(formType) {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');

    if (formType === 'login') {
        loginForm.style.display = 'block';
        signupForm.style.display = 'none';
    } else {
        loginForm.style.display = 'none';
        signupForm.style.display = 'block';
    }
}

// Handle Signup
document.getElementById('signupForm')?.addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('signupEmail').value;
    const username = document.getElementById('signupUsername').value;
    const password = document.getElementById('signupPassword').value;

    // Parse existing users from localStorage or users.json
    const users = JSON.parse(localStorage.getItem('users')) || [];

    if (users.some(user => user.email === email)) {
        alert("Email already registered. Please use a different email.");
        return;
    }

    users.push({ email, username, password });
    localStorage.setItem('users', JSON.stringify(users));
    alert("Signup successful! Please log in.");
    toggleForms('login');
});

// Handle Login
document.getElementById('loginForm')?.addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    // Fetch users from localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        alert("Login successful!");
        localStorage.setItem('loggedInUser', JSON.stringify(user));
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid email or password. Please try again.");
    }
});

// Logout functionality (to be added on dashboard page)
function logout() {
    localStorage.removeItem('loggedInUser');
    alert("You have logged out successfully.");
    window.location.href = "login.html";
}
