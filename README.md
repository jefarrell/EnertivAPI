##Repository showing usage of the [Enertiv](http://www.enertiv.com/circuit-api.html) API.

___

####API documentation found [here](https://api.enertiv.com/docs/#!/client)

**client.js** is an executable script, wrapping OAUTH2 authentication, saving access tokens, and calling the '/api/client/' route 

**client_Module.js** is a node module, wrapping OAUTH2 authentication, saving access tokens, and API calls.  It has no dependencies;

**withRequest** shows how the 'client_Module.js' file looks when using the Request node module

**examples** shows a basic Express app that uses the 'client_Module' or the Request version to query info from the API.






Original 'client.js' version was originated by [Tom Igoe](github.com/tigoe), which also lives [here](https://github.com/tigoe/NodeExamples/tree/master/EnertivClient).  The updated code here is based off of his initial work, and developed in collaboration with him.  
