import { auth, provider } from "../Config/Firebase";
import { useAuthState } from 'react-firebase-hooks/auth';
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const Login = () => {

    const navigate = useNavigate();

    const signInWithGoogle = async () =>{
        const result = await signInWithPopup(auth, provider); // returns a promise
        console.log(result);
        navigate("/");
    };

    return(
        <div>
            <p>Sign in with Google</p>
            <button onClick={signInWithGoogle}>Sign In</button>
        </div>
    );
}