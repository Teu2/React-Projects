import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { addDoc, collection  } from 'firebase/firestore' // addDoc is needed to add documents to your firebase db
import { db, auth } from "../../Config/Firebase";
import { useAuthState } from "react-firebase-hooks/auth";

interface CreateFormData {
    title: string;
    description: string;
}

export const Form = () => {

    const [user] = useAuthState(auth);

    const schema = yup.object().shape({ // declare shape of shema
        title: yup.string().required("Please include a title."),
        description: yup.string().required("Please include any content")
    }); 

    const { register, handleSubmit, formState: {errors} } = useForm<CreateFormData>({
        resolver: yupResolver(schema),
    });

    const postCol = collection(db, "userPosts");

    const onSubmitPost = async (data: CreateFormData) => {
        await addDoc(postCol, {
            title: data.title,
            description: data.description,
            username: user?.displayName,
            userId: user?.uid,
        });
    }

    return(
        <form onSubmit={handleSubmit(onSubmitPost)}>
            <input type="text" placeholder="Title..." {...register("title")}/>
            <p style={{color: "red"}}>{errors.title?.message}</p>
            <textarea placeholder="Content..." {...register("description")}/>
            <p style={{color: "red"}}>{errors.description?.message}</p>
            <input type="submit" />
        </form>
    );
}