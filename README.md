# Cypress Demo
install node js

create a folder

open the local folder in vscode

go to terminal->npm init  -> it will create package.json file with the inputs specified by the user at the terminal

install cypress tool with npm install cypress --save -dev

try opening cypress via npx cypress open

it will add following files/folders by default ->

	cypress.config.js -> The cypress config file for E2E testing
	
	cypress\support\e2e.js->The support file that is bundled and loaded before each E2E specified

	cypress\support\commands.js->A support file that is useful for creating custom cypress commands and overwriting existing ones
	
    cypress\fixtures\example.json-> Added an example fixtures file/folder

