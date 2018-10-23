/**
 * Implement the functions to make the UI interactive.
 *
 * The functions from the previous task are already loaded
 *
 * More info on the api here - https://jsonplaceholder.typicode.com/
 */

/**
 * Handler for Get button
 */

function uiGetPosts () {
  getAllPosts().then((data)=>{
    console.log(data)
    const display = document.querySelector('div.response')
    display.innerHTML = JSON.stringify(data, null, 2)
  })
}

/**
 * Handler for add button
 */
function uiAddPost () {
  const postTitle = prompt('What is the post title ?');
  const postText = prompt('What is the post text ?');

  // TODO:
  newPost(postTitle, postText).then((data)=> {
    console.log(data)
    const display = document.querySelector('div.response')
    display.innerHTML = JSON.stringify(data, null, 2)
  })
}

/**
 * Handler for edit button
 */
function uiEditPost () {
  const postId = prompt('What is the id of the post you want to edit ?');
  const title = prompt('What is the new title ?');
  const postText = prompt('What is the new title ?');
  editPost(postId, title, postText).then((data)=> {
    console.log(data)
    const display = document.querySelector('div.response')
    display.innerHTML = JSON.stringify(data, null, 2)
  })
}

/**
 * Handler for delete button
 */
function uiDeletePost () {
  const postId = prompt('What is the id of the post you want to delete ?');
  deletePost(postId).then((data)=> {
    console.log(data)
    const display = document.querySelector('div.response')
    display.innerHTML = JSON.stringify(data, null, 2)
  })
}

/**
 * Assigns events to buttons
 */
function assignEvents () {
  const getButton = document.querySelector('button.get')
  const addButton = document.querySelector('button.add')
  const editButton = document.querySelector('button.edit')
  const deleteButton = document.querySelector('button.delete')

  getButton.addEventListener('click', uiGetPosts)
  addButton.addEventListener('click', uiAddPost)
  editButton.addEventListener('click', uiEditPost)
  deleteButton.addEventListener('click', uiDeletePost)
}

document.addEventListener('DOMContentLoaded', assignEvents)
