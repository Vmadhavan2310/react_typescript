import React from "react";

type classtypeProps={
    batman:{
        firstName:string
        lastName:string
    }
}
type classtypeState={
    name:string
}
 class ClassComps extends React.Component<classtypeProps,classtypeState>{
    constructor(props:classtypeProps){
        super(props)

        this.state={
            name:"vinoth"
        }
    }

    static getDerivedStateFromProps(props:classtypeProps){
        return {name:props.batman.firstName}
    }

    render(){
        return(
            <h3>Its a class Comp {this.state.name} and {this.props.batman.firstName} and {this.props.batman.lastName}</h3>
        )
    }
}

export default ClassComps