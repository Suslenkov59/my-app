let rerenderEntireTree = () => {
    console.log('State changed');
}

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Привет props', likesCount: 6, disLikesCount: 2},
            {id: 2, message: 'Создаём сами сайт :)', likesCount: 6, disLikesCount: 2},
            {id: 3, message: 'Ростислав', likesCount: 6, disLikesCount: 2},
            {id: 4, message: 'делать сайты мы не бросим', likesCount: 6, disLikesCount: 2},
            {id: 5, message: 'Продам гараж +7985', likesCount: 6, disLikesCount: 2},
        ],
        newPostText: 'ПУСТОТА'
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Andrew'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Sasha'},
            {id: 5, name: 'Viktor'},
            {id: 6, name: 'Valera'}
        ],
        messages: [
            {id: 1, message: 'Привет'},
            {id: 2, message: 'Как дела'},
            {id: 3, message: 'Ростислав'},
            {id: 4, message: 'Свободен в пятницу'},
            {id: 5, message: 'Привет'},
        ]
    },
    sidebar: {}
}

window.state = state;

export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer;  // observer
}

export default state;