import { useState, memo } from 'react';

/**
 * memo 是一个高阶组件，用于优化组件的渲染性能，当组件的依赖项发生变化时，才会重新渲染组件
 */
type HeaderProps = {
    id: number,
    label: number,
}

export const Header  = memo((props: HeaderProps) => {
    const { id, label } = props;
    return (
        <div>
            <h1>{id} ---- {label}</h1>
        </div>
    )
}, (prevProps, currentProps) => {
    return prevProps.id === currentProps.id
})

export const HeaderDemo = () => {
    const [id, setId] = useState(0)
    const [label,setLabel] = useState(0)
    const [count, setCount] = useState(0)
    
    const handleChange = () =>{
        setId(id+1)
        setLabel(label+2)
    }
    return (
        <div>
            <Header id={id} label={label} />
            <button onClick={handleChange}>更新</button>
            <button onClick={() => setCount(count+1)}>增加</button>
        </div>
    )
}

