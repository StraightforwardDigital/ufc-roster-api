const express = require('express');
const app = express();
const PORT = 8000;

const fighters = {
    'forrest griffin': {
        'weightClass': 'Light Heavyweight',
        'record': '19-7',
        'yearsActive': '2001-2012',
        },
    'chuck liddell': {
        'weightClass': 'Light Heavyweight',
        'record': '21-9',
        'yearsActive': '1998-2010',
        },
    'tito ortiz': {
        'weightClass': 'Light Heavyweight',
        'record': '21-12-1',
        'yearsActive': '1997-2012',
        },
    'royce gracie': {
        'weightClass': 'Welterweight',
        'record': '15-2-3',
        'yearsActive': '1993-2003',
        },
    'wes sims': {
        'weightClass': 'Heavyweight',
        'record': '24-15-1-2',
        'yearsActive': '2001-2006',
        },
    'unknown':{
        'weightClass': 'unknown',
        'record': 'unknown',
        'yearsActive': 'unknown',
        }


}

// Setup of the listener for the request to '/'
app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html');
});

app.get('/api/:name', (request, response)=>{
    const fighterName = request.params.name.toLowerCase()
    if(fighters[fighterName]){
        response.json(fighters[fighterName]);
    }else{
        response.json(fighters['unknown'])
    }
    
})

// Setup the listener for port 8000
app.listen(PORT, () => {
    console.log(`The server is running on port ${PORT}! Better go catch it!`);
});
