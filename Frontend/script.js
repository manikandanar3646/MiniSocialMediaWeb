const API_URL = "https://localhost:7018/api";

async function register() {

    const username =
        document.getElementById("username").value;

    const email =
        document.getElementById("email").value;

    const password =
        document.getElementById("password").value;

    const response = await fetch(
        `${API_URL}/Auth/register`,
        {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                username,
                email,
                password
            })
        }
    );

    const data = await response.json();

    alert(data.message);

    if (response.ok) {
        window.location.href = "login.html";
    }
}


async function login() {

    const email =
        document.getElementById("email").value;

    const password =
        document.getElementById("password").value;

    const response = await fetch(
        `${API_URL}/Auth/login`,
        {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                email,
                password
            })
        }
    );

    const data = await response.json();

    if (response.ok) {

        localStorage.setItem(
            "token",
            data.token
        );

        window.location.href = "index.html";

    } else {

        alert(data.message);
    }
    
}

//load post
async function loadPosts() {

    const response = await fetch(
        `${API_URL}/Posts`
    );

    const posts = await response.json();

    const postsContainer =
        document.getElementById("posts");

    postsContainer.innerHTML = "";

    posts.forEach(post => {

        postsContainer.innerHTML += `

        

            <div class="post">

                <h3>${post.username}</h3>

                <p id="content-${post.postId}">
                    ${post.content}
                </p>

                <small>
                    ${new Date(
                        post.createdAt
                    ).toLocaleString()}
                </small>

                <div class="post-actions">

                    <button onclick="likePost(${post.postId})">
                        ❤️ Like / Unlike
                    </button>

                    <button onclick="showEditBox(
                        ${post.postId},
                        '${escapeQuotes(post.content)}'
                    )">
                        ✏️ Edit
                    </button>

                    <button onclick="deletePost(${post.postId})">
                        🗑️ Delete
                    </button>

                </div>

                <div class="comments">

                    <h4>Comments</h4>

                    <div id="comments-${post.postId}">
                    </div>
                    <input
                        id="comment-${post.postId}"
                        placeholder="Write a comment">

                    <button onclick="addComment(${post.postId})">
                        Comment
                    </button>

                </div>

            </div>
        `;
        loadComments(post.postId);
    });
}

//create post
async function createPost() {

    const content =
        document.getElementById(
            "postContent"
        ).value.trim();

    if (!content) {

        alert("Please write something");

        return;
    }

    const token =
        localStorage.getItem("token");

    const response = await fetch(
        `${API_URL}/Posts`,
        {
            method: "POST",

            headers: {
                "Content-Type": "application/json",

                "Authorization":
                    `Bearer ${token}`
            },

            body: JSON.stringify({
                content: content
            })
        }
    );

    if (response.ok) {

        document.getElementById(
            "postContent"
        ).value = "";

        loadPosts();

    } else {

        alert("Failed to create post");
    }
}
//like or unlike post
async function likePost(postId) {

    const token =
        localStorage.getItem("token");

    const response = await fetch(
        `${API_URL}/Posts/${postId}/like`,
        {
            method: "POST",

            headers: {
                "Authorization":
                    `Bearer ${token}`
            }
        }
    );

    if (response.ok) {

        alert("Like status updated");

    } else {

        alert("Unable to like post");
    }
}

//edit post
function showEditBox(postId, currentContent) {

    const newContent =
        prompt(
            "Edit your post:",
            currentContent
        );

    if (
        newContent !== null &&
        newContent.trim() !== ""
    ) {

        editPost(
            postId,
            newContent
        );
    }
}
async function editPost(
    postId,
    content
) {

    const token =
        localStorage.getItem("token");

    const response = await fetch(
        `${API_URL}/Posts/${postId}`,
        {
            method: "PUT",

            headers: {
                "Content-Type": "application/json",

                "Authorization":
                    `Bearer ${token}`
            },

            body: JSON.stringify({
                content: content
            })
        }
    );

    if (response.ok) {

        alert("Post updated successfully");

        loadPosts();

    } else {

        alert("Unable to update post");
    }
}

//delete post
async function deletePost(postId) {

    const confirmDelete =
        confirm(
            "Are you sure you want to delete this post?"
        );

    if (!confirmDelete) {
        return;
    }

    const token =
        localStorage.getItem("token");

    const response = await fetch(
        `${API_URL}/Posts/${postId}`,
        {
            method: "DELETE",

            headers: {
                "Authorization":
                    `Bearer ${token}`
            }
        }
    );

    if (response.ok) {

        alert("Post deleted successfully");

        loadPosts();

    } else {

        alert("Unable to delete post");
    }
}

//add comments
async function addComment(postId) {

    const input =
        document.getElementById(
            `comment-${postId}`
        );

    const content =
        input.value.trim();

    if (!content) {

        alert("Please write a comment");

        return;
    }

    const token =
        localStorage.getItem("token");

    const response = await fetch(
        `${API_URL}/Posts/${postId}/comments`,
        {
            method: "POST",

            headers: {
                "Content-Type": "application/json",

                "Authorization":
                    `Bearer ${token}`
            },

            body: JSON.stringify({
                content: content
            })
        }
    );

    if (response.ok) {

        input.value = "";

        document.getElementById(`comment-${postId}`).value="";

        loadComments(postId);

    } else {

        alert("Unable to add comment");
    }
}

//load profile
async function loadProfile() {

    const token =
        localStorage.getItem("token");

    const response = await fetch(
        `${API_URL}/Users/me`,
        {
            headers: {
                "Authorization":
                    `Bearer ${token}`
            }
        }
    );

    if (!response.ok) {

        window.location.href =
            "login.html";

        return;
    }

    const user =
        await response.json();

    document.getElementById(
        "userId"
    ).textContent = user.userId;

    document.getElementById(
        "profileUsername"
    ).value = user.username;

    document.getElementById(
        "profileEmail"
    ).value = user.email;

    document.getElementById(
        "profileBio"
    ).value = user.bio;
}

//update profile
async function updateProfile() {

    const username =
        document.getElementById(
            "profileUsername"
        ).value;

    const bio =
        document.getElementById(
            "profileBio"
        ).value;

    const token =
        localStorage.getItem("token");

    const response = await fetch(
        `${API_URL}/Users/me`,
        {
            method: "PUT",

            headers: {
                "Content-Type": "application/json",

                "Authorization":
                    `Bearer ${token}`
            },

            body: JSON.stringify({
                username: username,
                bio: bio
            })
        }
    );

    if (response.ok) {

        alert(
            "Profile updated successfully"
        );

    } else {

        alert(
            "Unable to update profile"
        );
    }
}

//Helper Function: Because we are inserting post content into HTML
function escapeQuotes(text) {

    return text
        .replace(/'/g, "\\'")
        .replace(/"/g, "&quot;");
}

//gets comments
async function loadComments(postId)
{
    const response = await fetch(
        `${API_URL}/Posts/${postId}/comments`
    );

    const comments = await response.json();

    const container =
        document.getElementById(`comments-${postId}`);

    container.innerHTML = "";

    if(comments.length===0)
    {
        container.innerHTML="<p>No comments yet.</p>";
        return;
    }

    comments.forEach(comment=>{

        container.innerHTML += `
            <div class="comment">
                <b>${comment.username}</b><br>
                ${comment.content}
                <hr>
            </div>
        `;
    });

}

function logout() {
    localStorage.removeItem("token");
    window.location.href = "login.html";
}