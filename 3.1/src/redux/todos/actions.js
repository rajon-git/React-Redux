import { ADDED, ALLCOMPLETED, CLEARCOMPLETED, COLORSELECTED, DELETED, TOGGLED } from "./actionTypes"

export const added = (todotext)=>{
    return {
        type: ADDED,
        payload: todotext
    }
}

export const toggled = (todoId)=>{
    return {
        type: TOGGLED,
        payload: todoId
    }
}

export const coloSelected = (todoId,color)=>{
    return {
        type: COLORSELECTED,
        payload: {
            todoId,
            color
    }}
}

export const deleted = (todoId)=>{
    return {
        type: DELETED,
        payload: todoId
    }
}

export const allCompleted = ()=>{
    return {
        type: ALLCOMPLETED,
    }
}

export const clearCompleted = ()=>{
    return {
        type: CLEARCOMPLETED,
    }
}