# WILDCARBON

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
  cd front
  git clone https://github.com/WildCodeSchool/2209-wns-rivest-groupe5-front.git .
  ```
- ```bash
  cd ../back
  git clone https://github.com/WildCodeSchool/2209-wns-rivest-groupe5-back.git .
  ```
- On retourne à la racine du projet, au niveau des fichiers docker-compose

```bash
  cd ..
```

## Lancer le projet

### Lancer le projet de tests d'intégrations

```bash
docker compose -f docker-compose.integration.test.yml up --build
```

### Lancer le projet en DEV

```bash
docker compose -f docker-compose.dev.yml up --build
```

### Lancer le projet en PROD

```bash
docker compose up --build
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
