import React, { useState } from 'react'

function FormComp() {
    const [inputValue,setInput]=useState<string>("");
    const [selectValue,setSelect]=useState<string>("React")
    const [degree,setDegree]=useState('Choose any')

    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setInput(e.target.value)
    }
    const selectChange=(e:React.ChangeEvent<HTMLSelectElement>)=>{
        setSelect(e.target.value)
    }
    const radioChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setDegree(e.target.value)
    }
    const submitForm=(event:React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault()
        console.log(`Input value ${inputValue} & Select value ${selectValue} & degree ${degree}`)
    }
  return (
    <>
    <div>FormComp</div>
    <form onSubmit={submitForm}>
        <label htmlFor="inputField">Customer Name</label>
        <input type='text' value={inputValue} onChange={(e)=>handleChange(e)} id='inputField'/>
        <label htmlFor="course">Select course</label>
        <select name="course" id="course" value={selectValue} onChange={selectChange}>
            <option value="React">React</option>
            <option value="Angular">Angular</option>
            <option value="Vue JS">Vue JS</option>
        </select>
        <input type="radio" value="B.E" id='B.E' name='degree' checked={degree == "B.E"} onChange={(e)=>radioChange(e)}/>
        <label htmlFor="degree">B.E</label>
        <input type="radio" value="Msc" id='Msc' name='degree' checked={degree == "Msc"} onChange={(e)=>radioChange(e)}/>
        <label htmlFor="degree">Msc</label>
        <input type="radio" value="Mtech" id='Mtech' name='degree' checked={degree == "Mtech"} onChange={(e)=>radioChange(e)}/>
        <label htmlFor="degree">Mtech</label>
        <button type='submit'>Submit</button>
    </form>
    </>
  )
}

export default FormComp