const test = document.querySelector('.menubtn');
    let toggle = 0;
    test.addEventListener('click', function(){
      const $menu = document.querySelector(':root');
      if(toggle == 0){
        toggle = 1;
        $menu.style.setProperty('--menubaropen', '1fr');
        $menu.style.setProperty('--maincontentshow', '8fr');  
      }else{
        toggle= 0;
        $menu.style.setProperty('--menubaropen', '0fr');
        $menu.style.setProperty('--maincontentshow', '1fr');  
      }
    })
    const menudep = document.querySelectorAll('.menudep');
    menudep.forEach(menu => {


      menu.addEventListener('mouseover', function(){
        this.style.setProperty('height','20%');
        this.style.setProperty('transition','300ms');
        menu.childNodes.forEach(node => {
        if(node.className == 'submenu'){
          node.style.setProperty('height','20%');
        }
      })
      })

      menu.addEventListener('mouseout', function(){
        this.style.setProperty('height','10%');
        menu.childNodes.forEach(node => {
        if(node.className == 'submenu'){
          node.style.setProperty('height','0%');
        }
      })
      })


    })
