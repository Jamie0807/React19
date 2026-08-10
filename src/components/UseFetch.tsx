import { useFetch } from '../hooks/useFetch'

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
