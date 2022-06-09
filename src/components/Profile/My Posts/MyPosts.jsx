import React from "react";
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postsElements =
        props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} disLikesCount={p.disLikesCount}/>)

    let newPostElement = React.createRef();

    let addPost =() => {
        let text = newPostElement.current.value;
        props.addPost(text);
        newPostElement.current.value = '';
    }

    return <div className={s.postsBlock}>
        <h2> Мои посты </h2>
        <div>
            <div>
                <textarea ref={newPostElement}>Что у вас нового?</textarea>
            </div>
            <div>
                <button onClick= {addPost}>Добавить запись</button>
            </div>

        </div>
        <div className={s.posts}>
            {postsElements}
        </div>
    </div>
}
export default MyPosts