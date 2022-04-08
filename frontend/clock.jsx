import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() }
    this.tick = this.tick.bind(this)
  }

  tick(){
    this.setState({date: new Date()})
  }

  componentDidMount(){
    this.interval = setInterval(this.tick, 1000)
    console.log(this.interval)
  }
  
  componentWillUnmount(){
    clearInterval(this.interval)
  }

  render() {
    return (
    <div className="clock">
      <h1>
        Old Papi McGappy AKA Clock
      </h1>

        <p>
          <span>
            Time:
          </span>
          <span>
            {`${this.state.date.getHours()}:${this.state.date.getMinutes()}:${this.state.date.getSeconds()}`}
          </span>
        </p>
        <p>
          <span>Date:</span>
          <span>
            {`${this.state.date.getMonth()} ${this.state.date.getDate()} ${1900 + this.state.date.getYear()}`}
          </span>
        </p>
        {/* ${this.state.date.getDay()} need to get Friday*/}
    </div>
    )
  }
}



export default Clock