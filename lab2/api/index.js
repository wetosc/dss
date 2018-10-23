/**
 * Implement the fetch functions to call the Typicode API
 *
 * More info on the api here - https://jsonplaceholder.typicode.com/
 */

const baseURL = "https://jsonplaceholder.typicode.com"

function getAllPosts () {
  return extractJSON(fetch(`${baseURL}/posts`))
}

function getPost (postId) {
  return extractJSON(fetch(`${baseURL}/posts/${postId}`))
}

function newPost (postName, postText) {
  return extractJSON(fetch(`${baseURL}/posts`, {
    method: 'POST',
    body: JSON.stringify({
      title: postName,
      body: postText,
      userId: 1
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  }))
}

function editPost (postId, postName, postText) {
  return extractJSON(fetch(`${baseURL}/posts/${postId}`, {
    method: 'PUT',
    body: JSON.stringify({
      id: 1,
      title: postName,
      body: postText,
      userId: 1
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  }))
}

function deletePost (postId) {
  return extractJSON(fetch(`${baseURL}/posts/${postId}`, {method: 'DELETE'}))
}

function extractJSON(promise) {
  return new Promise((resolve,reject)=>{
    promise
    .then((response)=>{
      resolve(response.json())
    })
    .catch((error)=>{
      reject(error)
    })
  })
}