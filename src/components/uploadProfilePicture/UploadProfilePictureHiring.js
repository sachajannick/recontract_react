import React, {useState} from "react";
import styles from "./UploadProfilePicture.module.scss"
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { Button } from "../button/Button";
import axios from "axios";

function UploadProfilePictureHiring() {
    const { handleSubmit, formState: { errors }, register, watch } = useForm();
    const [ uploadSuccess, toggleUploadSuccess ] = useState(false);
    const history = useHistory();
    const userId = localStorage.getItem('id');
    const jwtToken = localStorage.getItem('token');

    async function onSubmit(data) {
        try {
            const formData = new FormData();
            formData.append('file', data.profilePicture[0]);

            const result = await axios.patch(`http://localhost:8080/api/users/profile-picture/id/${userId}`,
                formData
                , {
                    headers: {
                        Authorization: `Bearer ${jwtToken}`,
                    }},
                )
            console.log(result);
            console.log(result);
            toggleUploadSuccess(true);
            history.push('/upload-picture-freelancer-success');
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <div className={styles["upload-profile-picture"]}>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className={styles["upload-profile-picture__form"]}>
                <input
                    ref={register}
                    className={styles["upload-profile-picture__input"]}
                    type="file"
                    accept="image/*"
                    multiple={false}
                    {...register("profilePicture", {
                        required: {
                            value: true,
                            message: "Please upload your profile picture",
                        },
                    })}
                />
                {errors.profilePicture && <p>{errors.profilePicture.message}</p>}

                <Button
                    type="submit"
                    btnText={"Continue"}
                />
                {uploadSuccess && <p>Upload successful!</p>}
            </form>
        </div>
    )
}

export default UploadProfilePictureHiring;
