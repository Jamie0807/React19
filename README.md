# React 19 学习项目

这是一个使用官方推荐方式初始化的 React 19 学习项目，技术栈为 React 19、TypeScript 和 Vite。项目主要用于练习 React 的基础组件写法、Hooks、React 19 新增的 `use` hook、ref、Suspense、memo、数据请求等常见能力。

## 技术栈

- React 19
- TypeScript
- Vite
- ESLint

## 本地运行

安装依赖：

```bash
npm install
```

启动开发服务：

```bash
npm run dev
```

构建项目：

```bash
npm run build
```

代码检查：

```bash
npm run lint
```

## 目录说明

```txt
src/
  App.tsx              # 入口演示组件，集中引入各个 demo
  components/          # React 19 学习示例
  main.tsx             # React 应用挂载入口
```

## 已包含的学习内容

- `Props.tsx`：props 和 children
- `State.tsx`：组件状态
- `Condition.tsx`：条件渲染
- `List.tsx`：列表渲染
- `UseRef.tsx`：useRef、DOM 引用、缓存值
- `ForwardRef.tsx`：forwardRef
- `Memo.tsx`：memo
- `Suspense.tsx`：Suspense 和 lazy
- `Use.tsx`：React 19 新 hook `use`
- `UseState.tsx`：useState
- `UseReducer.tsx`：useReducer
- `UseContext.tsx`：useContext
- `UseEffect.tsx`：useEffect
- `UseLayoutEffect.tsx`：useLayoutEffect，并同步对比 useEffect 的执行时机
- `UseImperativeHandle.tsx`：useImperativeHandle，对比 useRef 直接暴露 DOM 和自定义暴露方法
- `UseMemo.tsx`：useMemo 和 useCallback
- `UseFetch.tsx`：自定义 hook 请求数据

## 学习时容易遇到的问题

### 组件名要大写

React 组件必须用大写开头，例如：

```tsx
<UseMemoDemo />
```

如果写成小写：

```tsx
<useMemoDemo />
```

React 会把它当成普通 HTML 标签，TypeScript 也会报错。

### 类型要用 import type

开启 `verbatimModuleSyntax` 后，只用于类型的导入要写成：

```tsx
import type { PropsWithChildren } from 'react'
```

### 接口返回对象不能直接 map

例如：

```tsx
https://jsonplaceholder.typicode.com/todos/1
```

这个接口返回的是单个对象，不是数组，所以不能直接：

```tsx
data.map(...)
```

如果要使用 `map`，接口返回值需要是数组。

## 项目目标

这个项目不是完整业务应用，而是 React 19 的学习和实验集合。每个组件都尽量保持简单，方便单独理解一个 React 概念。
