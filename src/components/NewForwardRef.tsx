import { useEffect, useRef } from 'react'
import type { PropsWithChildren, Ref } from 'react';

// 相比于ForwardRef.tsx react19 弃用 forwardRef 改用 props.ref 获取子组件的引用
type FancyButtonProps = PropsWithChildren & {
    ref?: Ref<HTMLButtonElement>
}
const FancyButton = (props: FancyButtonProps) => {
    const { ref, children } = props;
    return (
        <button ref={ref}>
            {children}
        </button>
    )
}

export function ForwardRefDemo() {
    const buttonRef = useRef<HTMLButtonElement>(null);
    useEffect(() => {
        console.log(buttonRef.current)
    }, [])

    return <div><FancyButton ref={buttonRef}>fancy button</FancyButton></div>
}