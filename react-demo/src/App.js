import './App.css';
import Api from './components/Api';
import Hello from './components/Hello';
// import UseContext from './components/Hooks/useContext';
// import UseCallback from './components/Hooks/UseCallback';
import UseEffect from './components/Hooks/UseEffect';
import UseRef from './components/Hooks/UseRef';
import UseState from './components/Hooks/UseState';




function App() {
  // const uri = "https://jsonplaceholder.typicode.com/users";
  return (
    <div >
      <h1 className='card' >hello</h1>
     <Hello />
     <UseState />
     <UseEffect />
     <Api />
     <UseRef/>
     {/* <UseCallback /> */}
     {/* <UseContext /> */}
    </div>
  );
}

export default App;
