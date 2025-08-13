const modal = document.getElementById("imgModal");
const modalImg = document.getElementById("modalImg");
const screenshot = document.getElementById("screenshot");

screenshot.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
};

modal.onclick = function () {
    modal.style.display = "none";
};
