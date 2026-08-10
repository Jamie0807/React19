import React, { useContext, useState  } from 'react'



/**
 * 深层状态传递
 */
// function GrandSon(props: { count: number }) {
//     return <div>{props.count}</div>
// }
// /**
//  * 透传props
//  */
// function Son(props: { count: number }) {
//     return <GrandSon {...props}></GrandSon>
// }
// /**
//  * 透传props
//  */
// function Parent(props: { count: number }) {
//     return <Son {...props}></Son>
// }
// /**
//  * 透传props
//  */
// function GrandPa(props: { count: number }) {
//     return <Parent {...props}></Parent>
// }

// export function UseContextDemo() {
//     return <GrandPa count={0}></GrandPa>
// }



// Consumer是上下文对象的消费者，用于消费上下文值,GrandSon是消费者组件

// function GrandSon() {
//     return (
//         <CountContext.Consumer>
//             {value => <div>{value}</div>}   
//         </CountContext.Consumer>
//     )
// }

/**
 * 深层状态传递
 */
// useContext 用于消费上下文值,GrandSon是消费者组件
function GrandSon() {
    // useContext 是一个函数，用于从上下文对象中获取上下文值
    const count = useContext(CountContext)
    return (
        <div>{count}</div>
    )
}
function Son() {
    return <GrandSon></GrandSon> 
}
function Parent( ) {
    return <Son></Son>
}
function GrandPa() {
    return <Parent></Parent>
}

//createContext 是一个函数，用于创建一个上下文对象 ，默认值为0
const CountContext = React.createContext(0)

export function UseContextDemo() {
    const [count, setCount] = useState(0)
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>增加</button>
            <button onClick={() => setCount(count - 1)}>减少</button>
            
            {/* Provider是上下文对象的提供者，用于提供上下文值给子组件,GrandPa是提供者组件，count是上下文值 */}
            <CountContext.Provider value={count}>
                <GrandPa></GrandPa>
            </CountContext.Provider>
        </div>
    )
}