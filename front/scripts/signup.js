window.addEventListener('load', function () {

    const form = document.querySelector('form')
    const endpoint = 'http://localhost:8080/user'

    const name = document.querySelector('#inputName')
    const surname = document.querySelector('#inputSurname')
    const email = document.querySelector('#inputEmail')
    const pass = document.querySelector('#inputPassword')
    const admin = document.querySelector('[name=role]')


    form.addEventListener('submit', function (event) {
        event.preventDefault()

        const payload = {
            id: 3,
            name: name.value,
            surname: surname.value,
            email: email.value,
            password: pass.value,
            admin: false
        }

        if(admin.checked){
            payload.admin = true
        }

        console.log(payload)

        const config = {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify(payload),   
        }

        fetch(endpoint, config)
            .then((response) => {
                console.log(response);
                response.json()})
            .then(data => {
                console.log(data)
                if (data.admin) {
                    location.replace('./admin.html')
                }
                
            }).catch(err => {
                console.log(err);      
            })
        form.reset()
    })


})
