import { PostProps } from "../page";

export default async function DetailPosts({
    params
}: {
    params: Promise<{id: string}>
}) {

    const {id} = await params;
    const response = await fetch(`https://dummyjson.com/posts/${id}`)
    const data: PostProps = await response.json()

    return (
        <div>
            <h1>Post detalher {id} </h1>
            <p> para fazer esse post precisei criar uma pasta de nome id</p>
            <h2>{data.title}</h2>
            <p>{data.body}</p>
        </div>
    );
}