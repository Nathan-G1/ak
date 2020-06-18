const initialState = {

    comments: [
        {
            id: 1,
            userName: 'Abebe',
            avatar: '/images/avatars/avatar_11.png',
            comment: 'I like it . this is so helpful. Thanks ',
            likes: 12,
            dislikes: 1,
            replies: [
                {
                    id: 2,
                    userName: 'Abebe',
                    avatar: '/images/avatars/avatar_11.png',
                    comment: 'I like it . this is so helpful. Thanks ',
                    likes: 12,
                    dislikes: 1,
                    replies: [

                    ]
                },
            ]
        },
        {
            id: 3,
            userName: 'Abebe',
            avatar: '/images/avatars/avatar_1.png',
            comment: 'I like it . this is so helpful. Thanks ',
            likes: 12,
            dislikes: 1,
            replies: [
                {
                    id: 4,
                    userName: 'Abebe',
                    avatar: '/images/avatars/avatar_2.png',
                    comment: 'I like it . this is so helpful. Thanks ',
                    likes: 12,
                    dislikes: 1,
                    replies: [

                    ]
                },
            ]
        },
        {
            id: 5,
            userName: 'Abebe',
            avatar: '/images/avatars/avatar_3.png',
            comment: 'I like it . this is so helpful. Thanks ',
            likes: 12,
            dislikes: 1,
            replies: [
                {
                    id: 6,
                    userName: 'Abebe',
                    avatar: '/images/avatars/avatar_4.png',
                    comment: 'I like it . this is so helpful. Thanks ',
                    likes: 12,
                    dislikes: 1,
                    replies: [

                    ]
                },
            ]
        },
        {
            id: 7,
            userName: 'Abebe',
            avatar: '/images/avatars/avatar_5.png',
            comment: 'I like it . this is so helpful. Thanks ',
            likes: 12,
            dislikes: 1,
            replies: [
                {
                    id: 8,
                    userName: 'Abebe',
                    avatar: '/images/avatars/avatar_6.png',
                    comment: 'I like it . this is so helpful. Thanks ',
                    likes: 12,
                    dislikes: 1,
                    replies: [

                    ]
                },
                {
                    id: 9,
                    userName: 'Abebe',
                    avatar: '/images/avatars/avatar_7.png',
                    comment: 'I like it . this is so helpful. Thanks ',
                    likes: 12,
                    dislikes: 1,
                    replies: [

                    ]
                },
            ]
        }
    ],

    currentUser: {
        name: 'Girma',
        avatar: '/images/avatars/avatar_7.png'
    }

};

export default function (state = initialState, action) {
    switch (action.type) {
        case 'GET_COMMENTS':
            return {
                ...state,
                comments: [...state.comments]
                // value: action.payload
            };
        default:
            return state;
    }
}