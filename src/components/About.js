import React from "react";


export class About extends React.Component{
  render(){
    return(
      <div id="aboutBox">
        <h1>About</h1>
        <p>This app was created by Matthew Roberts, in efforts to learn some of the magic of React, a JavaScript library designed for use with single page applications(SPAs).
        This project has been mainly focused on Routing, where a user will click on links to other sections, such as "about", "contact", and "home". The routes will tell the browser to load the specific button's component, instead of refreshing the web page. Also covered in this project has been the styling for transitional and color-changing backgrounds, and also a little animation.</p>
      </div>
    );
  }

}
