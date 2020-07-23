# AngularJS CustomElements integration demo

Integration demo of Custom Elements (Web Components) into an AngularJS web app using the directive [robdodson.ce-bind](https://github.com/robdodson/angular-custom-elements) as an intermediary of communication between the parties.

The code on the [official angular.js homepage](https://angularjs.org/) was used for the demo.

The *robdodson.ce-bind* library has been adapted to be called as an ES module.

No libraries were used to create the Custom Elements. The legacy version (from angularjs official site) and the ES6 evolution can be run directly by opening the HTML files in the **01-legacy** and **02-evolution-es6** directories.
For the TypeScript version into the directory **03-evolution-ts** you need to run the build script.

By installing dependencies, you can run scripts to start an **HTTP server** for each of the three directories.

```sh
npm install
```

```sh
npm run serve:legacy
```

```sh
npm run serve:evolution-es6
```

```sh
npm run serve:evolution-ts
```
