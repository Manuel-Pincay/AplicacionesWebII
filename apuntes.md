# Express

-   npm i express

# Mongoose
-   npm i mongoose
-   npm init -y      -- Usar Mongoose

# Docker

docker-compose up --build
docker-compose up

 [docker run --name BaseMongo -p 27017:27017 -d mongo]

 # Docker - Mongoose
> show dbs
admin                   0.000GB
config                  0.000GB
local                   0.000GB
microservicesclientest  0.000GB
> use microservicesclientest
switched to db microservicesclientest
> show collections
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

