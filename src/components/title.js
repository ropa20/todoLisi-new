import React, { useEffect, useState } from "react";
import {DeleteFilled} from "@ant-design/icons"
import { Checkbox } from 'antd';
import { useSelector, useDispatch } from "react-redux";
import { addTodo, addTitle, deleteTodo, checkTodo } from "../actions/index";
import "../index.css";


const Title =()=> {

    const title=useSelector((state)=>state.todoReducer.title);
    const dispatch = useDispatch();
    const [inputTitle, setInputTitle]= useState("");



    return ( 
        <div className="main-div">
            <div className="add-items">
            <div className="title-input">
                    <input type="text" class="form-control" placeholder="" 
                        value={inputTitle} 
                        onChange={(e)=>setInputTitle(e.target.value)}/>
                <button className="item-tbn" type="button" id="button-addon1" onClick={()=> dispatch(addTitle(inputTitle), setInputTitle(''))}>Add title</button>
            </div><br/>
            </div>
            <div className="show">
               <h1> {title}</h1>
                
            </div>
        </div>
     );
}
export default Title ;