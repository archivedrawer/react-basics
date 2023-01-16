'use strict';

function Button(props) {
  return (
    <button style={{color: props.color}}>
      {props.text}
    </button>
  );
}

function Input(props) {
  return (
    <input type='text' onChange={() => props.onChange()}/>
  );
}

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Click me!',
      color: '#000'
    };
  }

  handleChange() {
    this.setState({color: '#f00'});
  }

  render() {
    return (
      <div>
        <Button
          text={this.state.text}
          color={this.state.color}
        />
        <Input onChange={() => this.handleChange()}/>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<Main />);
