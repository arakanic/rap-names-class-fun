const express = require('express');
const app = express();
const PORT = 8000;

const rappers = {
    '21 savage': {
        'age': 29,
        'birthName': "Shéyaa Bin Abraham-Joseph",
        'birthLocation': "London, England"
    },
    'chance the rapper': {
        'age': 29,
        'birthName': "Chancellor Bennett",
        'birthLocation': "Chicago, Illinois"
    },
    'dylan': {
        'age': 29,
        'birthName': "Dylan",
        'birthLocation': "Dylan, Dylan"
    }
};

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html');
});

app.get('/api/:rapperName', (request, response) => {
    const name = request.params.rapperName.toLowerCase();
    if(rappers[name]) {
        response.json(rappers[name]);
    }
    else {
        response.json(rappers["dylan"]);
    }
    // response.json(rappers);
});

app.listen(PORT, () => {
    console.log(`Oh no server is running on port ${PORT} go catch it`);
});