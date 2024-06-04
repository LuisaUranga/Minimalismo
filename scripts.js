document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".image");

    images.forEach(function (image) {
        image.addEventListener("click", function () {
            const modalImg = document.getElementById("modalImg");
            modalImg.src = this.dataset.modal;
            const modal = document.getElementById("modal");
            modal.style.display = "block";
        });
    });

    const closeModal = document.querySelector(".close");
    closeModal.addEventListener("click", function () {
        const modal = document.getElementById("modal");
        modal.style.display = "none";
    });

    window.addEventListener("click", function (event) {
        const modal = document.getElementById("modal");
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});

