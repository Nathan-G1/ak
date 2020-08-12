const initialState = {

    comments: [
        {
            text: "Awesome Lecture",
            userName: "Ermias",
            avatar: "/images/avatars/avatar_3.png",
            likes: 12,
            dislikes: 1,
            replies: [
              "string"
            ],
            id: "5f325263c1e3d500174c2e2d",
            commentId: "",
            videoId: "5f3178044262d10017f033ba",
            courseId: "5f3176854262d10017f033b9"
        },
    ],

    selectedCommentReplies: [
        {
            text: "great",
            userName: "Nathan",
            avatar: "/images/avatars/avatar_3.png",
            like: 12,
            dislike: 1,
            replies: [
              "string"
            ],
            id: "5f325b13e4f2b700179f5ded",
            commentId: "5f325263c1e3d500174c2e2d",
            videoId: "string",
            courseId: "string"
          }
    ],

    isCommentAdded: false,

};

export default function (state = initialState, action) {
    switch (action.type) {
        case 'GET_COMMENTS':
            return {
                ...state,
                comments: [...state.comments]
                // value: action.payload
            };

        case 'ADD_COMMENT':
            // console.log(action.commentContent)
            return {
                ...state,
                comments: state.comments.concat(action.payload),
                isCommentAdded: true
            }

        case 'UPDATE_STATE':
            return {
                ...state,
                isCommentAdded: !state.isCommentAdded
            }

        // case 'ADD_REPLY':
        //     // Fix this part
        //     var comments = state.comments.map((c) => {
        //         if (c.id == action.commentId) {
        //             c.replies = c.replies.concat(action.payload)
        //             return c ;
        //         } else {
        //             return c;
        //         }
        //     });
        //     return {
        //         ...state,
        //         // comments: state.comments.filter(c => c.id === action.commentId)[0].replies.concat(action.payload)
        //         comments: comments
        //     }

        case 'ADD_REPLY':
            return{
                ...state,
                selectedCommentReplies: action.payload
            }
        default:
            return state;
    }
}