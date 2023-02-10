import { React, useContext} from "react"
import { AppContext } from "../../App"
import 'react-toastify/dist/ReactToastify.css';
import './Keyboard.css'
import { IoBackspaceOutline } from "react-icons/io5";

export const Key = ({ keyVal, command }) => {
    
    const { selectLetter, deleteLetter, enterWord } = useContext(AppContext);
    
    const getLetter = () => {
        console.log(keyVal);
        if (keyVal === "ENTER"){    
            enterWord(keyVal);
        }else if (keyVal.type === IoBackspaceOutline ){
            deleteLetter(keyVal);
        }else{
            selectLetter(keyVal);
        }
    }

    return(
        <div className="key" id={command && "cmd"} onClick={getLetter}>
            {keyVal}
            
        </div>
    );
}