import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import ReactDOM from 'react-dom';
import Body from './components/Body';

// const k = 'Demo';
// const a = React.createElement(
//   'h1',
//   {
//     classNameName : 'getting',
//     style : {color :'red',textTransform : 'uppercase'},
//   },
//   'data'
// )
const a = 1
// const root = ReactDOM.createRoot(
//   document.getElementById('root')
// );
// const element = <h1>Hello, world</h1>;
// root.render(element);

function App() {
  // var da = [];
  // for (let i = 0; i <=0; i++) {
  //   da.push(<Body lable = {'FA' + i} />);
  // }
  return (
    <>
    <Navbar/>
    <div className="container">
      <div className="row justify-content-center ">
        <div className="col-md-6">
        <Body lable = 'FA' />
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
