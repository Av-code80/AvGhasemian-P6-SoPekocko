// Contient la logique métier concernant les utilisateurs, à appliquer aux différentes routes CRUD (ici uniquement POST)

const bcrypt = require('bcrypt') // On fait appel à bcrypt pour hasher le mot de passe
const jwt = require('jsonwebtoken') // On fait appel à JsonWebToken pour attribuer un TOKEN à un utilisateur quand il se connecte
const User = require('../models/User') // On fait appel à notre modèle 'User'
const config = require('../config/auth.config') // On récupère la clé pour le TOKEN


}
