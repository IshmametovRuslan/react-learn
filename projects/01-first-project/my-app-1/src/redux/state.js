import {renderEntireTree} from "../render";

let state = {

    profilePage: {
        postData: [
            {postId: 1, postText: "Hello1 it's firdt post!", likeCount: 11},
            {postId: 2, postText: "Heheyhey", likeCount: 2},
            {postId: 3, postText: "What is it?", likeCount: 3},
            {postId: 4, postText: "React it's cool", likeCount: 7}
        ]
    },

    dialogsPage: {
        dialogsData: [
            {id: 1, name: "Russ"},
            {id: 2, name: "Tanya"},
            {id: 3, name: "Dima"},
            {id: 4, name: "Stas"},
            {id: 5, name: "Vit"}
        ],
        messageData: [
            {id: 1, message: "Hello dirty world!"},
            {id: 2, message: "О дивный новый мир!"},
            {id: 3, message: "Не нужно больше ждать"},
            {id: 4, message: "В наших руках наша правда и вера"},
            {id: 5, message: "1984"}
        ]
    },
    sidebar: {
        friendsData: [
            {userId: 1, name: "Russ", avatar: "https://pbs.twimg.com/profile_images/590259422070439936/48sr962e.jpg"},
            {
                userId: 2,
                name: "Tanya",
                avatar: "https://pm1.narvii.com/6980/5823f05c11e8d8a80f253c5886789341651cea20r1-1080-1920v2_128.jpg"
            },
            {userId: 3, name: "Dima", avatar: "https://pbs.twimg.com/profile_images/590259422070439936/48sr962e.jpg"},
            {
                userId: 4,
                name: "Stas",
                avatar: "https://pbs.twimg.com/profile_images/734491524407300096/Zpd5rPls_400x400.jpg"
            },
            {
                userId: 5,
                name: "Vit",
                avatar: "https://gp1.wac.edgecastcdn.net/802892/http_public_production/artists/images/2161003/original/crop:x0y0w256h256/hash:1467261920/1376685235_0ac8eb10fbd2f1cb0e4661eed23b83f8.jpg?1467261920"
            }
        ],
        navData: [
            {itemId: 1, link: "/profile", itemName: "Profile"},
            {itemId: 2, link: "/dialogs", itemName: "Dialogs"},
            {itemId: 3, link: "/news", itemName: "News"},
            {itemId: 4, link: "/about", itemName: "About"},
        ]
    }
};

export let addPost = (postMessage) => {
    debugger
    let newPost = { postId: 5, postText: postMessage, likeCount: 0};
    state.profilePage.postData.push(newPost);
    renderEntireTree(state);
};

export default state;