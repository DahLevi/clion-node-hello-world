const http = require('http');
//const hostname = server.address();
const port = process.env.PORT || '5000';
var hostname;

var friends = require("../friends2.json"); // Once for all times

const server = http.createServer((request, response) => {
    response.statusCode = 200;
    hostname = server.address();
    response.setHeader('Content-type', 'text/html');
    response.write(
        '<!DOCTYPE html> \n' +
        '<html lang="en"> \n' +
        '        <head> \n' +
        '               <meta charset="utf-8"> \n' +
        '               <meta http-equiv="X-UA-Compatible" content="IE=edge"> \n' +
        '               <meta name="viewport" content="width=device-width, initial-scale=1"> \n' +
        '               <meta name="description" content="Home Page"> \n' +
        '               <meta name="author" content="Levi Dahlberg"> \n' +
        '               <title>Netcentric Computing Home Page</title> \n' +
        '               <!-- Bootstrap core CSS --> ' +
        '               <link rel="stylesheet"' +
        ' href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"' +
        ' integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">' +
        '       </head> \n' +
        '        <body> \n' +
        '               <div class="container" style="text-align: center"> \n' +
        '               <h1>Another Example of Node 2.0</h1><br> \n'

    );
    var currentDate = new Date();
    response.write(
        '               <p>Current time is: ' + currentDate + '</p>'
    );
    response.write(
        '               <table class="table table-bordered table-hover"> \n' +
        '                       <thead> \n' +
        '                               <tr> \n' +
        '                                       <th scope="col">First Name</th> \n' +
        '                                       <th scope="col">Last Name</th> \n' +
        '                                       <th scope="col">Phone</th> \n' +
        '                                       <th scope="col">Gender</th> \n' +
        '                               </tr> \n' +
        '                       </thead> \n' +
        '                       <tbody> \n'
    );
    for (var gender in friends)
        for (var f in friends[gender])
            response.write(
                '                               <tr> \n' +
                '                                       <td>' + friends[gender][f]["firstName"] + '</td> \n' +
                '                                       <td>' + friends[gender][f]["lastName"] + '</td> \n' +
                '                                       <td>' + friends[gender][f]["phone"] + '</td> \n' +
                '                                       <td>' + gender + '</td> \n' +
                '                               </tr> \n'
            );

    response.write(
        '                       </tbody> \n' +
        '               </table> \n'
    );
    response.write(
        '       </body> \n' +
        '</html> \n'
    );
    response.end();
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});


