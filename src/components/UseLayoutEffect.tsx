import { useEffect, useLayoutEffect, useRef, useState } from 'react'

export const UseLayoutEffectDemo = () => {
    const [isWide, setIsWide] = useState(false)
    const layoutBoxRef = useRef<HTMLDivElement>(null)
    const effectBoxRef = useRef<HTMLDivElement>(null)
    const layoutTextRef = useRef<HTMLParagraphElement>(null)
    const effectTextRef = useRef<HTMLParagraphElement>(null)

    // useLayoutEffect 用于在浏览器绘制前同步测量元素的宽度
    // 用于在组件渲染前，根据元素的宽度进行布局调整
    useLayoutEffect(() => {
        const width = layoutBoxRef.current?.getBoundingClientRect().width ?? 0

        if (layoutTextRef.current) {
            layoutTextRef.current.textContent = `useLayoutEffect: 浏览器绘制前同步测量，宽度 ${width}px`
        }
    }, [isWide])
    // useEffect 用于在浏览器绘制后异步测量元素的宽度
    // 用于在组件渲染后，根据元素的宽度进行布局调整
    useEffect(() => {
        const width = effectBoxRef.current?.getBoundingClientRect().width ?? 0

        if (effectTextRef.current) {
            effectTextRef.current.textContent = `useEffect: 浏览器绘制后异步测量，宽度 ${width}px`
        }
    }, [isWide])

    return (
        <div>
            <h2>useLayoutEffect 和 useEffect 对比</h2>
            <button onClick={() => setIsWide((value) => !value)}>
                切换盒子宽度
            </button>

            <div>
                <h3>useLayoutEffect</h3>
                <div
                    ref={layoutBoxRef}
                    style={{
                        width: isWide ? 320 : 160,
                        height: 40,
                        background: '#8ecae6',
                        transition: 'width 200ms',
                    }}
                />
                <p ref={layoutTextRef}>等待测量...</p>
            </div>

            <div>
                <h3>useEffect</h3>
                <div
                    ref={effectBoxRef}
                    style={{
                        width: isWide ? 320 : 160,
                        height: 40,
                        background: '#ffb703',
                        transition: 'width 200ms',
                    }}
                />
                <p ref={effectTextRef}>等待测量...</p>
            </div>
        </div>
    )
}
