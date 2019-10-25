import React,{ Component,useState } from 'react';
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
import CounterReducer from './sample/CounterReducer';
import Info from './sample/Info';
import Info2 from './sample/Info2';
import Average from './sample/Average';
import SassComponent from './sample/SassComponent';
// import './App.css';

function getRandomColor(){
  return '#'+Math.floor(Math.random() * 16777215).toString(16);
}

// class App extends Component {
const App = () => {
  
  // state = {
  //   color: '#000000'
  // }

  const handleClick = () => {
    // this.setState({
    //   color: getRandomColor()
    // });
    setColor(getRandomColor());
  }

  

  // render(){
    const name = 'react';
    const [visible, setVisible] = useState(false);
    const [color, setColor] = useState('#000000');
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
        <button onClick={handleClick}>랜덤색상</button>
        <ErrorBoundary>
          <LifeCycleSample color={color}/>
        </ErrorBoundary>

        <p>=================Info=================</p>
        <button onClick={() => {
            setVisible(!visible);
        }}>{visible ? '숨기기' : '보이기'}
        </button>
        <hr/>
        {visible && <Info/>}

        <p>=================CounterReducer=================</p>
        <CounterReducer/>

        <p>=================Average=================</p>
        <Average/>

        <p>=================Info2=================</p>
        <Info2/>

        <p>=================SassComponent=================</p>
        <SassComponent/>      
        
      </div>
    )
  // }
}

export default App;
