// Contient la logique métier concernant les sauces, à appliquer aux différentes routes CRUD

const Sauce = require('../models/Sauce') // On récupère le modèle' Sauce'
const fs = require('fs') // On récupère le module 'file system' de Node

exports.createSauce = (req, res, next) => {
  // Pour la route POST = Création d'une sauce
  const sauceObject = JSON.parse(req.body.sauce)
  const sauce = new Sauce({
    ...sauceObject,
    imageUrl: `${req.protocol}://${req.get('host')}/images/${
      req.file.filename
    }`,
  })
  sauce
    .save()
    .then(() => res.status(201).json({ message: 'Sauce enregistrée !' }))
    .catch((error) => res.status(400).json({ error }))
}
