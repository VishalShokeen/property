var contacts = require('./../lib/process_addresses.js');

module.exports = function(app) {
    app.post('/',
        function (request, response) {
            var payload = request.body.payload;

            if(payload==null){
                var error = '{\"error\": \"Could not decode request: JSON parsing failed\"}';
                response.statusCode =400;
                response.setHeader('content-type', 'application/json');
                return response.end(error);
            }
            
            response.setHeader('content-type', 'application/json');
            response.end(JSON.stringify(contacts.filter(request.body)));
        });
};
