import { create } from 'zustand'

interface Info {
    name?: string
    age?: number
}

/**
 * 定义状态类型CounterState，包含count、info、increment和decrement五个属性
 */
type CounterState = {
    count: number,
    info: Info,
    increment: () => void
    decrement: () => void,
    setName: () => void
}

/**
 * create是一个函数，用于创建一个状态管理器useCounter，初始值为0
 */
export const useCounter = create<CounterState>((set) => ({
    count: 0,
    info: {
        name: 'Jamie',
        age: 0
    },
    increment: () => set((state) => ({ count: state.count + 1, info: state.info })),
    decrement: () => set((state) => ({ count: state.count - 1, info: state.info })),
    setName: () => set((state) => ({ info: { ...state.info, name:'king'}}))
}))
