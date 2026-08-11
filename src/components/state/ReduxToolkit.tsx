import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import type { AppDispatch, RootState } from '../../state/redux/store'
import {
  addByAmount,
  decrement,
  increment,
  reset,
} from '../../state/redux/counterSlice'

export const ReduxToolkitDemo = () => {
  const [amount, setAmount] = useState(5)
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch<AppDispatch>()

  return (
    <div>
      <h2>Redux Toolkit</h2>
      <p>当前计数：{count}</p>
      <button onClick={() => dispatch(decrement())}>-1</button>
      <button onClick={() => dispatch(increment())}>+1</button>
      <input
        type="number"
        value={amount}
        onChange={(event) => setAmount(Number(event.target.value))}
      />
      <button onClick={() => dispatch(addByAmount(amount))}>
        增加指定数量
      </button>
      <button onClick={() => dispatch(reset())}>重置</button>
    </div>
  )
}
