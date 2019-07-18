import React from 'react';
import './css/App.css';

/*Components*/
import Header from './components/Header';
import WordList from './components/WordList';
import 'bootstrap/dist/css/bootstrap.css';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      height: window.innerHeight, 
      width: window.innerWidth
    };
    this.updateDimensions = this.updateDimensions.bind(this);
  }
  
  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
  }

  updateDimensions() {
    this.setState({
      height: window.innerHeight, 
      width: window.innerWidth
    });
  }

  render() {
    return (
      <div className="App" style={{height: this.state.height}}>
        <Header />
        <WordList />
      </div>
    );
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }
}

export default App;
