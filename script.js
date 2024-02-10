document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('feedback-form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Collecting data from form elements
        const formData = {
            usn: document.getElementById('usn').value,
            name: document.getElementById('name').value,
            contentDelivery: document.querySelector('input[name="contentDelivery"]:checked').value,
            topicRelevance: document.querySelector('input[name="topicRelevance"]:checked').value,
            overallExperience: document.getElementById('overallExperience').value,
            rating: document.querySelector('input[name="rating"]:checked').value,
            feedback: document.getElementById('feedback').value,
        };

        // Sending the form data to the Google Sheet via SheetDB
        fetch('https://sheetdb.io/api/v1/7872s9xmkl197', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({data: formData}),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            // Redirect to thank you page
            window.location.href = 'next.html';
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    });
});
