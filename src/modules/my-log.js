//Exportación parcial mediante módulos
module.exports.info = function info (text){
    console.log('INFO', text);
    return text;
}

module.exports.error = function error (text){
    console.log('ERROR', text);
    return text;
}

// module.exports = {info, error}; //Exportación global
// module.exports.info = info; //Exportación parcial