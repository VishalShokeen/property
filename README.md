# property
This project has code for a rest service which concatenates the address object fields into a single string.

This code launches a small NodeJs API web service at port 5000

Steps to build and test
1. download the code
2. npm install
3. npm start
4. service will be available at http://localhost:5000
5. you need to send request using POST


The Test

You can send a json similar to request.json to the URL you provide. The service will filter the data and return a few fields as given in sample response.json.

Details

You can view the request payload json sample provided; from the list of property data in the request payload, the service will return a property record array for items having workflow completed (workflow: completed) for the type 'htv'.
request.json 
response.json 

The returned JSON should have a response key with an array of properties. Each element should have the following fields from the request:

Attribute 1: concataddress – a concatenation of the address object fields into a single string
Attribute 2: type
Attribute 3: workflow
Error Handling

If you send invalid JSON, then the service returns a JSON response with HTTP status 400 Bad Request, and with a error key containing the string could not decode request. For example:

{
    "error": "Could not decode request: JSON parsing failed"
}
