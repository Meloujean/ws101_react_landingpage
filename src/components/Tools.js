import React from 'react';

function Tools() {
  return (
    <section className="tools" id="tools">
      <h2 className="heading">Web Development<span> Tools</span></h2>
      <div className="tools-container">
        <article className="course">
          <div className="course__image">
            <img src="/image.png" alt="CSS" />
          </div>
          <div className="course__info">
            <h4>Cascading Style Sheets</h4>
            <p>CSS is used to control the appearance of a webpage. It allows
                     you to style and layout HTML elements, such as setting colors, fonts, spacing, 
                     and positioning. CSS makes a webpage visually appealing and responsive.</p>
          </div>
        </article>
        <article className="course">
          <div className="course__image">
            <img src="/image copy 3.png" alt="HTML" />
          </div>
          <div className="course__info">
            <h4>HyperText Markup Language</h4>
            <p>HTML is the standard language used to create and structure 
                    content on the web. It defines the structure of a webpage by using 
                    elements (like headings, paragraphs, links, images, etc.), which are 
                    represented by tags.</p>
          </div>
        </article>
        <article className="course">
          <div className="course__image">
            <img src="/image copy 2.png" alt="JavaScript" />
          </div>
          <div className="course__info">
            <h4>JavaScript</h4>
            <p>JavaScript is a programming language used to add interactivity 
                    and dynamic behavior to websites. You can create 
                    interactive elements like forms, animations, and more. 
                    It enables you to manipulate the HTML and CSS dynamically based on user actions.</p>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Tools;
