import React from 'react'
import type { PropsWithChildren } from 'react';

/**
 * 定义props类型,包含id,children,onClick 
 * PropsWithChildren是react的类型,用于传递子组件的内容
 * children是可选的,用于传递子组件的内容
 * onClick是必填的,用于传递点击事件的回调函数
 */
export type PropsDemoProps = PropsWithChildren & {
  id: string;
  children?: React.ReactNode;
  onClick: (id: string) => void;
}

/**
 * 传递props到子组件PropsDemo
 * @param props - 包含id,children,onClick的props对象
 * @returns 渲染后的组件
 */

export const PropsDemo = (props: PropsDemoProps) => {
    return (
    <div>
      <h1>{props.id}</h1>
      <h2>{props.children}</h2>
      <button onClick={() => props.onClick("4")}>点击我</button>
    </div>
  );
};