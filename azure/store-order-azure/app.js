/** imports
 */
//http client (for commerce)
const axios = require('axios');

//azure client

const {
    Aborter,
    BlobURL,
    BlockBlobURL,
    ContainerURL,
    ServiceURL,
    StorageURL,
    SharedKeyCredential,
} = require("@azure/storage-blob");

const sharedKeyCredential = new SharedKeyCredential(process.env.storageAccountName, process.env.accessKey);

// Use sharedKeyCredential
const pipeline = StorageURL.newPipeline(sharedKeyCredential);

// List containers
const serviceURL = new ServiceURL(
    // Use url provided from binding
    process.env.primaryBlobServiceEndPoint,
    pipeline
);

//creation of container / bucket reference
const containerURL = ContainerURL.fromServiceURL(serviceURL, process.env.containerName);

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

            //set blobname to ordercode 
            var blobName = `${orderCode}.json`

            const blobURL = BlobURL.fromContainerURL(containerURL, blobName);

            const blockBlobURL = BlockBlobURL.fromBlobURL(blobURL);

            //transform content to string 
            var content = JSON.stringify(orderResponse.data);

            //upload blob
            const uploadBlobResponse = await blockBlobURL.upload(
                Aborter.none,
                content,
                content.length
            );

            console.log(
                `Upload block blob ${uploadBlobResponse} successfully`,
                uploadBlobResponse
            );

            return ""

        } catch (error) {
            throw "Something went wrong";
        }

    }
}