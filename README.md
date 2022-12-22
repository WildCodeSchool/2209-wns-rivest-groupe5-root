# WILDCARBON

Projet de groupe pour la WildCodeSchool sur l'année 2022/2023.

## Membres de l'équipe

- [Salvador Vanessa](https://github.com/vanessacode)
- [Razafinjatovo Joel](https://github.com/Razafinjatovo-dev)
- [Delon Quentin](https://github.com/QuentD36)
- [Witz Kevin](https://github.com/witzkvn)

## Mise en place du projet en local

On doit aboutir à la structure de projet suivante :

```
wildcarbon
|__front
|__back
|__testrunner
|__(tous les fichiers docker compose)
```

Ce repo git gère à la fois le projet testrunner et les fichiers docker compose à la racine.
Un repo séparé gère le front, et encore un autre le back.

### Récupérer le projet sur votre machine

- Créer un dossier "wildcarbon"
- ```bash
  cd wildcarbon
  ```

- ```bash
  git clone https://github.com/WildCodeSchool/2209-wns-rivest-groupe5-root.git .
  ```
- Dans ce dossier wildcarbon, créer un dossier "front" et un dossier "back"
- ```bash
  mkdir front
  ```
- ```bash
  mkdir back
  ```
- On va alors récupérer le projet front dans le dossier front, et le projet back dans le dossier back
- ```bash
  cd front
  ```
- ```bash
  git clone https://github.com/WildCodeSchool/2209-wns-rivest-groupe5-front.git .
  ```
- Il faut également créer un fichier `.env` à la racine du projet. Demander à un membre du projet de vous donner le contenu de ce fichier, et le créer dans votre projet front.
- ```bash
    cd ../back
  ```
- ```bash
  git clone https://github.com/WildCodeSchool/2209-wns-rivest-groupe5-back.git .
  ```
- Il faut également créer un fichier `.env` à la racine du projet. Demander à un membre du projet de vous donner le contenu de ce fichier, et le créer dans votre projet back.
- On retourne à la racine du projet, au niveau des fichiers docker-compose et du package.json qui contient les scripts de lancement :

- ```bash
  cd ..
  ```

## Lancer le projet

Il est nécessaire de se placer à la racine du projet, au niveau des docker-compose et du package.json qui contient les scripts à executer.

### Lancer le projet de tests d'intégrations

```bash
npm run integration-test
```

### Lancer le projet de tests E2E

```bash
npm run e2e-test
```

### Lancer les tests unitaires front

```bash
npm run front-unit-test
```

### Lancer les tests unitaires back (PAS ENCORE IMPLEMENTE)

```bash
npm run back-unit-test
```

### Lancer le projet en DEV

```bash
npm run start:dev
```

### Lancer le projet en PROD

```bash
npm run start:prod
```

## Liens utiles

Une fois le projet lancé, voici les liens vers les différents services implémentés :

- frontend - [http://localhost:3000](http://localhost:3000)
- Backend Apollo Server - [http://localhost:5050](http://localhost:5050)
- Adminer (gestion BDD) - [http://localhost:8080](http://localhost:8080)
- Mailhog (mail catcher DEV et TESTS) - [http://localhost:8025](http://localhost:8025)

## Workflow de développement

- La branche par défaut de chaque projet est "dev"
- La branche principale de chaque projet est "main"
- Lors du développement d'une fonctionnalité, on préfixe le nom de la branche par le code du ticket Jira du backlog

Exemple : ticket WCS-20 Création page login front
Ce ticket représente une tâche sur le projet front

Dans le projet front, on se place sur la branche "dev", puis :

```bash
git checkout -b WCS-20_page_login
```

De cette façon, on reconnait directement le ticket associé à cette branche afin d'avoir plus de détails sur ce que doit apporter cette branche.

- A la fin du dev, on pousse la branche

```bash
git push --set-upstream origin WCS-20_page_login
```

(taper juste git push, le terminal affichera la commande ci-dessus)

- Sur github, ouvrir une Pull Request de cette branche vers dev

- A la fin d'un sprint, on test que tout fonctionne sur les branche dev des différents projets, puis on merge le code de chaque branche dev sur les branche main associées, en passant par une pull request sur Github.
