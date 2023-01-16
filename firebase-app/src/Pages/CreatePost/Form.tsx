import { useForm } from "react-hook-form";
import { useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { addDoc, collection  } from 'firebase/firestore' // addDoc is needed to add documents to your firebase db
import { db, auth } from "../../Config/Firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Form.css';

interface CreateFormData {
    title: string;
    description: string;
}

export const Form = () => {

    const [user] = useAuthState(auth);
    const [date, setDate] = useState(new Date());

    const notify = () => toast.success("Posted! 👍");

    const schema = yup.object().shape({ // declare shape of shema
        title: yup.string().required("Please include a title."),
        description: yup.string().required("Please include any content")
    }); 

    const { register, handleSubmit, formState: {errors} } = useForm<CreateFormData>({
        resolver: yupResolver(schema),
    });

    const postCol = collection(db, "userPosts");

    const onSubmitPost = async (data: CreateFormData) => {
        setDate(new Date());
        await addDoc(postCol, {
            title: data.title,
            description: data.description,
            username: user?.displayName,
            userId: user?.uid,
            datetime: date
        });
        
        notify();
    }

    return(
        <div className="add-post-form">
            <p>WHAT WOULD YOU LIKE TO SHARE</p>
            <form onSubmit={handleSubmit(onSubmitPost)}>
                <input type="text" placeholder="Title..." {...register("title")} className="form-title"/>
                <p style={{color: "red"}} className="error-message">{errors.title?.message}</p>
                <textarea placeholder="Content..." {...register("description")} className="form-title form-text-area" />
                <p style={{color: "red"}} className="error-message">{errors.description?.message}</p>
                <input type="submit" className="submit-form" value="POST"/>
            </form>
            <ToastContainer position="bottom-center" limit={1} draggable/>
        </div>
    );
}