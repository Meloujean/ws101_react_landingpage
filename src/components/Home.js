import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';


function Home() {
  useEffect(() => {
    ScrollReveal({
      distance: '80px',
      duration: 2000,
      delay: 200,
    });

    ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
    ScrollReveal().reveal('.home-img, .career-container, .tools-box', { origin: 'bottom' });
    ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
    ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });
  }, []);

  return (
    <section className="home" id="home">
      <div className="home-content">
        <h1 className="pge1 title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
          <b>
            Learn <br /><span>Web Development</span>
            <br className="hidden lg:inline-block" />Interactively
          </b>
        </h1>
        <p>Discover how mastering HTML, CSS, and JavaScript can open doors to endless possibilities in the digital world.</p>
      </div>
      <div className="home-img lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <img className="object-cover object-center rounded" alt="Web Development illustration" src={process.env.PUBLIC_URL + '/1.webp'}/>
      </div>
    </section>
  );
}

export default Home;
