import { useState } from 'react'


/**
 * useMemo 优化性能的hook
 * @param count 点击次数
 * @returns 渲染后的组件
 */

export const UseMemoDemo = () =>{
    const [count, setCount] = useState(0)


    // useMemo 会缓存函数的返回值，只有依赖项发生变化时才会重新计算
    // const doubleCount = useMemo(() => {
    //     return count * 2
    // }, [count])

    // react19中,可以不写useMemo,因为react 会自动优化缓存
    const doubleCount = count * 2;

    // useCallback 会缓存函数，只有依赖项发生变化时才会重新创建函数
    // const handleClick = useCallback(() => setCount((c) => c + 1),[])

    // react19中,可以不写useCallback,因为react 会自动优化缓存
    const handleClick = () => {
        setCount((c) => c + 1)
    }
    
    return (
        <div>
            <h1>you clicked {count} times ---- {doubleCount}</h1>
            <h1 onClick={handleClick}>click me</h1>
        </div>
    )
}
