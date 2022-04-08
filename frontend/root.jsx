import React from "react";
import Clock from "./clock";
import Tab from "./tab";

const panes = []

class Root extends React.Component {
  constructor(props) {
    super(props);
    
  }


  render(){ 
    return (
      <div className="Root">
        <h1>In Root</h1>
        <Clock />
        <Tabs panes={panes}/>
      </div>
    )
    }

}

export default Root;