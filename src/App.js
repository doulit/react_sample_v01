import React,{ Component } from 'react';
// import logo from './logo.svg';
import MyComponent from './sample/MyComponent';
import Counter from './sample/Counter';
import Say from './sample/Say';
import EventPractice from './sample/EventPractice';
import ValidationSample from './sample/ValidationSample';
import RefSample from './sample/RefSample';
import ScrollBox from './sample/ScrollBox';
import IterationSample from './sample/IterationSample';
import LifeCycleSample from './sample/LifeCycleSample';
import ErrorBoundary from './sample/ErrorBoundary';
import Info from './sample/Info';
// import './App.css';

function getRandomColor(){
  return '#'+Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {
  
  state = {
    color: '#000000'
  }

  handleClick = () => {
    this.setState({
      color: getRandomColor()
    });
  }

  render(){
    const name = 'react';
    return(
      <div>
        <p>=================MyComponent=================</p>
        <MyComponent/>        

        <p>=================Counter=================</p>
        <Counter/>

        <p>=================Say=================</p>
        <Say/>

        <p>=================EventPractice=================</p>
        <EventPractice/>

        <p>=================ValidationSample=================</p>
        <ValidationSample/>

        <p>=================ScrollBox=================</p>
        <ScrollBox/>

        <p>=================IterationSample=================</p>
        <IterationSample/>

        <p>=================LifeCycleSample=================</p>
        <button onClick={this.handleClick}>랜덤색상</button>
        <ErrorBoundary>
          <LifeCycleSample color={this.state.color}/>
        </ErrorBoundary>

        <p>=================Info=================</p>
        <Info/>
      </div>
    )
  }
}

export default App;
