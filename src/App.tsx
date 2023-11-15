import { AdvancedProps } from './Components/AdvancedProps';
import { ChildrenProps } from './Components/ChildrenProps';
import { EventProps } from './Components/EventProps';
import TypingArr from './Components/TypingArr';
import TypingObject from './Components/TypingObject';
import Typingprops from './Components/TypingProps';

function App() {
  const person={
    firstName:"Bruce",
    lastName:"Wayne"
  }

  const personArr=[
    {
      name:"vinoth",
      age:28
    },
    {
      name:"madhavan",
      age:27
    },
    {
      name:"Yash",
      age:24
    }
  ]
  return (
    <div className="App">
    {/*  <Typingprops name='vinoths' age={25} alive={false}/>
     <TypingObject person={person} nickName="batman"/>
     <TypingArr personArr={personArr}/>
     <AdvancedProps status='success'>
      This is Advanced props children
      <ChildrenProps>
      success
        </ChildrenProps>
     </AdvancedProps> */}
     <EventProps input={(e)=>{console.log(e.target.value)}} clickmsg={(e,id)=>console.log("clicked",id)}/>
    </div>
  );
}

export default App;
