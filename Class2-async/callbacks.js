const platos =[
        {id:1,
        descripcion: 'Perico',
        idrest:1
    },
        {id:2,
        descripcion: 'bolon',
        idrest:2
    },
        {id:3,
        descripcion: 'lomo fino',
        idrest:3
    },
    {   id:4,
        descripcion: 'ceviche',
        idrest:2
    },
]

const restaurante=[
    {id:1,
        nombre: Chavecito,
    },
    {id:2,
        nombre: Lo-nuestro,
        },
    {id:1,
        nombre: casita,
    },


]

//Callback 
// filter devuelve un arreglo y luego habria que convertirlo en objeto
//el find necesita una funcion flecha

function buscarplatoid(id,Callback)
{
   const plato= platos.find((plato)=> plato.id== id);
   if (!plato)
   {
       const error = new Error ();
       error.message= `plato no encontrado con id ${id}`;
        return Callback(error);
   }
    Callback(null, plato);
}


buscarplatoid(1,(err,plato)=>
{ if(err){
    console.log(err.message);
    return;
    }
    console.log(null,plato);
})

buscarplatoid(33,(err,plato)=>{
    if(err)
    {
    console.log(err.message);
    return;
    }
    buscarrestauranteid(plato.idrest, (err,restaurante=>{
        if(err){
            console.log(err.message);
            return;
        }
    }))
    console.log(plato);
    console.log(restaurante );
})


function buscarrestauranteid(id, Callback)
{
    const restaurante = restaurante.find((restaurante)=>restaurante.id)
}

buscarrestauranteid(1, (err,restaurante)=>{
    if(err)
    {
        console.log(err.message);
        return;
    }
    console.log(restaurante);
})