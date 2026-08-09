import { forwardRef, useImperativeHandle, useRef, useState } from 'react'

type CustomInputRef = {
    focusAndSelect: () => void
    clear: () => void
    setText: (value: string) => void
}

// 子组件 DirectInput
const DirectInput = forwardRef<HTMLInputElement>((_props, ref) => {
    return <input ref={ref} defaultValue="父组件可以直接拿到 DOM" />
})

// 子组件 CustomInput
const CustomInput = forwardRef<CustomInputRef>((_props, ref) => {
    const inputRef = useRef<HTMLInputElement>(null)
    const [value, setValue] = useState('父组件只能调用子组件暴露的方法')

    useImperativeHandle(ref, () => {
        return {
            focusAndSelect: () => {
                inputRef.current?.focus()
                inputRef.current?.select()
            },
            clear: () => {
                setValue('')
            },
            setText: (nextValue: string) => {
                setValue(nextValue)
            },
        }
    }, [])

    return (
        <input
            ref={inputRef}
            value={value}
            onChange={(event) => setValue(event.target.value)}
        />
    )
})

// 父组件 UseImperativeHandleDemo

export const UseImperativeHandleDemo = () => {

    const directInputRef = useRef<HTMLInputElement>(null)
    const customInputRef = useRef<CustomInputRef>(null)

    return (
        <div>
            <section>
                <h3>useRef：父组件直接操作 DOM</h3>
                <DirectInput ref={directInputRef} />
                <button onClick={() => directInputRef.current?.focus()}>focus</button>
                <button onClick={() => {
                    if (directInputRef.current) {
                        directInputRef.current.value = ''
                    }
                }}>clear</button>
                <p>父组件拿到的是 input DOM，所以可以直接访问 value、focus 等 DOM 能力。</p>
            </section>

            <section>
                <h3>useImperativeHandle：子组件自定义暴露方法</h3>
                <CustomInput ref={customInputRef} />
                <button onClick={() => customInputRef.current?.focusAndSelect()}>focus and select</button>
                <button onClick={() => customInputRef.current?.clear()}>clear</button>
                <button onClick={() => customInputRef.current?.setText('来自父组件的新内容')}>set text</button>
                <p>父组件拿到的是子组件暴露的对象，只能调用 focusAndSelect、clear、setText。</p>
            </section>
        </div>
    )
}
