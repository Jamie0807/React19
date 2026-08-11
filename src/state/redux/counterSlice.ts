import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

type CounterState = {
  value: number
}

const initialState: CounterState = {
  value: 0,
}

// createSlice 创建一个 slice, 用于管理 counter 状态
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    addByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
    reset: (state) => {
      state.value = 0
    },
  },
})

export const { increment, decrement, addByAmount, reset } = counterSlice.actions

export const counterReducer = counterSlice.reducer
