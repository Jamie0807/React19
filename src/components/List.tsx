import { useState } from 'react';

/**
 * 列表渲染
 * @returns 渲染后的组件
 */
export type ListDemoProps = {
    id: string;
    label: string;
}

export const ListDemo = () => {
    const [list,setList] = useState<ListDemoProps[]>([])
    
    return (
        <div>
            {list.map((item) => (
                <div key={item.id}>
                    <h1>ID: {item.id}</h1>
                    <h2>Label: {item.label}</h2>
                </div>
            ))}
            <button onClick={() => setList([...list,{id:list.length.toString(),label:`Item ${list.length}`}])}>Add</button>
        </div> 
    );
};