// Contient la logique métier concernant les utilisateurs, à appliquer aux différentes routes CRUD (ici uniquement POST)

const bcrypt = require('bcrypt') // On fait appel à bcrypt pour hasher le mot de passe
const jwt = require('jsonwebtoken') // On fait appel à JsonWebToken pour attribuer un TOKEN à un utilisateur quand il se connecte
const User = require('../models/User') // On fait appel à notre modèle 'User'
const config = require('../config/auth.config') // On récupère la clé pour le TOKEN

exports.signup = (req, res, next) => {
  // Pour la création d'un nouvel utilisateur
  bcrypt
    .hash(req.body.password, 10) // Le chiffre '10' indique le nombre de salage du MDP
    .then((hash) => {
      const user = new User({
        email: req.body.email,
        password: hash,
      })
      user
        .save()
        .then(() => res.status(201).json({ message: 'Utilisateur créé ! ' }))
        .catch((error) => res.status(400).json({ error }))
    })
    .catch((error) => res.status(500).json({ error }))
}

exports.login = (req, res, next) => {
  // Pour la connection à son compte utilisateur
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (!user) {
        return res.status(401).json({ error: 'Utilisateur non trouvé !' })
      }