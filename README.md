# AngularJS CustomElements integration demo

Integration demo of Custom Elements (Web Components) into a AngularJS webapp using the directive [robdodson.ce-bind](https://github.com/robdodson/angular-custom-elements) as an intermediary of communication between the parties.

The code on the [official angular.js homepage](https://angularjs.org/) was used for the demo.

The *robdodson.ce-bind* library has been adapted to be called as an ES module.

No libraries were used to create the Custom Elements, nor code bundling systems. It can be run directly by opening the html files in the **legacy** and **evolution** directories.

By installing dependencies, you can run scripts to start an **http-server** for each of the two directories.

```sh
npm install
```

```sh
npm run serve:legacy
```

```sh
npm run serve:evolution
```
