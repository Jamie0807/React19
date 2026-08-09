import { useState, useEffect } from 'react';

/**
 * 自定义 useFetch hook 用于处理异步操作的hook
 */

type UseFetchParams = {
    url: string,
}

type Todo = {
    userId: number,
    id: number,
    title: string,
    completed: boolean,
}

const useFetch = (params: UseFetchParams) => {
    const [data, setData] = useState<Todo | null>(null)

    useEffect(() => {
        fetch(params.url)
        .then((res) => {
            return res.json()
        })
        .then((res) => {
            setData(res)
        })

    }, [params.url]) 
    return {
        loading: data === null,
        data,
    }
}

export const UseFetchDemo = () => {
    const {data,loading} = useFetch({
        url: 'https://jsonplaceholder.typicode.com/todos/1',
    })

    if (loading) {
        return "loading..."
    }

    return (
        <div>
            use fetch demo
            {data && (
                <div>
                    <p>{data.title}</p>
                    <p>{data.completed ? '已完成' : '未完成'}</p>
                </div>
            )}
        </div>
    )
}
