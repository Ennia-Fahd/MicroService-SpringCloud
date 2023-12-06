# MicroService-SpringCloud
## Instructions 
### 1-Install Vault : https://developer.hashicorp.com/vault/docs/install
### 2-Install Consul : https://developer.hashicorp.com/consul/docs/install
### 3-Run Vault :  vault server -dev
### 4-Run Consul :  consul agent -server -bootstrap-expect=1 -data-dir=consul-data -ui -bind="Your API"
### 5-Run each service starting from config service
### 6- Run the Angular Application  ecom-web-app : ng-serve
## API 
### Conventions 
#### --> /customers : list all customers.
#### --> /customers/id : list customer by id.
#### --> /productItems : list all the productItems.
#### --> /productItems/id : list produtItem by id.
#### --> /orders : list all orders.
#### --> /orders/id : list order by id.
#### --> 
### List Orders
![ordersAPI](https://github.com/Ennia-Fahd/MicroService-SpringCloud/assets/92646945/4a06cf04-19c5-422a-b940-e3b44cf019b6)
### List Customers
![CustomersAPI](https://github.com/Ennia-Fahd/MicroService-SpringCloud/assets/92646945/241ea6f1-e7ae-4981-a2c5-35ac2dc54109)
### List Product Items
![ProductsItemsAPI](https://github.com/Ennia-Fahd/MicroService-SpringCloud/assets/92646945/04485017-8311-40d7-be18-d24f6a12bd49)
### List Product Item
![ProductsItemsAPI1](https://github.com/Ennia-Fahd/MicroService-SpringCloud/assets/92646945/b055b997-25f3-49e0-a2fc-92ce37fe69c5)
### List Product by Id
![products](https://github.com/Ennia-Fahd/MicroService-SpringCloud/assets/92646945/3f3ee4fd-70e2-415f-9bf5-0c371320d786)
## Interfaces
### List of Customers
![Customers](https://github.com/Ennia-Fahd/MicroService-SpringCloud/assets/92646945/6d3e58f4-1153-4390-8d30-27cd926249c8)
### List of Orders
![Orders](https://github.com/Ennia-Fahd/MicroService-SpringCloud/assets/92646945/a663e8a1-449b-491a-8f68-d97847baae76)
### Detail of an Order
![details](https://github.com/Ennia-Fahd/MicroService-SpringCloud/assets/92646945/c6e9a237-42be-499b-bab0-ed8ce786b2ca)
