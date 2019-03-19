import React from "react";


export class Contact extends React.Component{
  render(){
    return(
      <div className="container" id="contactContainer">
        <form>
          First name:<br/>
          <input type="text" name="firstname" /><br/>
          Last name:<br/>
          <input type="text" name="lastname" /><br/>
          Email:<br/>
          <input type="text" name="email" /><br/>
        </form>
      </div>
    );
  }

}
