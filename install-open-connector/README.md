## Provision Open Connectors in SAP Cloud Platform Extension Factory - Kyma runtime

### Pre-requisites

- Running Kyma runtime (1.4.1+)
- You should have provisioned SAP Cloud Platform Open Connectors, as described [here](../open&#32;connector/README.md)

> Tip: Keep Organisation Secret and User Secret obtained via Open Connectors handy.

### Install Preview Bundle

First we need to install the preview bundle for open connector. Navigate to the Kyma start page by clicking on the Kyma logo on top of the console.

TODO: Image

Now navigate to *Cluster Addons* and expand *addons-repos-url*. We need to reference the staging bundle repository by removing the existing URL and adding a new one: `https://storage.googleapis.com/faros-stage-base-xf-bundles/index.yaml`

TODO: Image



### Setup Open Connector Connection

Now we can start to setup the connection to SAP Cloud Platform Open Connectors. In the *Namespaces* section navigate inside any *namespace*.

![Kyma OC1](assets/Kyma&#32;OC&#32;1.png)

Go to the *Catalog* option in the menu to view the list of *Add-ons*.

![Kyma OC1](assets/Kyma&#32;OC&#32;2.png)

From the list of Add-ons select **SAP Cloud Platform Open Connectors - Connector**. This add is technically a kubernets controller. This controller is not provisioned by default and needs to provisioned by you as the next few steps.

![Kyma OC1](assets/Kyma&#32;OC&#32;3.png)

Click on *Add Once* button to add this controller to your namespace.

![Kyma OC1](assets/Kyma&#32;OC&#32;4.png)

Give a name to your service-instance and then click on *Create Instance*

![Kyma OC1](assets/Kyma&#32;OC&#32;5.png)

Once created, lets check whether the instance is avail

![Kyma OC1](assets/Kyma&#32;OC&#32;6.png)

TODO: Add Credentials


![Kyma OC1](assets/Kyma&#32;OC&#32;7.png)

![Kyma OC1](assets/Kyma&#32;OC&#32;8.png)

![Kyma OC1](assets/Kyma&#32;OC&#32;9.png)

![Kyma OC1](assets/Kyma&#32;OC&#32;10.png)

![Kyma OC1](assets/Kyma&#32;OC&#32;11.png)

![Kyma OC1](assets/Kyma&#32;OC&#32;12.png)

![Kyma OC1](assets/Kyma&#32;OC&#32;13.png)

![Kyma OC1](assets/Kyma&#32;OC&#32;14.png)

![Kyma OC1](assets/Kyma&#32;OC&#32;15.png)

![Kyma OC1](assets/Kyma&#32;OC&#32;16.png)

![Kyma OC1](assets/Kyma&#32;OC&#32;17.png)

![Kyma OC1](assets/Kyma&#32;OC&#32;18.png)

![Kyma OC1](assets/Kyma&#32;OC&#32;19.png)

![Kyma OC1](assets/Kyma&#32;OC&#32;20.png)

![Kyma OC1](assets/Kyma&#32;OC&#32;21.png)

![Kyma OC1](assets/Kyma&#32;OC&#32;22.png)

![Kyma OC1](assets/Kyma&#32;OC&#32;23.png)

![Kyma OC1](assets/Kyma&#32;OC&#32;24.png)

![Kyma OC1](assets/Kyma&#32;OC&#32;25.png)

![Kyma OC1](assets/Kyma&#32;OC&#32;26.png)