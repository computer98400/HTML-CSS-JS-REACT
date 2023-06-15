function init(){

  const popup = document.querySelector('.player');
  const popupCloseBtn = document.querySelector('.popupexitbtn');

  popup.addEventListener('click', function(e){
    const test = document.querySelector('.popup');
    test.style.setProperty('display', 'flex');
  });

  popupCloseBtn.addEventListener('click', function(e){
    const test = document.querySelector('.popup');
    test.style.setProperty('display', 'none');

  })

}

window.onload = init;