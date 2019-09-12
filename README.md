# Hands-On Guide: CAA383 - Build Cloud-Native Extensions on Any Cloud Infrastructure

This hands-on session focuses on a "integrate with SAP Cloud Platform" scenario that let you develop and run extensions on any cloud infrastructure. Learn how to consume SAP Cloud Platform services and leverage the SAP Cloud Platform Extension Factory.

## Step-by-Step Guide

In this example, we are creating first an Lambda function to store order information in a file storage on Google Cloud Platform. In the second step we will migrate the function to store the information on Azure blob storage. As we are running on Kubernetes, it is not required to do any changes on Kyma it self. We can even use the same kyma instance, to address a storage solution on another cloud provider.

1. [Setup and connect Varkes](varkes/README.md)
2. Install Google Service Broker
3. [Store Commerce Order on Google Cloud Storage](gcp/README.md)
4. Setup Azure Service Broker
5. [Migrate Store Commerce Order to Microsoft Azure Storage](azure/README.md)

Kyma is abstracting to some degree the cloud providers. Creating and cosuming (3rd party) services, running functions and deploying microservices are working the same way no matter which cloud provider is hosting the kyma system. This example should demonstrate, which components are still cloud provider specific and how to adjust them.

## Bonus Track

If everything was working smooth, there is some time left for a bonus track. In this part, we will connect the SAP Cloud Platform Open Connector to Kyma and use it to tweet about our latest orders.

This part requires a valid twitter account.

1. [Setup Open Connector](open-connector/README.md)
2. [Install Open Connector Kyma Connector](install-open-connector/README.md)
3. Create Lambde to tweet about searches

As this example is not using any cloud provider services, the example can be easily transfered from one kyma installation to the next. No adjustments on code level are required.

## Resources

Further resources for kyma:

Twitter: [@kymaproject](https://twitter.com/kymaproject)  
Linkedin: [linkedin.kyma-project.io](http://linkedin.kyma-project.io)  
Youtube: [youtube.kyma-project.io](http://youtube.kyma-project.io)  
Slack: [slack.kyma-project.io](http://slack.kyma-project.io)  
Github: [github.com/kyma-project](http://github.com/kyma-project)  
Open SAP Course: [open.sap.com/courses/kyma1](https://open.sap.com/courses/kyma1)
