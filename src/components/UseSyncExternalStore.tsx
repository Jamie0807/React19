import { useSyncExternalStore } from 'react'

// useSyncExternalStore 这个hook帮助 react 将外部状态与视图进行同步
// 发布订阅模式
// 它需要三个参数:
// 1. 订阅函数, 用于订阅外部状态变化
// 2. 获取状态快照函数, 用于获取最新状态
// 3. 获取状态快照函数, 用于在服务端渲染时获取最新状态



// 初始状态
let count = 0;

type Listener = () => void

type CountAction = {
    type: 'increment' | 'decrement'
}

type CountState = {
    count: number
}

// listeners 是一个数组, 用于存储所有订阅函数, 一旦状态更新, 通知所有订阅函数, 让订阅函数会调用获取状态快照函数获取最新结果
let listeners: Listener[] = []

// 状态变更函数
const reducer = (state: CountState, action: CountAction): CountState => {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 }
        case 'decrement':
            return { count: state.count - 1 }
        default:
            return state
    }
}

// 触发状态变更
// 监听函数调用,要通过dispatch来完成状态变更
function dispatch(action: CountAction) {

    // 调用状态变更函数, 来更新状态
    // 状态变更函数返回新的状态, 我们需要将新的状态赋值给 count
    // 状态变更函数返回新的状态, 我们需要将新的状态赋值给 count
    count = reducer({count: count}, action).count

    console.log(count)

    // 触发订阅函数
    listeners.forEach(listener => listener())
}

// 订阅状态变更函数
// 当count变化时, 应该要通知react更新视图
const subscribe = (fn: () => void) => {
    listeners.push(fn)

    // 清除订阅函数
    return () => {
        listeners = listeners.filter(listener => listener !== fn)
    }
}


export const UseSyncExternalStoreDemo = () => {
    // 使用订阅函数 subscribe 来订阅 count 外部状态变化, 一旦count更新,通知给我,我会使用获取状态快照函数获取最新结果
    const state = useSyncExternalStore(
        subscribe, 
        // 获取状态快照函数, 用于获取最新状态
        () => count,
        // 服务端渲染时, 也需要获取最新状态
        () => count,
    )
    return (
        <div>
            <h1>当前计数: {state}</h1>
            <button onClick={() => dispatch({type:'increment'})}>增加</button>
            <button onClick={() => dispatch({type:'decrement'})}>减少</button>
        </div>
    )
}

