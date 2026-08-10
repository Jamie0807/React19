import { useState, useCallback } from 'react'


export const UseCallbackDemo = () => {
    const [count, setCount] = useState(0)
    
    // useCallback 用于缓存函数，避免每次渲染都创建新的函数实例
    const handleClick = useCallback(() => {
        setCount((c) => c + 1)
    }, [])
    
    return (
        <div>
            <h1>you clicked {count} times</h1>
            <h1 onClick={handleClick}>click me</h1>
        </div>
    )
}