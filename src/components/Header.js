import React from "react";
import { Link } from "react-router-dom";

export class Header extends React.Component{
  render(){
    return (
      <div className="header">
        <a href="#default" className="logo">{this.props.title}</a>
      <div className="header-right">
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
      </div>
      </div>
    )
  }
}
