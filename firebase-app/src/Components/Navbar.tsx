import { Link } from "react-router-dom";
import { auth } from "../Config/Firebase";
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import { HiLogout } from "react-icons/hi";
import { BiLogOut, BiEdit } from "react-icons/bi";
import './Navbar.css'

export const Navbar = () => {

    const [user, loading, error] = useAuthState(auth);

    const signOutUser = async () => {
        await signOut(auth);
    }

    if(user) console.log ("user exists: " + user);
    
    return(
        <nav>
            <h1>APP LOGO HEHE.</h1>
            <div className="df1">
                <div className="routes">
                    <Link className="route-link" to={"/"}> Home </Link>
                    {user == null ? (<Link className="route-link" to={"/login"}> Login </Link>) 
                        : (<Link className="route-link" to={"/addpost"}> Add Post </Link>)}
                </div>

                <div className="user-info">
                    {user && (
                        <> 
                            <img src={user?.photoURL || ""} width="50" height="50" />
                            <p><strong>{user?.displayName}</strong></p>
                            <button onClick={signOutUser} className="logout-button"><BiLogOut className="app-logo"/></button>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
}