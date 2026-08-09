import { useRef, useEffect, useState } from "react"

/**
 * 引用渲染
 * @returns 渲染后的组件
 */
export const RefDemo = () => {
    // createRef创建一个ref对象,用于获取DOM元素的引用,useRef创建一个可变的ref对象,用于缓存数据,不会触发组件重新渲染
    const canvasRef = useRef<HTMLCanvasElement | null>(null)
    const audioRef = useRef<HTMLAudioElement | null>(null)

    const [time, setTime] = useState(0)
    // ref缓存数据,不会触发组件重新渲染
    const countRef = useRef<number>(0)
    const [countSnapshot, setCountSnapshot] = useState(0)

    // 获取多元素的引用
    const listRef = useRef<Array<HTMLDivElement | null>>([])
    
    useEffect(() => {
        const canvasDom = canvasRef.current 
        // 获取2d渲染上下文
        const ctx = canvasDom?.getContext('2d')
        // 绘制一个线段
        ctx?.beginPath()
        ctx?.moveTo(100,100)
        ctx?.lineTo(200,200)
        ctx?.stroke()
        ctx?.closePath()


        console.log(listRef.current)
    }, [])
    return (
        <div>
            <canvas ref={canvasRef} width={200} height={200}></canvas>
            <audio ref={audioRef}></audio>

            
            <button onClick={() => {
                countRef.current++
                console.log(countRef.current)
                setCountSnapshot(countRef.current)
            }}> {countSnapshot}  ----  {time} + </button>
            
            <button onClick={() => {
                setTime(time + 1)
            }}> 更新</button>

            {[0,1,2,3,4].map((item,index) => {
                return <div 
                key={item}
                ref = { (node) => {
                    listRef.current[index] = node
                }}></div>
            })}
        </div>
    ) 
}
