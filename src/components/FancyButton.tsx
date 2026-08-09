import type { PropsWithChildren, Ref } from "react";

type FancyButtonProps = PropsWithChildren & {
    ref?: Ref<HTMLButtonElement>
}
const FancyButton = (props:FancyButtonProps) => {
    const {children, ref} = props
    return (
        <button ref={ref}>
            {children}
        </button>
    )
}

export default FancyButton
