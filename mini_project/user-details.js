const url = new URL(location.href);
const id = url.searchParams.get('data');

const container2 = document.createElement('div');
container2.classList.add('container2')
document.body.appendChild(container2)





fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(value => value.json())
    .then(value => {
        for (const item in value) {

            const userDiv = document.createElement('div');
            if (typeof value[item] !== 'object') {

                userDiv.innerText = `${item} -- ${value[item]}`;
            } else {
                userDiv.innerText = `${item} :`

                for (const key in value[item]) {
                    const userInnerDiv = document.createElement('div');

                    if (typeof value[item][key] !== 'object') {
                        userInnerDiv.innerText = `${key} -- ${value[item][key]}`;

                    } else {
                        userInnerDiv.innerText = `${key} :`;

                        for (const element in value[item][key]) {
                            const htmlDivElement = document.createElement('div');
                            if (typeof value[item][key][element] !== 'object') {
                                htmlDivElement.innerText = `${element} -- ${value[item][key][element]}`;
                            }
                            userInnerDiv.append(htmlDivElement);
                        }
                    }
                    userDiv.append(userInnerDiv);
                }
            }
            container2.append(userDiv);
        }
        const divelement1 = document.createElement('div');
        divelement1.classList.add('divbutton')
        document.body.appendChild(divelement1)
        const btn = document.createElement('button');
        btn.innerText='post of current user'
        btn.classList.add('btn1')
        divelement1.appendChild(btn);
        const container = document.createElement('div');
        container.classList.add('container')
        document.body.appendChild(container);
        btn.onclick=function () {
fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then(value => value.json())
    .then(post => {
        for (let i = 0; i <10; i++) {
            const postElement = post[i];
            const Postdiv = document.createElement('div');
            Postdiv.classList.add('user')
            Postdiv.innerText=`Title-${postElement.title}`
            const a = document.createElement('a');
            a.innerHTML = `Click me`;
            Postdiv.append(a);
            a.href = `post-details.html?data=${postElement.id}`;
            container.append(Postdiv)
        }
    })
    };
    })


