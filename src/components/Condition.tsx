import { useEffect, useState } from 'react';


/**
 * 条件渲染
 * @returns 渲染后的组件
 */
export const ConditionDemo = () => {
    const [count, setCount] = useState(0)
    useEffect(() => {
        const interval = setInterval(() => {
            setCount((c) => c + 1)
        }, 1000)
        return () => clearInterval(interval)
    }, [])
    return (
        <div>
            <div>
                <p>Count: {count % 2 === 0 ? '偶数' : '奇数'}</p>
            </div>
        </div>
    );
};