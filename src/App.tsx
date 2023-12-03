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
import FuncChildComp from './Components/New Notes/FuncChildComp';
import TestComp from './Components/New Notes/TestComp';
import GenericTypeProps from './Components/New Notes/GenericTypeProps';
import HookProps from './Components/New Notes/HookProps';
import NewReducerHook from './Components/New Notes/NewReducerHook';
import FormComp from './Components/New Notes/FormComp';
import ParentComp from './Components/New Notes/UseCallback/ParentComp';
import PortalComp from './Components/New Notes/PortalComp';
import CountOrigComp from './Components/New Notes/HOC/CountOrigComp';
import TestCount from './Components/New Notes/HOC/TestCount';
import RenderCountComp from './Components/New Notes/Render Props/RenderCountComp';
import Render1 from './Components/New Notes/Render Props/Render1';
import RenderCustom from './Components/New Notes/Custom hooks/RenderCustom';
import RenderCustom2 from './Components/New Notes/Custom hooks/RenderCustom2';
export type rendersCount={

      count:number
  
}
export type increaseRender=()=>void

function App() {
  const person={
    firstName:"Bruce",
    lastName:"Wayne"
  }

  const personArr=[
    {
      id:1,
      name:"vinoth",
      age:28
    },
    {
      id:2,
      name:"madhavan",
      age:27
    },
    {
      id:3,
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
      {/* <FunctionalComp person={{name:"vinoth",age:28}} styling={{"color":"yellow","backgroundColor":"orange"}}>
        <TestComp/>
      </FunctionalComp> */}
      {/* <ClassComps batman={person}/> */}
      {/* <GenericTypeProps person={personArr}/> */}
      {/* <HookProps/> */}
      {/* <NewReducerHook/> */}
      {/* <FormComp/> */}
      {/* <ParentComp/> */}
      {/* <PortalComp/> */}
      {/* <CountOrigComp/>
      <TestCount/> */}
      {/* <RenderCountComp render={(renderCount:rendersCount,increaseRender:increaseRender)=>
        <Render1 renderCount={renderCount} increaseRender={increaseRender}/>
      }/> */}
      <RenderCustom/>
      <RenderCustom2/>
     </div>
  );
}
 
export default App;
