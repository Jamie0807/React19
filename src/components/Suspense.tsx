import { Suspense, useState } from 'react';
// 同步导入 import { FancyButton } from './FancyButton';
import React from 'react';

// 异步导入,在需要时才导入组件,避免初始加载时的性能问题
const FancyButton = React.lazy(() => import('./FancyButton'))

import { Use } from './Use';  

// 组件的异步加载,在需要时才导入组件,避免初始加载时的性能问题
export function SuspenseDemo() {
    const [isShow, setIsShow] = useState(false)
    return (
        <div>
            <button onClick={() => setIsShow(true)}>点击加载</button>
            { isShow && (
                <Suspense fallback={"loading..."}>
                    <FancyButton>fancy button</FancyButton>
                </Suspense>
            )}
            
            {/* 数据的异步加载,在需要时才加载数据,避免初始加载时的性能问题 */}
            <Suspense fallback={"loading..."}>
                <Use id="the-beatles"></Use>
            </Suspense>
        </div>
    )
}

