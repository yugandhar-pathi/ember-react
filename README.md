# ember-react

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd ember-react`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

##Steps followed

1. Create a new Ember app.
2. npm install React and ReactDOM
3. Install highcharts — npm install highcharts-react-official
4. Install — npm install --save-dev babel-plugin-transform-class-properties babel-plugin-transform-react-jsx
5. Add babel plugins in ember-cli-build.js
6. Update ember-cli-build file to include development and production.
7. Add es lint for react - npm install --save-dev eslint-plugin-babel eslint-plugin-react   babel-eslint
8. Generate vendor shim for react and reactdom
9. Add them to ember-cli-build.js

### Running Tests

* `ember test`
* `ember test --server`

### Linting

* `npm run lint:js`
* `npm run lint:js -- --fix`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
render react components in ember
