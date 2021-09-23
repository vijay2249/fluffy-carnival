document.querySelector('.menu').addEventListener('click',()=>{
    document.querySelectorAll('.target').forEach((item)=>{
      item.classList.toggle('toggle')
    })
  }
)
let icons = document.querySelectorAll('.section1-icons i')
i = 1;
setInterval(()=>{
  i++;
  icon = document.querySelector('.change');
  icon.classList.remove('change')
  if(i>icons.length){
    icons[0].classList.add('change')
    i = 1
  }
  else icon.nextElementSibling.classList.add('change')
}, 1500)


