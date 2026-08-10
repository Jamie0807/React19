import { useReducer } from 'react';

const initialState = {
        count: "",
        id: "",
        name: ""
}
const reducer = (
    state: typeof initialState, 
    action: { type: "updateCount" | "updateId" | "updateName", payload: string }) => {
    switch (action.type) {
        case "updateCount":
            return {
                ...state,
                count: action.payload
            }
        case "updateId":
            return {
                ...state,
                id: action.payload
            }
        case "updateName":
            return {
                ...state,
                name: action.payload
            }
        default:
            return state
    }
}

export const UseReducerDemo = () =>{
    // const [count, setCount] = useState("")
    // const [id, setId] = useState("")
    // const [name, setName] = useState("")

    // useReducer 用于管理状态，比 useState 更复杂
    const [info, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <form action={formData=>{
                console.log(formData.get("name"))
            }}>

                {/* <input name="count" type="text" value={count} onChange={(e) => setCount(e.target.value)} />
                <input name="id" type="text" value={id} onChange={(e) => setId(e.target.value)} />
                <input name="name" type="text" value={name} onChange={(e) => setName(e.target.value)} /> */}

                <input name="count" type="text" value={info.count} onChange={(e) => dispatch({ type: "updateCount", payload: e.target.value })} />
                <input name="id" type="text" value={info.id} onChange={(e) => dispatch({ type: "updateId", payload: e.target.value })} />
                <input name="name" type="text" value={info.name} onChange={(e) => dispatch({ type: "updateName", payload: e.target.value })} />
                <button type="submit">提交</button>
            </form>
        </div>
    )
}