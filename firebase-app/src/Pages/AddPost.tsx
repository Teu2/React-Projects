import { CreatePost } from "./CreatePost/CreatePost";
import { auth } from "../Config/Firebase";
import { useAuthState } from 'react-firebase-hooks/auth';

export const AddPost = () => {

    return(
        <div>
            <CreatePost />
        </div>
    );
}