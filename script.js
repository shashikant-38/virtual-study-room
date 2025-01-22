// Login Validation
document.querySelector('.login-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.querySelector('#username').value.trim();
    const password = document.querySelector('#password').value.trim();

    // Basic validation
    if (!username || !password) {
      alert('Please fill in all fields.');
      return;
    }

    // Simulated login success (you can integrate backend validation here)
    alert('Login successful! Redirecting to Home...');
    window.location.href = 'home.html'; // Redirect to the home page
});

// Search Functionality on Home Page
document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.querySelector('#search-doc');
    const searchResults = document.querySelector('.search-results');

    if (searchInput) {
      searchInput.addEventListener('input', function () {
        const query = searchInput.value.toLowerCase();

        // Simulated document search (replace this with backend API calls)
        const documents = ['Mathematics Notes', 'Science Papers', 'History Summary', 'English Essays'];
        const filteredDocs = documents.filter(doc => doc.toLowerCase().includes(query));

        // Display results
        searchResults.innerHTML = '';
        filteredDocs.forEach(doc => {
          const li = document.createElement('li');
          li.textContent = doc;
          searchResults.appendChild(li);
        });

        // No results found
        if (filteredDocs.length === 0 && query !== '') {
          searchResults.innerHTML = '<li>No documents found.</li>';
        }
      });
    }
});

// Upload Simulation
document.querySelector('#upload-file').addEventListener('change', function (event) {
    const file = event.target.files[0];
    if (file) {
      alert(`File "${file.name}" uploaded successfully!`);
    } else {
      alert('No file selected.');
    }
});

// Video Call Simulation
document.querySelector('.start-call-btn').addEventListener('click', function () {
    alert('Starting video call...');
    // Redirect to a video call simulation page or implement WebRTC for real calls
    window.open('https://meet.google.com', '_blank');
});
