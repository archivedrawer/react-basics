'use strict';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: '#f00',
      text: 'Click me!'
    };
  }

  render() {
    return (
      <button style={{color: this.state.color}} onClick={() => this.setState({text: 'Hello World!'})}>
        {this.state.text}
      </button>
    );
  }
}

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<Button />);
