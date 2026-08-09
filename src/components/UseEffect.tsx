import { useEffect, useState } from 'react'



export const UseEffectDemo = () =>{
    const [count, setCount] = useState(0)
    
    const handleClick = () => {
        setCount((c) => c + 1)
    }

    // 当状态发生变化后,还想做其它操作,比如更新文档标题
    useEffect(() => {
        document.title = `you clicked ${count} times`
        return () => {
            document.title = "react"
        }
    }, [count])

    return (
        <div>
            <button onClick={handleClick}>增加</button>
            <h1>you clicked {count} times</h1>
        </div>
    )
}