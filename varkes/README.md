# Installing Varkes

To install Varkes, first go to [XF Application Mocks](https://github.com/SAP/xf-application-mocks) and download `xf.yaml` under the path `xf-application-mocks/commerce-mock/deployment`:

![Install Varkes](../assets/InstallVarkes1.png)

Open Kyma Console and from `Select Namespace` section, click on `Create New Namespace`. Fill the name field and create a Namespace:

![Install Varkes](../assets/InstallVarkes2.png)

Go to the Namespace and click on `Deploy new resource`. Choose `xf.yaml` file location you downloaded earlier and click on `Upload`, so Varkes will be deployed.

![Install Varkes](../assets/InstallVarkes3.png)

Go to Kyma homepage and choose `Applications`. Click on `Create Application` and fill the `Name` and `Description` fields to create an application:

![Install Varkes](../assets/InstallVarkes4.png)

Choose the created application from the list and click on `Create Binding` from the `Namespace Bindings` section. Choose the namespace you created earlier and create the binding:

![Install Varkes](../assets/InstallVarkes6.png)

Click on `Connect Application`. This will generate a URL which will be feeded to Varkes to establish the connection between Varkes and Kyma. Copy the URL to the clipboard:

![Install Varkes](../assets/InstallVarkes7.png)

Click on `APIs` and then the hostname of the `commerce-mock` application to access Varkes:

![Install Varkes](../assets/InstallVarkes8.png)

From Varkes homepage, click on Connect:

![Install Varkes](../assets/InstallVarkes9.png)

Paste the URL you copied earlier and click on `Connect` to establish the connection:

![Install Varkes](../assets/InstallVarkes10.png)

Now the status should be `Connected`. Click on `Register` for `SAP Commerce Cloud - Events`:

![Install Varkes](../assets/InstallVarkes11.png)

Go back to the `Applications` page on Kyma. Status of `varkes` should be `Serving` now:

![Install Varkes](../assets/InstallVarkes12.png)