import React, { createRef, RefObject } from 'react';
import Counter from './Counter';
import Inputs from './Inputs';

class App extends React.PureComponent {
  state = {
    isCounterVisible: true
  }
  paragraphElement: RefObject<HTMLParagraphElement> = createRef();
  render() {
    const counterElement = this.state.isCounterVisible ? <Counter init={5} /> : null;

    return (
      <div className="App">
        <Inputs />
        <p
          ref={this.paragraphElement}>
          Hello
        </p>
        <button onClick={this.addChar}>Add !</button>
        <br />
        <button onClick={this.toggleVisibilityCounter}>Show/Hide counter</button>
        {counterElement}
      </div >
    );
  }
  addChar = () => this.paragraphElement.current!.textContent += "!";
  toggleVisibilityCounter = () => this.setState({ isCounterVisible: !this.state.isCounterVisible })
}

export default App;