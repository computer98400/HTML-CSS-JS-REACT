function init(){
  const btn = document.querySelector('.btn');
  

  console.log(btn.getBoundingClientRect());
  console.log(btn.clientTop);
  console.log(btn.clientLeft);
  console.log(btn.clientHeight);
  console.log(btn.clientWidth);


}

window.onload = init;