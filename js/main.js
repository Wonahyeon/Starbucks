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

