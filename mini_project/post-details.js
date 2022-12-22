const url = new URL(location.href);
const id = url.searchParams.get("data");





fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(value => value.json())
    .then(post => {
        for (const postKey in post) {
            let div = document.createElement('div')
            div.innerHTML = `<b>${postKey}:</b> ${post[postKey]}`
            document.body.append(div)

        }
        const text = document.createElement('div');
        text.innerText='Ласкаво просимо!Нижче інформація про пости'
        text.classList.add('text')
        document.body.appendChild(text);


fetch(`https://jsonplaceholder.typicode.com/post/${id}/comments`)
    .then(value => value.json())
    .then(posts => {
        for (const post of posts) {
            for (const postKey in post) {
                let div = document.createElement('div')
                div.classList.add('user')
                div.innerHTML = `<b>${postKey}:</b> ${post[postKey]}`
                container.appendChild(div)
            }
        }
    })
        const container = document.createElement('div');
        container.classList.add('container')
        document.body.append(container);
    })

