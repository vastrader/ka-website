let introka = document.querySelector('.introka');

let introkalogo = document.querySelector('.introkalogo');

let intrologoSpan = document.querySelectorAll('.intrologo');


window.addEventListener('DOMContentLoaded', ()=>{


  setTimeout(()=>{

    intrologoSpan.forEach((span, idx)=>{
        setTimeout(()=>{
            span.classList.add('active');
        }, (idx + 1) * 400)
    });

    setTimeout(()=>{
        intrologoSpan.forEach((span, idx)=>{

            setTimeout(()=>{
                span.classList.remove('active');
                span.classList.add('fadeintro');
            }, (idx + 1) * 50)
        })
    }, 2000);


    setTimeout(()=>{
        introka.style.top = '-100vh';
    }, 2300)



  })

})