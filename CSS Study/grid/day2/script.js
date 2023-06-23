function init(){
    const rootValues = document.querySelector(':root');
  const middleSize = document.querySelector('.middle');
  const middleSize2 = window.getComputedStyle(middleSize);
  const left  = document.querySelector('.left');
  const right  = document.querySelector('.right');

  left.addEventListener('mouseover', function(e){
  })
  window.addEventListener('resize',function(e) {
    rootValues.style.setProperty('--checkSize',middleSize2.height);
  })
}

window.onload = init;