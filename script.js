let uploadedDocuments = [];

document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.querySelector('#search-doc');
    const searchResults = document.querySelector('#search-results');
    const uploadedDocsList = document.querySelector('#uploaded-docs');

    document.querySelector('#upload-file').addEventListener('change', function (event) {
        const file = event.target.files[0];
        if (file) {
            const fileURL = URL.createObjectURL(file);
            uploadedDocuments.push({ name: file.name, url: fileURL });

            const li = document.createElement('li');
            li.textContent = file.name;
            li.setAttribute('data-url', fileURL);
            li.addEventListener('click', function () {
                window.open(fileURL, '_blank');
            });
            uploadedDocsList.appendChild(li);
        }
    });

    if (searchInput) {
        searchInput.addEventListener('input', function () {
            const query = searchInput.value.toLowerCase();
            const filteredDocs = uploadedDocuments.filter(doc => doc.name.toLowerCase().includes(query));

            searchResults.innerHTML = '';
            filteredDocs.forEach(doc => {
                const li = document.createElement('li');
                li.textContent = doc.name;
                li.setAttribute('data-url', doc.url);
                li.addEventListener('click', function () {
                    window.open(doc.url, '_blank');
                });
                searchResults.appendChild(li);
            });

            if (filteredDocs.length === 0 && query !== '') {
                searchResults.innerHTML = '<li>No documents found.</li>';
            }
        });
    }

    document.querySelector('.start-call-btn').addEventListener('click', function () {
        alert('Starting video call...');
        
        const videoContainer = document.getElementById('video-call-container');
        videoContainer.innerHTML = '';
        const iframe = document.createElement('iframe');
        iframe.src = 'https://meet.google.com';
        iframe.width = '100%';
        iframe.height = '450px';
        iframe.style.border = 'none';

        videoContainer.appendChild(iframe);
    });

    document.querySelector('.hero-btn').addEventListener('click', function () {
        const featuresSection = document.querySelector('.features');
        window.scrollTo({
            top: featuresSection.offsetTop - 50,
            behavior: 'smooth'
        });
    });
});
