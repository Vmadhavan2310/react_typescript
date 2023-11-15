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
     <Typingprops name='vinoths' age={25} alive={false}/>
     <TypingObject person={person} nickName="batman"/>
     <TypingArr personArr={personArr}/>
    </div>
  );
}

export default App;
