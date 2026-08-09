import { fetchData } from './data.ts'
import { use } from "react";
import type { Album } from './data.ts';

type UseProps = {
    id: string
}

/**
 * react19新增 use hook 会缓存异步操作的结果，只有依赖项发生变化时才会重新执行异步操作
 */
export const Use = (props: UseProps) => {
    const { id } = props;
    const albums = use(fetchData(`/${id}/albums`,1000)) as Album[];
    return (
        <ul>
            {albums.map((album) => (
                <li key={album.id}>{album.title}</li>
            ))}
        </ul>
    )
}



// function use(promise: {
//     status: "fulfilled" | "pending" | "rejected";
//     value: string;
//     reason: string;
//     then: any;
// }) {
//     console.log("🚀 ~ use ~ promise:", promise.status);
//     if (promise.status === "fulfilled") {
//         return promise.value;
//     } else if (promise.status === "rejected") {
//         throw promise.reason;
//     } else if (promise.status === "pending") {
//         throw promise; 
//     } else {
//         promise.status = "pending";
//         promise.then(
//             (result) => {
//                 promise.status = "fulfilled";
//                 promise.value = result;
//             },
//             (reason) => {
//                 promise.status = "rejected";
//                 promise.reason = reason;
//             },
//         );
//         throw promise;
//     }
// }
