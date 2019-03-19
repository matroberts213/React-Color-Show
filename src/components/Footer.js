import React from "react";

export class Footer extends React.Component{
  render(){
    return(
      <div className="footer">
        <p>{this.props.title}</p>
      </div>
    )
  }
}
