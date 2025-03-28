  const counters = document.querySelectorAll('.counter');
  const speed = 150;

  counters.forEach(counter => {
   function updateCount() {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;
      const increment = target / speed;

      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(updateCount, 10);
      } else {
        counter.innerText = target;
      }
    };

    
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          updateCount();
          observer.unobserve(counter);
        }
      });
    }, {threshold: 1});

    observer.observe(counter);
  });

  const cardobserver = new IntersectionObserver(entries =>{
    entries.forEach(entry =>{
      if(entry.isIntersecting) {
        const element=entry.target;
        element.style.opacity='1';
        if (element.classList.contains('contact')){
          element.classList.add('animateslideinleft');
        }
        else if(element.classList.contains('social')){
          element.classList.add('animateslideinright');
        }
        else if(element.classList.contains('log')){
          element.classList.add('animatefadein');
        }
        else if(element.classList.contains('newscard')){
          element.classList.add('animatefadein');
        }
        else if(element.classList.contains('eventcard')){
          element.classList.add('animatefadein')
        }
        else if(element.classList.contains('clubcard')){
          element.classList.add('animatefadein')
        }
        cardobserver.unobserve(element);
      }
    });
  }, {threshold: 0.3});

  document.querySelectorAll('.aos').forEach(el=>{cardobserver.observe(el)});


