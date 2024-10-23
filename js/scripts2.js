document.addEventListener('DOMContentLoaded', () => {
    const imageInput = document.getElementById('imageInput');
    const previewImage = document.getElementById('imagePreview');

    imageInput.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                previewImage.src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    });

    document.getElementById('imageForm').addEventListener('submit', (e) => {
        e.preventDefault();
        console.log('Form submitted with image:', imageInput.value);
        // Add your submission logic here
        
    });
});
