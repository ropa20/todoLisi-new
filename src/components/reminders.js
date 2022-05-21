import React, { useEffect, useState } from "react";
import {DeleteFilled} from "@ant-design/icons"
import { Checkbox } from 'antd';
import { useSelector, useDispatch } from "react-redux";
import { addTodo, addTitle, deleteTodo, checkTodo, addDate } from "../actions/index";
import { DatePicker } from 'antd';
import Title from "./title"

import "../index.css";


const Todo =()=> {

    const [inputData, setInputData]=useState("");
    const [inputDate, setInputDate]= useState("");
    const list=useSelector((state)=>state.todoReducer.list);
    const date=useSelector((state)=>state.todoReducer.date);

    const dispatch = useDispatch();
    const [checked, setChecked] = useState([]);

    const handleCheck = (event) => {
        var updatedList = [...checked];
        if (event.target.checked) {
          updatedList = [...checked, event.target.value];
        } else {
          updatedList.splice(checked.indexOf(event.target.value), 1);
        }
        setChecked(updatedList);
      };

    
// Return classes based on whether item is checked
    const isChecked = (item) =>
        checked.includes(item) ? "checked-item" : "not-checked-item";

console.log({date});
    return ( 
        <div className="container">
            <Title />
            <div className="add-item">
                <input type="text" class="form-control" placeholder="" 
                value={inputData} 
                onChange={(e)=>setInputData(e.target.value)}/>
                <div className="add-date">
                <button className="item-tbn" type="button" id="button-addon1" 
                onClick={()=> dispatch(addTodo(inputData), setInputData(''))}>
                    Add
                </button>
                <span style={{ display: 'block', width: 700,  }}>
                    <DatePicker value={inputDate} onChange={date=>setInputDate(date)} />
                    <button className="date-btn" type="button" id="button-addon2" 
                onClick={()=> dispatch(addDate(inputDate))}>
                    Add date
                </button>
                </span>
                </div>
            </div>

            <div className="show">
                {
                list.map((elem)=>{
                    return(
                        <div className="each-line">
                        <div className="each-items" key={elem.id}>
                            <span className="check">
                                <Checkbox value={elem} type="checkbox" onChange={handleCheck}/>
                                    <span className={isChecked(elem)}>
                                        <span className="item">{elem.data}</span>
                                    </span>
                                    <div className="date">
                                        
                                        <h4>{date}</h4>
                                    </div>
                            </span>
                            <button className="delete-btn" type="button"  
                            onClick={()=> dispatch(deleteTodo(elem.id))}>
                                <span style={{fontSize:25, color: "tomato"}}><DeleteFilled/></span>
                            </button>
                        </div>
                        <hr></hr>
                        </div>
                        )
                    })
                }
                
            </div>
        </div>
     );
}
export default Todo ;