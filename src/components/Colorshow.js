import React from "react";

//background-color transition is acheived through styles.css

const colorArr = [
  "red",
  "blue",
  "green",
  "yellow",
  "purple",
  "orange",
  "hotpink",
  "brown",
];

export class Colorshow extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      color: "red"
    };
  }

  componentDidMount(){
    let colorPos = 0;
    setInterval(() => {
      if(colorArr.length - 1 > colorPos){
        this.setState({
          color: colorArr[colorPos]
        });
        colorPos++
      } else{
        this.setState({
          color: colorArr[colorPos]
        });
        colorPos = 0
      }

    }, 1700)

  }


  render(){


    const styleObj = {
      backgroundColor: this.state.color
    };

    return (
      <section style={styleObj} className="colors" >
        <h2 className= "text" style={{fontWeight: "bold"}}>{this.state.color.toUpperCase()}</h2>
      </section>

    );

  }
}
