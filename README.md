# Hands-On Guide: CAA383 - Build Cloud-Native Extensions on Any Cloud Infrastructure

This hands-on session focuses on a "integrate with SAP Cloud Platform" scenario that let you develop and run extensions on any cloud infrastructure. Learn how to consume SAP Cloud Platform services and leverage the SAP Cloud Platform Extension Factory.

## Requirements

This Sample code requires access to an [kyma instance](https://kyma-project.io/). In addition an [google cloud](https://cloud.google.com) and [azure](http://azure.microsoft.com) account is required.

## Step-by-Step Guide

In this example, we are creating first an Lambda function to store order information in a file storage on Google Cloud Platform. In the second step we will migrate the function to store the information on Azure blob storage. As we are running on Kubernetes, it is not required to do any changes on Kyma it self. We can even use the same kyma instance, to address a storage solution on another cloud provider.

If not stated otherwise, all actions are done in  the `default` namespace.

1. [Setup and connect Varkes](varkes/README.md)
2. [Install Google Service Broker](gcpbroker/README.md)
3. [Store Commerce Order on Google Cloud Storage](gcp/README.md)
4. Setup Azure Service Broker
5. [Migrate Store Commerce Order to Microsoft Azure Storage](azure/README.md)

Kyma is abstracting to some degree the cloud providers. Creating and cosuming (3rd party) services, running functions and deploying microservices are working the same way no matter which cloud provider is hosting the kyma system. This example should demonstrate, which components are still cloud provider specific and how to adjust them.

## Resources

Further resources for kyma:

Twitter: [@kymaproject](https://twitter.com/kymaproject)  
Linkedin: [linkedin.kyma-project.io](http://linkedin.kyma-project.io)  
Youtube: [youtube.kyma-project.io](http://youtube.kyma-project.io)  
Slack: [slack.kyma-project.io](http://slack.kyma-project.io)  
Github: [github.com/kyma-project](http://github.com/kyma-project)  
Open SAP Course: [open.sap.com/courses/kyma1](https://open.sap.com/courses/kyma1)

## How to obtain support

For support please contanct your hands on session instructor or reach out in the public [Kyma Slack Channel](http://slack.kyma-project.io)

## License

Copyright (c) 2019 SAP SE or an SAP affiliate company. All rights reserved.

This file is licensed under the SAP Sample Code License except as noted otherwise in the [LICENSE](LICENSE) file .”
