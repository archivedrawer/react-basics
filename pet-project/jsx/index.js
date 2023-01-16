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
    <input type='color' onChange={props.onChange}/>
  );
}

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Click me!',
      color: '#000000'
    };
  }

  handleChange(event) {
    this.setState({color: event.target.value});
  }

  render() {
    return (
      <div>
        <Button
          text={this.state.text}
          color={this.state.color}
        />
        <Input onChange={(event) => this.handleChange(event)}/>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<Main />);
