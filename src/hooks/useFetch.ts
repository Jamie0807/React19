import { useEffect, useState } from 'react'

type UseFetchParams = {
    url: string,
}

export type Todo = {
    userId: number,
    id: number,
    title: string,
    completed: boolean,
}

/**
 * 自定义 useFetch hook 用于处理异步操作的hook
 */
export const useFetch = (params: UseFetchParams) => {
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
