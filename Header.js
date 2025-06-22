import React, { Component } from 'react';

class MyComponent extends Component {
  constructor(props) {
    super(props);
    
    
    this.state = {
      count: 0,
      message: 'Hello, World!'
    };
    
    
    this.handleClick = this.handleClick.bind(this);
  }
  
  
  componentDidMount() {
    console.log('Component mounted');
  }
  
  
  componentWillUnmount() {
    console.log('Component will unmount');
  }
  
  
  handleClick() {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  }
  
  
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>{this.state.message}</p>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleClick}>Increment</button>
      </div>
    );
  }
}

export default MyComponent;

