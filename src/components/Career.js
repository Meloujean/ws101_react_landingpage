import React from 'react';

function Career() {
  return (
    <section className="career" id="career">
      <h2 className="heading">Web Development <span>Specializations</span></h2>
      <div className="career-container">
        <div className="career-box">
          <i className='bx bx-code-alt'></i>
          <h3>Front-End Developer</h3>
          <p>A front-end developer focuses on designing and building the user interface and experience of websites. 
                    Their role is to make sure that the visual and interactive elements are user-friendly, visually appealing, 
                    and functionally effective.</p>
        </div>
        <div className="career-box">
          <i className='bx bx-paint-roll'></i>
          <h3>Back-End Developer</h3>
          <p>Back-end developers create and manage the systems that handle data processing and server-side functions on websites. 
          Back-end developers focus on data storage, security, and other unseen components.</p>
        </div>
        <div className="career-box">
          <i className='bx bx-bar-chart-alt'></i>
          <h3>Full-Stack Developer</h3>
          <p>A full-stack developer is a developer or engineer who can build both the front end and the back end of a website. 
          Since full-stack developers are involved with all aspects of the development process, they must have expertise in both.</p>
        </div>
      </div>
    </section>
  );
}

export default Career;
