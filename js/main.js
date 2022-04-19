'use strict';


function func() {
  let mv = document.getElementsByClassName("m-img");
  let sub = document.getElementsByClassName('s-img');
  for (let i = 0; i < sub.length; i++) {
    sub[i].addEventListener('click', () => {
      for (let k = 0; k < sub.length; k++) {
        mv[k].classList.remove('show');
      }
      mv[i].classList.add('show');


    })

  }
};

func();