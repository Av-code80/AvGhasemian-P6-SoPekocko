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

exports.modifySauce = (req, res, next) => {
  // Pour la route PUT = modification d'une sauce
  let sauceObject = 0

  if (req.file) {
    // Si la modification contient une image
    Sauce.findOne({ _id: req.params.id }).then((sauce) => {
      // On supprime l'ancienne image du serveur
      const filename = sauce.imageUrl.split('/images/')[1]
      fs.unlinkSync(`images/${filename}`)
    })

    Sauce.updateOne(
      // On applique les paramètre de sauceObject
      { _id: req.params.id },
      { ...sauceObject, _id: req.params.id }
    )
      .then(() => res.status(200).json({ message: 'Sauce modifiée !' }))
      .catch((error) => res.status(400).json({ error }))
  }
  
    
    sauceObject = {
      // On ajoute la nouvelle image
      ...JSON.parse(req.body.sauce),
      imageUrl: `${req.protocol}://${req.get('host')}/images/${
        req.file.filename
      }`,
    }
  } else {
    // Si la modification ne contient pas de nouvelle image
    sauceObject = { ...req.body }
  }
