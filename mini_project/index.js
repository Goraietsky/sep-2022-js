const container = document.createElement('div');
container.classList.add('container')
document.body.append(container);



    fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(value => value.json())
        .then(value => {
            for (const item of value) {

                const usersDiv = document.createElement('div');
                usersDiv.classList.add('user')
                usersDiv.innerText = `${item.id} -- ${item.name}`;
                container.append(usersDiv);

                const a = document.createElement('a');
                a.innerHTML = `Click me`;
                a.classList.add('button')
                a.classList.add('a')
                usersDiv.append(a);
                a.href = `user-details.html?data=${item.id}`;
            }
        });


