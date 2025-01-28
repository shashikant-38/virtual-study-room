
let uploadedDocuments = [];

document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.querySelector('#search-doc');
    const searchResults = document.querySelector('.search-results');

    if (searchInput) {
        searchInput.addEventListener('input', function () {
            const query = searchInput.value.toLowerCase();

      
            const filteredDocs = uploadedDocuments.filter(doc => doc.toLowerCase().includes(query));

            searchResults.innerHTML = '';
            filteredDocs.forEach(doc => {
                const li = document.createElement('li');
                li.textContent = doc;
                searchResults.appendChild(li);
            });

            if (filteredDocs.length === 0 && query !== '') {
                searchResults.innerHTML = '<li>No documents found.</li>';
            }
        });
    }
});

document.querySelector('#upload-file').addEventListener('change', function (event) {
    const file = event.target.files[0];
    if (file) {
        uploadedDocuments.push(file.name); 
        alert(`File "${file.name}" uploaded successfully!`);
    } else {
        alert('No file selected.');
    }
});
document.querySelector('.start-call-btn').addEventListener('click', function () {
    alert('Starting video call...');
    
    const iframe = document.createElement('iframe');
    iframe.src = 'https://meet.google.com';
    iframe.width = '800';
    iframe.height = '450';
    iframe.style.border = 'none';
    iframe.style.marginTop = '20px';

    const videoCallSection = document.querySelector('.feature:nth-child(3)');
    videoCallSection.appendChild(iframe);
});

document.querySelector('.hero-btn').addEventListener('click', function () {
    const featuresSection = document.querySelector('.features');
    window.scrollTo({
        top: featuresSection.offsetTop - 50, 
        behavior: 'smooth'
    });
});
