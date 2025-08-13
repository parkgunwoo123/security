// 모달 요소 가져오기
const modal = document.getElementById("imgModal");
const modalImg = document.getElementById("modalImg");

// 클래스명이 'assignment'인 모든 이미지 선택
const images = document.querySelectorAll(".assignment");

// 각 이미지에 클릭 이벤트 추가
images.forEach(img => {
    img.addEventListener("click", (e) => {
        modal.style.display = "block";      // 모달 보이기
        modalImg.src = e.target.src;        // 모달 이미지에 클릭한 이미지 경로 넣기
    });
});

// 모달 배경 클릭 시 모달 닫기
modal.addEventListener("click", () => {
    modal.style.display = "none";
});

// 모달 이미지 클릭 시 모달 닫히는 이벤트 막기
modalImg.addEventListener("click", (e) => {
    e.stopPropagation();
});
