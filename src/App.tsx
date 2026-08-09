import { PropsDemo } from './components/Props'
import { StateDemo } from './components/State'
import { ConditionDemo } from './components/Condition'
import { ListDemo } from './components/List'
import { RefDemo } from './components/Ref'
import { ForwardRefDemo } from './components/ForwardRef'
import { SuspenseDemo } from './components/Suspense'
import { HeaderDemo } from './components/Memo'
import { UseStateDemo } from './components/UseState'
import { UseReducerDemo } from './components/UseReducer'
import { UseContextDemo } from './components/UseContext'
import { UseEffectDemo } from './components/UseEffect'
import { UseMemoDemo } from './components/UseMemo'
import { UseFetchDemo } from './components/UseFetch'



import './App.css'

/**
 * 父组件App，包含子组件PropsDemo
 */
function App() {


  return (
    <>
      <PropsDemo id="1" onClick={(id) => alert(id)}>这里的内容就是children</PropsDemo>
      <StateDemo onClick={() => alert('点击了外部按钮')}></StateDemo>
      <ConditionDemo></ConditionDemo>
      <ListDemo></ListDemo>
      <RefDemo></RefDemo>
      <ForwardRefDemo></ForwardRefDemo>
      <SuspenseDemo></SuspenseDemo>
      <HeaderDemo></HeaderDemo>
      <UseStateDemo></UseStateDemo>
      <UseReducerDemo></UseReducerDemo>
      <UseContextDemo></UseContextDemo>
      <UseEffectDemo></UseEffectDemo>
      <UseMemoDemo></UseMemoDemo>
      <UseFetchDemo></UseFetchDemo>
    </>
  )
}

export default App
