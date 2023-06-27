// import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import { FunctionMessage } from './components/FunctionMessage';
import {Greet} from './components/Greet';
import { Hello } from './components/Hello';
import { Message } from './components/Message';
import {Welcome} from './components/Welcome';

function App() {

  return( 
    <div className='App'>
    {/* <h1>Welcome to CGG</h1> */}
    {/* <Greet name="React" designation="SSD">
     <p>This is Children Prop</p>  
    </Greet>
    <Greet name="Angular" designation="SD">
      <button>Active</button>
    </Greet>
    <Greet name="Vue" designation="TL"/>
    <Welcome name="React" designation="SSD">
    <p>This is Children Prop</p> 
    </Welcome>
    <Welcome name="Angular" designation="SD"/>
    <Welcome name="Vue" designation="TL"/> */}
    {/* <Hello/> */}
    {/* <Message/> */}
    {/* <FunctionMessage/> */}
    <Counter/>
   </div>
  );
  
}

export default App;
