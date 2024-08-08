export const baseUrl = 'https://jsonplaceholder.typicode.com';

export const urls = {
    posts: {
        base: '/posts',
        byID: (id:number) => {
            return urls.posts.base + '/' + id
        },
        byUserID: (id:number)=>{
            return urls.posts.base + '?userId=' + id
        }
    },
    users: {
        base: '/users',
        byID: (id:number) => {
            return urls.users.base + '/' + id
        }

    },
    comments:{
        base: '/posts',
        byUserID: (id:number) => {
            return urls.comments.base + '/' + id + '/comments'
        }
    }
}