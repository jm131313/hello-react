import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyComponent from './MyComponent'; 

function App() {
  const text = '테스트 와우';
  const condition = false;
  const style = {
    backgroundColor : 'gray',
    border : '1px solid black',
    height : Math.round(Math.random() * 300) + 50,
    width : Math.round(Math.random() * 300) + 50,
    WebkitTransion: 'all',
    MozTransition : 'all',
    msTransition : 'all'
  };

  return (
    <div className="App">
      {/* 요소 밖에서는 이렇게 주석 작성 */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="my-div"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          // self-closed 태그에서만 작동하는 주석
          /* 이렇게 작성할 수도 있지 */
        >
         {text}
         {
           condition && '거짓'
         }
        </a>
         <div style={style}></div>

         <MyComponent />
         <MyComponent name="React" age={10}/>
      </header>
    </div>
  )
}

export default App;
