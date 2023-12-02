import { AdvancedProps } from './Components/AdvancedProps';
import { ChildrenProps } from './Components/ChildrenProps';
import { EventProps } from './Components/EventProps';
import ReducerType from './Components/ReducerType';
import { StateHook } from './Components/StateHook';
import TypingArr from './Components/TypingArr';
import TypingObject from './Components/TypingObject';
import Typingprops from './Components/TypingProps';
import ThemeProvider from './Components/UseContext/ThemeProvider';
import Box from './Components/UseContext/Box';
import { themeObj } from './Components/UseContext/ThemeProvider';
import { theme } from './Components/UseContext/theme';
import ClassComp from './Components/ClassComp';
import LoginComp from './Components/Component Props/LoginComp';
import TemplateLiteral from './Components/TemplateLiteral';
import { FunctionalComp } from './Components/New Notes/FunctionalComp';
import ClassComps from './Components/New Notes/ClassComps';
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
     {/* <EventProps input={(e)=>{console.log(e.target.value)}} clickmsg={(e,id)=>console.log("clicked",id)}/> */}
     {/* <StateHook/> */}
     {/* <ReducerType/> */}
      {/* <ThemeProvider>
        <Box/>
      </ThemeProvider> */}
      {/* <ClassComp age={25}/> */}
      {/* <LoginComp/> */}
      {/* <TemplateLiteral position='center'/> */}
      <FunctionalComp person={{name:"vinoth",age:28}}/>
      <ClassComps batman={person}/>
     </div>
  );
}
 
export default App;
