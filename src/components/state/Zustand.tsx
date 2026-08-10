import { useCounter } from '../../state/zustand/useCounter'

export const ZustandDemo = () => {
    const { count, info, increment, decrement,setName } = useCounter();
    return (
        <div>
            <h1>info: Name:{info.name}, Age:{info.age}</h1>
            <h1>count: {count}</h1>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
            <button onClick={setName}>setName</button>
        </div>
    )
}
