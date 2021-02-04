const http = require('http') // On appelle l'objet 'http' de node
const app = require('./app') // On appelle l'application que renverra le serveur


const normalizePort = (val) => {
    // la fonction normalizePort renvoie un port valide, qu'il soit fourni sous la forme d'un numéro ou d'une chaîne ;
    const port = parseInt(val, 10)
  
    if (isNaN(port)) {
      return val
    }
    if (port >= 0) {
      return port
    }
    return false
  }
  const port = normalizePort(process.env.PORT || '3000')
  