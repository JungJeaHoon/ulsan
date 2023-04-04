
const header = document.querySelector('.header_inner')

/*js 스크롤이 되기만 하면 무조건 실행*/

window.addEventListener('scroll', function(){
header.classList.add('scroll_move');

if(window.scrollY == 0){
header.classList.remove('scroll_move');
}
})
