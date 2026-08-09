import { useState } from 'react';

export const UseStateDemo = () => {
    // const [count, setCount] = useState(0)

    const [count, setCount] = useState(() => 0)

    const handleClick = () => {
        setCount((c) => c + 1)
    }
    return (
        <div>
            <p>Count: you clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>增加</button>
            <button onClick={() => setCount(count - 1)}>减少</button>

            
            <button onClick={handleClick}>+</button>
        </div>
    )
}