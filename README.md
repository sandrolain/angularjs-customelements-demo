# AngularJS CustomElements integration demo

Integration demo of Custom Elements (Web Components) into an AngularJS web app using the directive [robdodson.ce-bind](https://github.com/robdodson/angular-custom-elements) as an intermediary of communication between the parties.

The final version completely drops angularjs in favor of **lit-element** and **lit-html**.

The code of the ToDo list example available on the [official angular.js homepage](https://angularjs.org/) was used for the demo.

The *robdodson.ce-bind* library has been adapted to be called as an ES module.

No libraries were used to create the Custom Elements. The legacy version (from angularjs official site) and the ES6 evolution can be run directly by opening the HTML files in the **01-legacy** and **02-evolution-es6** directories.  
For the TypeScript versions into the directory **03-evolution-ts** and **04-evolution-lit** (lit-element based) you need to run the build script. The build is automatically executed with the `serve:*` scripts.

By installing dependencies …

```sh
npm install
```

… you can run scripts to start an **HTTP server** for each of the four directories.


```sh
npm run serve:legacy
```

```sh
npm run serve:evolution-es6
```

```sh
npm run serve:evolution-ts
```

```sh
npm run serve:evolution-lit
```
