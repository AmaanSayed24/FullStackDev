const express = require('express');

const app = express();


const port = 4002;


app.get('/getTeacher', (req, res) => {
    res.json({teachers : [{name: 'Mahadev', age: 29},

        {name: 'Nilam', age: 30},

        {name: 'Sonali', age: 28}],

        from: 'server2'});
});

app.listen(port, () => {    
    console.log(`Server 2 listening at http://localhost:${port}`);
});