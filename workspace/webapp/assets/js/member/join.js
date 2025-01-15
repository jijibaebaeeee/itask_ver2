// 회원가입 유효성 검사 추후 구현예정
// 우선 다음페이지로 이동할 수 있게끔만 했습니다 - js


const signBtn = document.querySelector('.lsa-join-infoBtn');

signBtn.addEventListener('click', function(){
  window.location.href="/workspace/webapp/html/member/joinFinish.html";
})