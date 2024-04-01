const newFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#post-title').value.trim();
    const description = document.querySelector('#post-content').value.trim();

    if (title && description) {
        const response = await fetch(`/api/posts`, {
            method: 'POST',
            body: JSON.stringify({ title, description }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert('Failed to create post');
        }
    }
};


const delButtonHandler = async (event) => {
    // Checks if the clicked button is an "Delete" button
    if (event.target.matches('.delete')) {
        const id = event.target.getAttribute('data-id');

        const response = await fetch(`/api/posts/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert('Failed to delete post');
        }
    }
};

// const delButtonHandler = async (event) => {
//     if (event.target.hasAttribute('data-id')) {
//         const id = event.target.getAttribute('data-id');

//         const response = await fetch(`/api/posts/${id}`, {
//             method: 'DELETE',
//         });

//         if (response.ok) {
//             document.location.replace('/profile');
//         } else {
//             alert('Failed to delete post');
//         }
//     }
// };


const showEditModal = async (postId) => {
    // Fetch the post's current data from the server
    const response = await fetch(`/api/posts/${postId}`);
    const post = await response.json();

    // Populate the form in the modal with the post's current data
    document.getElementById('edit-post-title').value = post.title;
    document.getElementById('edit-post-content').value = post.description;
    document.getElementById('edit-post-id').value = postId;

    // Show the modal
    $('#editModal').modal('show');
};

const editFormHandler = async (event) => {
    event.preventDefault();

    const postId = document.getElementById('edit-post-id').value;
    const title = document.getElementById('edit-post-title').value.trim();
    const description = document.getElementById('edit-post-content').value.trim();

    if (title && description) {
        const response = await fetch(`/api/posts/${postId}`, {
            method: 'PUT', 
            body: JSON.stringify({ title, description }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace('/profile'); 
        } else {
            alert('Failed to update post');
        }
    }
};

document.querySelector('.post-list').addEventListener('click', (event) => {
    if (event.target.matches('.edit')) {
        const postId = event.target.getAttribute('data-id');
        showEditModal(postId);
    }
});

document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);

document.querySelector('.post-list').addEventListener('click', delButtonHandler);

document.getElementById('edit-post-form').addEventListener('submit', editFormHandler);
