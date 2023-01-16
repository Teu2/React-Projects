import { Post as FirebasePost } from "./MainPage";
import { addDoc, query, where, getDocs, getDoc, doc, deleteDoc } from "firebase/firestore";
import { collection } from "firebase/firestore";
import { auth, db } from "../../Config/Firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect, useId, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Posts.css'

interface Posts{
    postypost: FirebasePost; // to avoid errors that relates to similar components
}

interface Like{
    likeId: string;
    userId: string;
}

export const Post = (props: Posts) => {
    
    const {postypost} = props;
    const [user] = useAuthState(auth);
    const [likes, setLikesNum] = useState<Like[]>();
    const notify = () => toast.error("Unable to Like post 😔");

    const likesCollection = collection(db, "likes");
    const likesDoc = query(likesCollection, where("postIdLiked", "==", postypost.id));

    const getLikes = async () => {
        const data = await getDocs(likesDoc)
        console.log(data.docs.map((docItem) => ({...docItem.data(), id: docItem.id})));
        setLikesNum(data.docs.map((docItem) => ({userId: docItem.data().userIdWhoLiked, likeId: docItem.id}))); // firebase field name
    }
    
    const onLikePost = async () => {
        try {
            const newDoc = await addDoc(likesCollection, {userIdWhoLiked: user?.uid, postIdLiked: postypost.id});
            if(user){ // optimistic rendering - turning thumgs up to thumbs down on button click
                setLikesNum((prev) => prev ? [...prev, {userId: user.uid, likeId: newDoc.id}] : [{userId: user.uid, likeId: newDoc.id}]);
            }
        } catch (error) {
            notify();
        }
    };

    const onUnlikePost = async () => {
        try {

            const toDeleteRef = query(likesCollection, 
                where("postIdLiked", "==", postypost.id), 
                where("userIdWhoLiked", "==", user?.uid)
            );
            
            const toDeleteDoc = await getDocs(toDeleteRef)
            const deleteDocPost = doc(db, "likes", toDeleteDoc.docs[0].id) // reference the doc we want to delete
            await deleteDoc(deleteDocPost);
            if(user){ // optimistic rendering - turning thumgs up to thumbs down on button click
                setLikesNum((prev) => prev?.filter((like) => like.likeId !==  toDeleteDoc.docs[0].id));
            }
        } catch (error) {
            notify();
        }
    };

    const userLiked = likes?.find((like) => like.userId === user?.uid);

    useEffect(() => {
        getLikes();
    }, []);

    return(
        <div className="posts">
            <div className="post-title">
                <h4>{postypost.title}</h4> <p>@{postypost.username}</p>
            </div>
            <div className="post-description">
                <p>{postypost.description}</p>
            </div>

            <div className="footer-info">
                <button onClick={userLiked ? onUnlikePost : onLikePost}> {userLiked ? <>👎</> : <>👍</>} </button>
                <p>Likes +{likes?.length}</p>
            </div>
        </div>
    );
}