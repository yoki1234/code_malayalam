import React from "react";
import Tools from "../Componenents/Tools";

import SimpleList from "./SimpleList";

const arr=[
   {
    id:1,
    title:"Appointment for Oct",
    descr:"The patient is rescheduled to Oct.",
    isActive: false
   },
   {
    id:2,
    title:"Appointment for Nov",
    descr:"The patient is rescheduled to Nov.",
    isActive: true
   },
   {
    id:3,
    title:"Appointment for Dec",
    descr:"The patient is rescheduled to Dec.",
    isActive: false
   },

];

class List extends React.Component{

    constructor(props){
        super(props);

        this.state={
          data:arr,
          activeState:'all'
        };
    }

    onListChange=(evt)=>{
        const value = evt.target.value;
        // const newList = arr.filter((item)=>{
        //     if(value === 'all'){
        //         return true;
        //     }
        //     if (value ==='active'){
        //         return (item.isActive === true);
        //     }
        //     if (value === 'non-active'){
        //         return (item.isActive === false);
        //     }
        //        return false;
        // });
        // console.log(newList);
        
        // this.setState({
        //     data:newList
        // });
        this.setState({
            activeState:value
        })

    }
    handleDelete=(item)=>{
        const newList = this.state.data.filter((element)=> element.id !== item.id);
        
        this.setState({
            data:newList
        })
    }
    handleLabelClick=(arg)=>{
        this.setState({
            activeState: arg
        });
    }

    render(){
        const{
            data,
            activeState
        }=this.state;

         const newList = data.filter((item)=>{
            if(activeState === 'all'){
                return true;
            }
            if (activeState ==='active'){
                return (item.isActive === true);
            }
            if (activeState === 'non-active'){
                return (item.isActive === false);
            }
               return false;
        });

        return(
          <Tools labelValue={activeState} onAction={this.onListChange}>
            <SimpleList 
                data={newList} 
                onAction={this.handleDelete}
                onLabelClick={this.handleLabelClick}
                />
          </Tools>
        );
    }
}

export default List