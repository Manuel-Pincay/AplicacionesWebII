/* ARREGLO DE DATOS */
let datos = [];


/* ---------- NUEVOS DATOS */
function createDatos(req, res) {
    const { body } = req;
    const datos_save = datos.push(body);
    if (datos_save) {
        res.status(200).send({
            message: "Datos saved successfully",
            data: body
        });
    } 
    else { res.status(400).send({message: "Datos not saved"});};
};


function readDatos(req, res) {


    res.status(200).send({ data: datos });
};

function readDato(req, res) {
    const { idemp } = req.params;
    console.log(idemp);
    let exonerado = req.body;
    console.log(exonerado);

    exonerado = datos.filter(i => i.idemp === idemp);
    if (exonerado.length === 0) {
        res.status(400).send({
            message: `No datos id de usuario: ${idemp}`
        });
    } else {
        res.status(200).send({
            message: `Exonerado con id de usuario ${idemp} encontrado:`,
            data: exonerado[0]
        });
    };
};

function updateDato(req, res) {
    const { idemp } = req.params
    const { estado } = req.body;

    if (datos.filter(i => i.idemp === idemp).length === 0) 
    {
        return res.status(400).send({ message: `No found ${idemp}` });
    };

    let exonerado = datos.filter(i => i.idemp === idemp)[0];

    if (estado == 4) {
        if (exonerado.estado !== 2 && exonerado.estado !== 1) {

            return res.status(400).send({
                message: `El id user ${idemp} estado es rechazado o pendiente`
            })

        } else {
            exonerado.estado = estado;
        }
    } else {
        exonerado.estado = estado;
    }

    res.status(200).send({
        message: "Datos modificado con éxito",
        data: { estado }
    });


};

function deleteDato(req, res) {
    const idemp = req.params['idemp'];

    datos = datos.filter(i => i.idemp !== idemp);

    res.status(200).send({
        message: `El dato ${idemp} fué eliminado con éxito`
    });

};

module.exports = {
    createDatos,
    readDatos,
    readDato,
    updateDato,
    deleteDato
}