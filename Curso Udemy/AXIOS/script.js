// // instalação axios
// console.log(axios)

// primeiro request
const getData = async () => {
    try {
        const res = await postsFetch.get("/users",
            //definindo headers
            {
                headers: {
                    "Content-Type": "application/json",
                    custom: "header",
                }
            }
        )
        console.log(res)

        return res.data
    } catch (error) {
        console.log(error)
    }
}
getData()
// imprimindo dados na tela

const mainColumn = document.querySelector("table")

const printData = async () => {
    const data = await getData();
    data.map((users) => {
        const tr = document.createElement("tr")

        const idUsers = document.createElement("td")
        idUsers.textContent = users.id
        idUsers.style.color = "red"
        tr.appendChild(idUsers)

        const nameElement = document.createElement("td")
        nameElement.textContent = users.name
        tr.appendChild(nameElement)

        const userNameElement = document.createElement("td")
        userNameElement.textContent = users.username
        tr.appendChild(userNameElement)

        const emailElement = document.createElement("td")
        emailElement.textContent = users.email
        tr.appendChild(emailElement)

        mainColumn.appendChild(tr)
    })
}
printData()

// post

const form = document.querySelector("#post-form")
const titleInput = document.querySelector("#title")
const bodyInput = document.querySelector("#body")
const blogPosts = document.querySelector("#posts")
const bodyPost = document.createElement("p")
const paraPost = document.createElement("h1")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    postsFetch.post("/posts", {
        title: titleInput.value,
        body: bodyInput.value,
        userId: 1
    })
    paraPost.textContent = titleInput.value
    blogPosts.appendChild(paraPost)

    bodyPost.textContent = bodyInput.value
    blogPosts.appendChild(bodyPost)

})
function removerPost(){
    paraPost.textContent = ""
    bodyPost.textContent = ""
}