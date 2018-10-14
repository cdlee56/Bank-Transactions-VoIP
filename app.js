const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const http = require('https');
const parser = require('fast-xml-parser');


app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));


app.get('/', (req, res) => {
    const script = `<document>
                <work>
                <answer/>
                    <speak input-timeout="50000">
            Press one to or two, or any digit, and we\'ll handle your call, or not.
            <bind action="http://www.mydomain.com/get_digits.php?bind=1">1</bind>
                    <bind action="http://www.mydomain.com/get_digits.php?bind=2">2</bind>
                    <bind action="http://www.mydomain.com/get_digits.php?bind=other">~[3-9]</bind>
                    </speak>
                </work>
            </document>
    `

    res.set('Content-Type', 'application/xml');
    res.send(script);
    console.log(req.params);

    /* var options = {
        "method": "GET",
        "hostname": [
            "api",
            "apidata",
            "io"
        ],
        "headers": {}
    };

    let req = http.request(options, res => {
        let chunks = [];
        
        res.on("data", chunk => {
            chunks.push(chunk);
        });

        res.on("end", () => {
            let body = Buffer.concat(chunks);
            console.log(body.toString());
        });
    });

    req.end(); */
});


app.get('/voip/:voip', (req, res) => {
    const value = req.params.voip;

    res.send(`User chose option ${value}.`);
});


