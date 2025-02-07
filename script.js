let uploadedDocuments = [];

document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.querySelector('#search-doc');
    const searchResults = document.querySelector('.search-results');
    const uploadList = document.querySelector('#uploaded-docs-list');

    // Handle search within uploaded documents
    searchInput.addEventListener('input', function () {
        const query = searchInput.value.toLowerCase();
        searchResults.innerHTML = '';

        const filteredDocs = uploadedDocuments.filter(doc => doc.toLowerCase().includes(query));

        filteredDocs.forEach(doc => {
            const li = document.createElement('li');
            li.textContent = doc;
            searchResults.appendChild(li);
        });

        if (filteredDocs.length === 0 && query !== '') {
            searchResults.innerHTML = '<li>No documents found.</li>';
        }
    });

    // Handle file upload and display uploaded files
    document.querySelector('#upload-file').addEventListener('change', function (event) {
        const file = event.target.files[0];
        if (file) {
            uploadedDocuments.push(file.name);
            
            const li = document.createElement('li');
            li.textContent = file.name;
            uploadList.appendChild(li);
            
            alert(`File "${file.name}" uploaded successfully!`);
        }
    });

    // Start Video Call - Responsive
    document.querySelector('.start-call-btn').addEventListener('click', function () {
        alert('Starting video call...');
        
        const videoCallContainer = document.querySelector('#video-call-container');
        videoCallContainer.innerHTML = ''; // Clear previous iframe
        
        const iframe = document.createElement('iframe');
        iframe.src = 'https://meet.google.com';
        videoCallContainer.appendChild(iframe);
    });

    // Scroll to Features on "Get Started"
    document.querySelector('.hero-btn').addEventListener('click', function () {
        const featuresSection = document.querySelector('.features');
        window.scrollTo({
            top: featuresSection.offsetTop - 50,
            behavior: 'smooth'
        });
    });
});
