// L'application en elle même qui va faire appelle aux différentes fonctions implémentées dans l'APi : Accès aux images, aux route User, aux route Sauces

const express = require('express')
const bodyParser = require('body-parser') // Pour faciliter le traitement des données contenues dans le corp de la reqûete, le transformant en objet JSON
const mongoose = require('mongoose') // L'interface pour communiquer avec la BDD
const mongooseConfig= require('./config/mongoose.config')
const path = require ('path') // Pour le middleware express static pour acceder au chemin du système de fichier

const sauceRoutes = require('./routes/sauce')
const userRoutes = require('./routes/user')


