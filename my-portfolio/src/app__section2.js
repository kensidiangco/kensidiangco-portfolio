import React from 'react';
import './static/app__section2.css';


function Section2() {
	return (
		<div id="about" className="section2">
      <div className="section2__appHeader">
        <h1>Hi, I'm Ken Sidiangco</h1>
      </div>
      
      <div className="section2__render">
        <div className="section2__rowLeft">
    			<div className="section2__card">
          	
            <div className="section2__header">
              <h1>What I do</h1>
            </div>

            <div className="section2__body">
              <p>I'm currently 2nd year college in course of BS-Information Technology at Saint Jude College Manila. </p>
            </div>
          </div>

          <div className="section2__card">
            <div className="section2__header">
              <h1>More about me</h1>
            </div>
            <div className="section2__body">
              <p>I am doing web application on different frameworks to maintain and improve my flexibility skills and also to continue growing my knowledge about web developing.</p><br/>
              <p>While doing projects, I enjoy designing t-shirt, tarpaulin, invitation card and making logos using Adobe Photoshop and Illustrator depends on the concept of the project.</p>
            </div>
          </div>
        </div>
        <div className="section2__smallCard">
            <div className="section2__header">
              <h1>Top Expertise</h1>
            </div>

            <div className="social__list">
              <ul>
                <li>Python</li>
                <li>JavaScript</li>
                <li>Django</li>
                <li>React</li>
                <li>Java</li>
              </ul>
            </div>
        </div>
      </div>
    </div>
	)
}

export default Section2;