import React, { useEffect, useState } from "react";
import {DeleteFilled} from "@ant-design/icons"
import { Checkbox } from 'antd';
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../actions/index";
import { DatePicker } from 'antd';
import Title from "./title"

import "../index.css";

const Todo =()=> {
    const [inputDate, setInputDate]= useState("");
    const [checked, setChecked] = useState([]);

    //Dispatch
    const dispatch = useDispatch();
    const { addTodo, deleteTodo } = bindActionCreators(actionCreators,dispatch)

    const list=useSelector((state)=>state.todoReducer.list);

    const [values, setValues] = useState({
        title: "",
        description: "",
        loading: false,
        error: "",
      });
    
      const {
        title,
        description,
        loading,
        error,
      } = values;



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

    const onSubmit = (event) => {
        event.preventDefault();
        setValues({ ...values, error: "", loading: true });
        const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };

        const newTodo ={
            todo_title: values.title,
            todo_description: values.description,
            timestamp: new Date().toLocaleDateString('en-us', options),
        }
        console.log(newTodo)
        addTodo(newTodo)
        setValues({
            ...values,
            title: "",
            description: "",
            loading: false,
          });
      };

    const handleChange = (name) => (event) => {
        const value =  event.target.value;
        setValues({ ...values, [name]: value });
    };

    const createTodoForm = () => (
        <form>
          <div className="form-group">
            <input
              onChange={handleChange("title")}
              name="photo"
              className="form-control my-3"
              placeholder="Title"
              value={title}
            />
          </div>
          <div className="form-group">
            <textarea
              onChange={handleChange("description")}
              name="description"
              className="form-control my-3"
              placeholder="Description"
              value={description}
            />
          </div>
    
          <button
            type="submit"
            onClick={onSubmit}
            className="btn btn-outline-success my-3"
          >
            Create Todo
          </button>
        </form>
      );

      const showList = () => {
        return(
            list.map((elem,index)=>{
                return(
                    <div className="each-line" key={index}>
                    <div className="each-items" >
                        <span className="check">
                            <Checkbox  type="checkbox" onChange={handleCheck}/>
                                <span className={isChecked(elem)}>
                                    <span className="item">{elem.data.todo_title}</span>
                                </span>
                                <div className="date">
                                    <h4>{elem.data.timestamp}</h4>
                                </div>
                                <div className="date">
                                    <h4>{elem.data.todo_description}</h4>
                                </div>
                        </span>
                        <button
                            className="delete-btn"
                            type="button"  
                            onClick={()=> dispatch(deleteTodo(elem.id))}>
                                <span style={{fontSize:25, color: "tomato"}}><DeleteFilled/></span>
                        </button>
                    </div>
                    <hr></hr>
                    </div>
                )
            })
        )
      }

    return ( 
        <div className="container">
            <Title />
            <div className="add-item">
            {createTodoForm()}
            </div>
            <div className="show">
                {showList()}
            </div>
        </div>
     );
}
export default Todo ;