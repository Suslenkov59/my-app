import React from "react";
import s from './Profile.module.css';
import MyPosts from "./My Posts/MyPosts";
import ProfileInfo from "./Profileinfo/Profileinfo";

const Profile = (props) => {
    return (
        <header className={s.profileHeader}>
            <div>
                <ProfileInfo/>
                <MyPosts posts={props.posts} addPost={props.addPost}/>
            </div>
        </header>
    )
}
export default Profile