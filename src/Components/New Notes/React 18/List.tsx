import { useDeferredValue, useMemo } from "react";
type INputPrps={
    input:string
}
function List(props:INputPrps){
    const list_size=20000;
    const deferValue=useDeferredValue(props.input)
    const list=useMemo(()=>{
        const l=[];
        for(let i=0;i<list_size;i++){
            l.push(<div key={i}>{props.input}</div>)
        }
        return l;
    },[deferValue])
    return (
        <>
         {list}
        </>
    )
}

export default List