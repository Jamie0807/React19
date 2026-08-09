import { useEffect, useState } from 'react';

export type StateDemoProps = {
    onClick?: () => void;
}

/**
 * 状态渲染
 * @param props - 包含onClick的props对象
 * @returns 渲染后的组件
 */
export const StateDemo = (props: StateDemoProps) => {
    const [count, setCount] = useState(0)
    useEffect(() => {
        const interval = setInterval(() => {
            setCount((c) => c + 1)
        }, 1000)
        return () => clearInterval(interval)
    }, [])
    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Click me</button>
            <button onClick={props.onClick}>Click me外部</button>
        </div> 
    );
};