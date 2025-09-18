const modal = document.getElementById("imgModal");
const modalImg = document.getElementById("modalImg");

// 모든 과제 이미지 선택
const images = document.querySelectorAll(".assignment");

images.forEach(img => {
    img.addEventListener("click", function() {
        modal.style.display = "block";
        modalImg.src = this.src;
    });
});

// 모달 배경 클릭 시 닫기
modal.addEventListener("click", function() {
    modal.style.display = "none";
});

// 모달 이미지 클릭 시 닫힘 방지
modalImg.addEventListener("click", function(event) {
    event.stopPropagation();
});
