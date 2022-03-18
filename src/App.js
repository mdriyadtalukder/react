import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      {/* <Cal></Cal> */}
      <Phl></Phl>
    </div>
  );
}

function Phl() {
  const [ar, Seta] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => Seta(data));
  }, []);
  return (
    <div>
      <h1>This is map</h1>
      <div className="ck">
      {
          
          ar.map(a => <Inf n={a}></Inf>)
        
     }
      </div>
    </div>
  )
}

function Inf(props) {
  const c={
    color:'red'
  }
  return (
    <div className='dv'>
      <p>Name:{props.n.name}</p>
      <p>UserName:{props.n.username}</p>
      <p style={c}>Email:{props.n.email}</p>
    </div>
  )
}



























// function Cal(){
//   const [count,Setc]=useState(0);
//   const cn=()=>{
//     let c=count+1;
//     Setc(c);
//   }
//   const cnl=()=>{
//     let c=count-1;
//     if(c<0){
//     return;
//     }
//     Setc(c);
//   }
//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={cn}>Add</button>
//       <button onClick={cnl}>Sub</button>
//     </div>
//   )
// }

export default App;
