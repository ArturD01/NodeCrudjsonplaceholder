const axios = require('axios');

class Test {
    constructor(){
        this.baseURL = 'https://jsonplaceholder.typicode.com';
    }
       
   async getUsers(){
    const res = await axios.get(`${this.baseURL}/users`);
    return res.data;
   } 

   async getPost(id){
    const res = await axios.get(`${this.baseURL}/posts/${id}`)
    return res.data;
   }

   async getUserPosts(id) {
    const res = await axios.get(`${this.baseURL}/users/${id}/posts`);
    return res.data;
   }

   async getUserTodos(id) {
    const res = await axios.get(`${this.baseURL}/users/${id}/todos`);
    return res.data;
   }

   async createPost(userId, title, body) {
    const res = await axios.post(`${this.baseURL}/posts`, {
        userId,
        title,
        body
    });
    return res.data;
   }

   async updatePost(postId, title, body) {
    const res = await axios.put(`${this.baseURL}/posts/${postId}`, {
        title,
        body
    });
    return res.data;
   }

   async deletePost(postId) {
    try {
        await axios.delete(`${this.baseURL}/posts/${postId}`);
        return 'Пост удален';
    }
    catch (error) {
        return 'Ошибка удаления';
    }
}
}

(async ()=>{
   const api = new Test();
   let userId = 1;

   const users = await api.getUsers()
  // console.log(users);

   const post = await api.getPost(userId)
  // console.log(post)

   const userPosts = await api.getUserPosts(userId);
  // console.log(userPosts);

  const userTodos = await api.getUserTodos(userId);
  // console.log(userTodos);

  const createPost = await api.createPost(userId, 'New Post', "art")
  //console.log(createPost)

  const postId = 1;
  const updatedPost = await api.updatePost(postId, 'Artur', 'Какой-то текст');
  //console.log(updatedPost);

  const postIdDelete = 1;
  const deletePost = await api.deletePost(postIdDelete);
  console.log(deletePost);

})();