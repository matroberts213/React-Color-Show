import React from 'react';

// translated the colorArr from Colorshow into hex codes(rearranged)
const maincolorArr = [
  "#990000", // red
  "#000066", // blue
  "#003300", // green
  "#b38600", // yellow
  "#4d004d", // purple
  "#cc5200", // orange
  "#73264d", // hotpink
  "#4d2600", // brown
];

export class BackgroundColors extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      color: "#b38600"
    }
  }

  componentDidMount(){
    let maincolorPos = 0;
    setInterval(()=>{
      if(maincolorArr.length - 1 > maincolorPos){
        this.setState({
          color: maincolorArr[maincolorPos]
        });
        maincolorPos++
      } else {
        this.setState({
          color: maincolorArr[maincolorPos]
        });
        maincolorPos = 0
      }
    }, 4700);
  }

  render(){
    const styleObj = {
      backgroundColor: this.state.color
    };

    return (
      <section style={styleObj} id="backgroundcolor">

      </section>
    );

  }
}
