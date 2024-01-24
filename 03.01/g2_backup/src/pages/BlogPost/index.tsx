import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {Post} from "../../types";

function BlogPost() {
    const {id}  = useParams<{id? : string}>() || {}

    const [posts,setPost] = useState<Post | null> (null)
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)

    useEffect(() => {
        setLoading(true)
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => response.json() as Promise<Post>)
            .then(json => {setPost(json)})
            .catch(() => {setError(true)})
            .finally(() => {setLoading(false)})
    },[])

    return (<div></div>)
}

export default BlogPost