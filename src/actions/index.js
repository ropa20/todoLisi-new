import { v4 as uuid } from 'uuid';

const title_id = uuid();
const id_= new Date().getTime().toString();

export const addTodo = (data) => {
    return{
        type:"ADD_TODO", //WHAT TO DO
        payload:{
            id: {id_},
            data:data,
        }
    }
}

export const addTitle= (title)=>{
    return{
        type: "ADD_TITLE",
        payload :
        {
            titleId: {title_id},
            title: title,
        }
    }
}

export const deleteTodo= (id)=>{
    return{
        type: "DELETE_TODO",
        id
    }
}

export const addDate= (date)=>{
    return{
        type: "ADD_DATE",
        payload :
        {
           date:date,
           id:{id_},
        }
    }
}
