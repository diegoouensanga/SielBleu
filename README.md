# SielBleu

# Règles pour le code :

Nom des variables : Francais Majuscules (DescriptionMetier)
Nom des fonctions : Francais maj 

Bien commenter chaque commit ! 

# Setup le projet : 

1.Cloner le répertoire sur votre machine en local :
```bash
git clone git@github.com:diegoouensanga/SielBleu.git
```

2.Installer react

# Procédure de développement
Voici les étapes à suivre lorsque vous développerez une nouvelle feature 
1. Soyez sur que tout est clair. Si vous n'êtes pas sur de quelque chose, n'hésitez pas à demander ! </br>

2. Checker bien que votre git status est clean et que votre local depot est à jour.
```bash 
git status
git pull origin master
``` 

3. Créer une nouvelle branche avec le nom de votre feature. Nous suivrons le process qui est 1 branche == 1 feature.
```bash 
git checkout -b sexy-feature
```
4. Prenez le temps de développer votre feature. Puis push votre branche sur Github. Ne pas hésitez à commit.
```bash
git add .
git commit -m "sexy feature added"
git push origin sexy-feature
```

5.Ouvrez une pull request sur github. N'oubliez pas de rajouter une description pour expliquer vos changements. </br>

6.Attendez que Diego check la feature et puis merge votre code. Ensuite vous supprimer votre branche
```bash
git checkout master
git pull origin master
git branch -d sexy-feature
```
7. Prenez une pause et soyez fier de vous. Vous êtes les meilleurs. Vous pouvez également envoyé des nudes à Diego :)
   ref : https://dev.to/juni/git-and-github---must-know-commands-to-make-your-first-commit-333c
