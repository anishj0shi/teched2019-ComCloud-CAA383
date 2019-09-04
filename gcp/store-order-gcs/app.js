/** imports
 */ 
//http client (for commerce)
const axios = require('axios');

// google cloud client library
const { Storage } = require('@google-cloud/storage');


//setup through binding
//decode base64 to string
var privateKeyString = Buffer.from(process.env.PrivateKeyData, 'base64').toString('ascii')

//Parse Service account key -> credential
const privateKey = JSON.parse(privateKeyString);

//innitialize connection to gcs
const storage = new Storage({
    projectId: process.env.ProjectId,
    credentials: privateKey
});

//get access to bucket
const myBucket = storage.bucket(process.env.bucket_name);


/* Begin actual lambda function
*/

module.exports = { 
    
    //async function to enable promise handling through await
    main: async function (event, context) {
    
    //get order ID from event
    var orderCode = event.data.orderCode;
    
    console.log(orderCode);
    
    //assemble call to OCC API
    var url = `${process.env.GATEWAY_URL}/electronics/orders/${orderCode}`
    try {
        var orderResponse = await axios.get(url);
        
        //log response
        console.log(`Order data for ${orderCode}`);
        console.log(orderResponse.data);
        
        //set filename to ordercode 
        var fileName = `${orderCode}.json`
        var file = myBucket.file(fileName);
        
        //write order to bucket
        var saveResponse = await file.save(JSON.stringify(orderResponse.data), {
            gzip: true, metadata: {
                contentType: 'application/json'
            }
        });
        
        console.log(`Save response for file ${fileName}`);
        console.log(saveResponse);
        
        return "";
        
    } catch(error) {
        throw "Something went wrong";
    }

} }