
const axios = require('axios');

export async function getAllBlogs() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return response.data;
}

export async function getBlogDetails(blogId) {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts/'+ blogId);
    return response.data;
}