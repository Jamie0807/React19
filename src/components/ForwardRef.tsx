import { forwardRef, useEffect, useRef } from 'react'
import type { PropsWithChildren } from 'react';

// forwardRef 用于将组件的引用传递给父组件,用于获取子组件的引用
type FancyButtonProps = PropsWithChildren
const FancyButton = forwardRef<HTMLButtonElement, FancyButtonProps>(
    (props, ref) => (
        <button ref={ref}>
            {props.children}
        </button>
    )
)

export function ForwardRefDemo() {
    const buttonRef = useRef<HTMLButtonElement>(null);
    useEffect(() => {
        console.log(buttonRef.current)
    }, [])

    return <FancyButton ref={buttonRef}>fancy button</FancyButton>
}