document.addEventListener("DOMContentLoaded", function() {
    const predictionAlert = document.querySelector('.alert');
    if (predictionAlert) {
        setTimeout(() => {
            predictionAlert.style.display = 'none';
        }, 3000); 
    }
});
