var https = require('https');
var querystring = require('querystring');
var cred = require('./cred.js');


var loginData = querystring.stringify({
	'client_id': cred.clientID,
	'client_secret': cred.clientSecret,
	'grant_type': 'password',
	'username': cred.username,
	'password': cred.password
});


var options = {
	rejectUnauthorized: false,
	method: 'POST',
	host: 'api.enertiv.com',
	port: 443,
	path: '/oauth2/access_token/',
	headers: {
		'Content-Type': 'application/x-www-form-urlencoded',
		'Content-Length': loginData.length
	}
};


function saveToken(response) {
	var result = '';
	var accessToken;

	response.on('data', function (data){
		result += data;
	});

	response.on('end', function() {
		result = JSON.parse(result);
		accessToken = result.access_token;
		getClientInfo('/api/client/', accessToken);
	});
}

function getClientInfo(path, token) {
	options.path = path;
	options.method = 'GET';
	options.headers = {
		'Authorization': 'Bearer ' + token
	}

	request = https.get(options, function (response){
		result='';
		response.on('data', function (data){
			result+=data;
		});

		response.on('end', function (){
			result = JSON.parse(result);
			console.log(result);
		})
	})
}



var request = https.request(options,saveToken);
	request.write(loginData);
	request.end();


















