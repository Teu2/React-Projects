import { auth } from "../Config/Firebase";
import { useAuthState } from 'react-firebase-hooks/auth';

export const MainPage = () => {

    const [user, loading, error] = useAuthState(auth);
    if(loading) return(<div><h1>Loading Page...</h1></div>);

    return(
        <div>Main Page</div>
    );
}