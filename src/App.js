import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Application from './pagedraw/application'

class App extends Component {
  constructor() {
    super()
    this.state = {
      mode: "topbar1",
      rightMode: "design-right-bar1",
      binding: false,
      event: false,
      repeat: false,
      conditional: false,
      link: false,
      cursor: false,
      leftMode: "code-left-bar1",
      respToolbar: false,
    };
  }
  render() {
    return (
      <Application 
        state={this.state}
        changeToDesign={this.changeToDesign.bind(this)}
        changeToCode={this.changeToCode.bind(this)}
        addBinding={this.addBinding.bind(this)}
        addEvent={this.addEvent.bind(this)}
        addRepeat={this.addRepeat.bind(this)}
        addConditional={this.addConditional.bind(this)}
        addLink={this.addLink.bind(this)}
        addCursor={this.addCursor.bind(this)}
        changeLeftBar={this.changeLeftBar.bind(this)}
        changeToResponsiveness={this.changeToResponsiveness.bind(this)}/>
    );
  }

  changeToDesign() {
    this.setState({
      mode: "topbar1",
      rightMode: "design-right-bar1",
      respToolbar: false,
    });
  }

  changeToCode() {
    this.setState({
      mode: "topbar2",
      rightMode: "code-right-bar1",
      respToolbar: false,
    });
  }
  addBinding() {
    this.setState({
      rightMode: "code-right-bar2",
      binding: true,
    });
  }
  addEvent() {
    this.setState({
      rightMode: "code-right-bar2",
      event: true,
    });
  }
  addRepeat() {
    this.setState({
      rightMode: "code-right-bar2",
      repeat: true,
    });
  }
  addConditional() {
    this.setState({
      rightMode: "code-right-bar2",
      conditional: true,
    });
  }
  addLink() {
    this.setState({
      rightMode: "code-right-bar2",
      link: true,
    });
  }
  addCursor() {
    this.setState({
      rightMode: "code-right-bar2",
      cursor: true,
    });
  }
  showGlobalMenu() {
    this.setState({
      globalMenu: "true",
    });
  }
  changeLeftBar(step) {
    this.setState({
      leftMode: step,
    });
  }
  changeToResponsiveness() {
    this.setState({
      rightMode: "responsiveness1",
      respToolbar: true,
    });
  }
}

export default App;
