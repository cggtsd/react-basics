// import logo from './logo.svg';
import './App.css';
import { ClickHandler } from './components/ClickHandler';
import Counter from './components/Counter';
import { FunctionMessage } from './components/FunctionMessage';
import {Greet} from './components/Greet';
import { Hello } from './components/Hello';
import { Inline } from './components/Inline';
import { Message } from './components/Message';
import { NamedList } from './components/NamedList';
import { ParentComponent } from './components/ParentComponent';
import { StyleSheets } from './components/StyleSheets';
import { UserGreetings } from './components/UserGreetings';
import {Welcome} from './components/Welcome';
import './myAppStyles.css'
import styles from './myAppStyles.module.css'
import {Form} from './components/Form'
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
    {/* <Counter/> */}
    {/* <ClickHandler/> */}
    {/* <UserGreetings/> */}
    {/* <ParentComponent/> */}
    {/* <NamedList/> */}
    {/* <StyleSheets primary={false}/> */}
    {/* <Inline/>
    <h1 className='error'>Error</h1>
    <h1 className={styles.success}>Success</h1> */}
    <Form/>
   </div>
  );
  
}

export default App;
