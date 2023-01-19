
  const hidden_elements = document.querySelectorAll('.hidden')

  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry => {
     
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        }
    });
  })

  hidden_elements.forEach(element => observer.observe(element))