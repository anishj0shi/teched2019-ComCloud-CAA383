/** imports
 */

//azure client

const {
    Aborter,
    BlobURL,
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

        //get order code from query parameters and handle error
        var orderCode = event.extensions.request.query.orderCode;


        if (typeof orderCode == 'undefined') {
            console.log("query parameter orderCode undefined");
            event.extensions.response.status(400).json({ error: "query parameter orderCode undefined" });
        } else {
            try {
                console.log(`Order Code: ${orderCode}`)

                //set blobname to ordercode
                var blobName = `${orderCode}.json`

                const blobURL = BlobURL.fromContainerURL(containerURL, blobName);

                // Get blob content from position 0 to the end
                const downloadBlockBlobResponse = await blobURL.download(Aborter.none, 0);

                //Convert stream to string
                return await streamToString(downloadBlockBlobResponse.readableStreamBody)
            } catch (error) {
                console.log(`something went wrong reading order for code ${orderCode}`);
                event.extensions.response.status(500).json({ error: `something went wrong reading order for code ${orderCode}` });
            }
        }


    }
}

// A helper method used to read a Node.js readable stream into string
async function streamToString(readableStream) {
    return new Promise((resolve, reject) => {
        const chunks = [];
        readableStream.on("data", data => {
            chunks.push(data.toString());
        });
        readableStream.on("end", () => {
            resolve(chunks.join(""));
        });
        readableStream.on("error", reject);
    });
}