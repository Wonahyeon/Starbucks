// 검색창 요소(.search) 선택 시 강제 포커스 및 제어
const searchEl = document.querySelector('.search');
// const searchInputEl = document.querySelector('.search input');
// 아래와 같이 최적화
const searchInputEl = searchEl.querySelector('input');

// 검색창 요소를 클릭하면 input 요소를 포커스하도록 실행
searchEl.addEventListener('click', function () { // 이벤트 핸들러
  searchInputEl.focus(); // 포커스 강제 적용
});

// input 요소에 포커스되면 실행
searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder','통합검색'); // HTML 속성을 추가하는 메소드
  // searchInputEl.placeholder('통합검색'); // 이거 아님
});

// input 요소에 포커스 해제(블러)되면 실행
searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder',''); // HTML 속성을 추가하는 메소드
});

// 스크롤 시 전역 배지(고정 배너) 숨기기
const badgeEl = document.querySelector('header .badges');

// window: BOM Browser Object Model 브라우저 창 객체
window.addEventListener('scroll',function () {
  // console.log(window.scrollY); // y축으로 얼마나 스크롤 했는지에 대한 수치

  // 만약 y축으로 스크롤를 한 수치가 500을 넘으면 배지 요소를 숨기고(display none)
  // 그렇지 않으면 다시 보이기!!(display block)
  // .style 자동완성 안뜨는데 그냥 쓰면 됨
  if (window.scrollY > 500) {
    badgeEl.style.display = "none";
  } else {
    badgeEl.style.display = "block";
  }
});
