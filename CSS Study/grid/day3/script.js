function init(){
  const rightArrow =  document.querySelector('.rightArrow');
  const leftArrow =  document.querySelector('.leftArrow');
  const upTest = document.querySelector('.detailSection1');
  const rootValue = document.querySelector(':root');
  let position = 0;
  let text = '1fr / ';

  rightArrow.addEventListener('click', function(e){
    position++;
    if(position == 5){
      position = 4;
    }
    rootValue.style.setProperty('--position', `-${position*100}vw`);
  })

  leftArrow.addEventListener('click', function(e){
    position--;
    if(position == -1){
      position =0;
    }
    rootValue.style.setProperty('--position', `-${position*100}vw`);
  })

  upTest.addEventListener('scroll', function(e){
    console.log(e.target);
  })

}

window.onload = init;