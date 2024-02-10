document.addEventListener('DOMContentLoaded', function() {
    const stars = document.querySelectorAll('.star');
    let rating = 0;

    stars.forEach(star => {
        star.addEventListener('click', function() {
            rating = this.getAttribute('data-value');
            updateStars(rating);
        });
    });

    function updateStars(rating) {
        stars.forEach(star => {
            star.style.color = rating >= star.getAttribute('data-value') ? '#ffd700' : '#ddd';
        });
    }

    const form = document.getElementById('feedback-form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const formData = {
            usn: document.getElementById('usn').value,
            name: document.getElementById('name').value,
            rating: rating,
            feedback: document.getElementById('feedback').value,
        };

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
            window.location.href = 'next.html';
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    });
});
