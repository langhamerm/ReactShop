## HEROKU REACT APP DEPLOYMENT

* Specify your engines with your current versions in your package.json like so:

    For NPM:

            "engines": {
            "node": "10.16.3",
            "npm": "6.9.0"
                        }

        or

    For Yarn:
            "engines": {
            "yarn": "10.16.3",
            "npm": "1.19.1"
                        }

* npm install serve --s

* Change the start scripts in your package.json to:

            "scripts": {
                "dev": "react-scripts start",
                "start": "serve -s build",
                "build": "react-scripts build",
                "test": "react-scripts test --env=jsdom",
                "eject": "react-scripts eject",
                "heroku-postbuild": "npm run build"
                        }

* cd yourappname

* heroku login

* git init

* git add .

* git commit -m "Commit message here"

* heroku create (copy the link after this commands run that ends in .git)

* git remote add heroku theLinkYouJustCopied.git

* git push heroku master

* heroku open