# Express

-   npm i express
# TypeScript

- tsc init --config
- tsc -w
# Mongoose
-   npm i mongoose
-   npm init -y      -- Usar Mongoose

# Docker

docker-compose up --build
docker-compose up

 [docker run --name BaseMongo -p 27017:27017 -d mongo]

## Docker - Mongoose

> show dbs
~~~              
admin                               0.000GB
config                              0.000GB
local                               0.000GB
microservicesclientest              0.000GB
~~~
   

> use microservicesclientest

switched to db microservicesclientest

> show collections
~~~
clientes
> db.clientes.find().pretty();
{
        "_id" : ObjectId("62c11edf7b08a6d5a4ac3b7f"),
        "CLIENTE_ID" : 1,
        "CLIENTE_NOMBRE" : "MANUEL",
        "CLIENTE_CEDULA" : "1313614495",
        "CLIENTE_TELEFONO" : "0959427677",
        "Estado" : true,
        "__v" : 0
}
>
~~~
# CSR

### Installation Vite Vanilla 
- npm create vite@latest
~~~
        Need to install the following packages:
        create-vite@latest
        Ok to proceed? (y) y
        √ Project name: ... ClienteWeb
        √ Package name: ... clienteweb
        √ Select a framework: » vanilla
        √ Select a variant: » vanilla-ts

        http://localhost:3000/

- Done. Now run:

    cd ClienteWeb
    npm install
    npm run dev    
~~~    

- Install Axios

        > npm i axios

# MEJORAS PROYECTO

*VALIDACIONES*

- cuando este eliminiado un dato y se quiera ingresar un dato con la misma placa que fue eliminado anterior mente solo se cambie el estado de true

        
