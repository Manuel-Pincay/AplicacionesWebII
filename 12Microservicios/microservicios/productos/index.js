const servidor = require('./SRC/app')

servidor.listen(process.env.PORT || 3000, () => {
    console.log(`Servidor listening on port ${process.env.PORT || 3000}`);

})