//holds your current state and action
const initialData={
    list:[]
}

const todoReducer=(state=initialData, action)=>{
    switch(action.type)
    {
        case "ADD_TODO" :

        const {id, data} = action.payload;
        return{
            ...state, //previos state
            list:[...state.list,action.payload]
        }
        
        case "DELETE_TODO" :

        const newList=state.list.filter((elem)=>elem.id !== action.id)
            return{
                ...state, //previos state
                list: newList
            }

        case "ADD_TITLE" :

            const {titleId, title} = action.payload;
            return{
                ...state,
                title:title,
                titleId:titleId,
            }
            case "ADD_DATE" :
                const {date,_id} = action.payload;
                return{
                    ...state, //previos state
            list:[...state.list,
                {       //action taken, new state
                    _id:_id,
                    date:date,
            }]
                }

        default: return state;
    }
}
export default todoReducer;