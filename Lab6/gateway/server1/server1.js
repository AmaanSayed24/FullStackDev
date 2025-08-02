const express = require('express');

const app = express();


const port = 4001;


app.get('/getStudent', (req, res) => {
    res.json({student : [{name: 'Amaan', age: 20},

        {name: 'Hiba', age: 19},

        {name: 'Pranav', age: 19}], 
         
        from: 'server1'});
});

app.listen(port, () => {    
    console.log(`Server 1 listening at http://localhost:${port}`);
});