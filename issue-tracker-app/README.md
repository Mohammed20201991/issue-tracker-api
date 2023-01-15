# IssueTrackerApp
We will create the issue tracker application in a client-side framework. We will install the framework, and create a clickable HTML mockup for the basic pages. We will meet components as well.

First we need to Install and start a new Angular application 
```
> node -v
v10.11.0
> npm -v
6.4.1
```
```
# create a new application
npx -p @angular/cli ng new IssueTrackerApp
# Routing: yes
# Stylesheet format: CSS
## go into the app directory
cd IssueTrackerApp
```
Start app : 
```
npm start
```
Install Twitter Bootstrap for CSS styling and components 
```

```
Usage : 
After installation (https://cli.angular.io/)the Angular command line interface (Links to an external site.) (Angular CLI) can be used with the `ng command`. Since it is installed locally to the project, it is configured to be used through `npm` scripts, so we can call it with `npx ng` as well. In the following we will use this longer but more accessible version.

The available ng commands are listed after calling npx ng help.

The installed application is a working starter application, and we can start it with `npx ng serve` or `npm start` (which is an alias for `ng serve`). A development server starts, and we can access our new application on http://localhost:4200  in the browser. From now the development environment watches the file changes, and the appropriate codes will be compiled and refreshed in the browser.

We can use the Angular `CLI` to generate different types of code for us with the npx ng generate <type> <name> command.

Create a navigation bar at the top of the page 
Add content to the page and organize them into components 
Introduce routing, and put the components onto different pages under different endpoints 

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests 

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
