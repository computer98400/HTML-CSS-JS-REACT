function init(){
  const rightArrow =  document.querySelector('.rightSection');
  const leftArrow =  document.querySelector('.leftSection');
  const upTest = document.querySelector('.detailSection1');
  const rootValue = document.querySelector(':root');
  let position = 0;

  rightArrow.addEventListener('mouseover', function(e){
    const rightarrowstyle = document.querySelector('.rightArrow');
    rightarrowstyle.style.display = 'flex';
  })
  
  rightArrow.addEventListener('mouseout', function(e){
    const rightarrowstyle = document.querySelector('.rightArrow');
    rightarrowstyle.style.display = 'none';
  })
  
  leftArrow.addEventListener('mouseover', function(e){
    const rightarrowstyle = document.querySelector('.leftArrow');
    rightarrowstyle.style.display = 'flex';
  })
  
  leftArrow.addEventListener('mouseout', function(e){
    const rightarrowstyle = document.querySelector('.leftArrow');
    rightarrowstyle.style.display = 'none';
  })


  leftArrow.addEventListener('mouseover', function(e){
    console.log("left");
  })

  rightArrow.addEventListener('click', function(e){
    position++;
    if(position == 5){
      position = 4;
    }
    rootValue.style.setProperty('--position', `-${position*100}vw`);
    rootValue.style.setProperty('--leftposition', `${position*100}vw`);
    rootValue.style.setProperty('--rightposition', `${80+(position*100)}vw`);
    
  })
  
  leftArrow.addEventListener('click', function(e){
    position--;
    if(position == -1){
      position =0;
    }
    rootValue.style.setProperty('--position', `-${position*100}vw`);
    rootValue.style.setProperty('--leftposition', `${position*100}vw`);
    rootValue.style.setProperty('--rightposition', `${80+(position*100)}vw`);
  })


}

window.onload = init;