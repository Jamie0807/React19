import { useId } from 'react'

const Field = (
    props: { 
        label: string; 
        type: string 
    }) => {
    // useId 生成稳定且唯一的 id，常用于关联 label 和 input
    const id = useId()

    return (
        <div>
            <label htmlFor={id}>{props.label}</label>
            <input id={id} type={props.type} />
        </div>
    )
}

export const UseIdDemo = () => {
    return (
        <div>
            <h2>useId</h2>
            <Field label="用户名" type="text" />
            <Field label="邮箱" type="email" />
            <p>useId 用于生成稳定且唯一的 id，常用于关联 label 和 input。</p>
            <p>注意：useId 不适合用作列表渲染的 key。</p>
        </div>
    )
}
