import { db, auth } from "../../Config/Firebase";
import { useAuthState } from 'react-firebase-hooks/auth';
import { getDocs, collection, Timestamp } from "firebase/firestore"; // get multiple documents from collection in firebase
import { useEffect, useState } from "react";
import { Post } from "./Posts";
import './Posts.css'

export interface Post{
    id: string,
    datetime: string,
    description: string,
    title: string,
    userid: string,
    username: string
};

export const MainPage = () => {

    const [postCollection, setPostCollection] = useState<Post[] | null>(null);
    const postCol = collection(db, "userPosts");

    const getPosts = async () => { // firestore requires await
        const data = await getDocs(postCol);
        setPostCollection(data.docs.map((doc) => ({...doc.data(), id: doc.id})) as Post[]);
        console.log(data.docs.map((doc) => ({...doc.data(), id: doc.id})) as Post[]);
    }

    useEffect(() => {
        getPosts();
    }, []);
    
    return(
        <div>
            <h2>POSTS</h2>
            <div className="user-posts">
                {postCollection?.map((post) => (<Post postypost={post}/>))}
            </div>
        </div>
    );
}