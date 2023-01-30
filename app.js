import axios from "axios";

const getPosts = (user_id) => {
    return new Promise(async (resolve, reject) => {
        const {data: post} =  await axios ("https://jsonplaceholder.typicode.com/posts");
        const posts = post.filter(({userId}) => userId === user_id)
        resolve(posts);
    })
}

const getUsers = (user_id) => {
    return new Promise(async (resolve,reject) => {
        const {data:user} = await axios ("https://jsonplaceholder.typicode.com/users/" + user_id);
        resolve(user)
    })
}

export const getData = async (user_id) =>{
    try{
        const users = await getUsers(user_id)
        const posts = await getPosts(user_id)

        
        return [users, posts];
    }
    catch(e){
        console.log(e);
    }
}