const {response} = require('express')

fetch('http://localhost:3000/api/users',{
    method : 'POST',
    headers : {
        'Content-Type' : 'application/json'
    },
    body: JSON.stringify({
        name : 'Agus',
        email : 'agus@gmail.com',
        phone : '0898888'

    })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));