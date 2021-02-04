# Projet n°6 - Développement Web 
## Création d'une API sécurisée pour l'application "Piquante" par So Pekocko

![Logo So Pekocko](docs/logo.png)

# So Pekocko

est une entreprise familiale de 10 salariés. Son activité principale est la création de sauces piquantes dont la composition est tenue secrète. Forte de son succès, l’entreprise souhaite se développer et créer une application web, dans laquelle les utilisateurs pourront ajouter leurs sauces préférées et liker ou disliker les sauces proposées par les autres.

# Points de vigilance

L’entreprise ayant subi quelques attaques sur son site web ces dernières semaines, le fondateur souhaite que les données des utilisateurs soient parfaitement protégées. Pour cela, l’API utilisée devra impérativement respecter des pratiques de code sécurisé.

### Front-end
Afin d'utiliser l'API, vous pouvez cloner ce [répertoire Github](https://github.com/OpenClassrooms-Student-Center/dwj-projet6) et y suivre les instructions pour faire tourner le front-end (plus de détails dans la note de cadrage: Dépôt GitHub/Procédure).

### Documentations
* [Note de cadrage](docs/cadrage.pdf)
* [Guidelines API](docs/guidelines.pdf)


### Technologies utilisées
* Express
* NodeJS
* MongoDB
* Mongoose

### Objectifs 
Créer l'API de l'application "Piquante" permettant aux utilisateurs de l'application d'ajouter leurs sauces préférées et de "liker" ou "disliker" les sauces ajoutées par les autres utilisateurs.

### Compétences dévelopées
* Stocker des données de manière sécurisée
* Mettre en œuvre des opérations CRUD de manière sécurisée
* Implémenter un modèle logique de données conformément à la réglementation

### Serveur de développement 

Pour utiliser le serveur, chargez les packages nécessaires :

    npm install 

Puis lancez le serveur:

    nodemon server
