# ember-react

## Prerequisites

You will need the following things properly installed on your computer.

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/) (with npm)
- [Ember CLI](https://ember-cli.com/)
- [Google Chrome](https://google.com/chrome/)

## Installation

- `git clone <repository-url>` this repository
- `cd ember-react`
- `npm install`

## Running / Development

- `ember serve`
- Visit your app at [http://localhost:4200](http://localhost:4200).
- Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

## 6 steps to render React components in ember

1. Create a new Ember app, of course you need one to integrate React component.

```
ember new ember-test
```

2. To render React components,of course you need React and ReactDOM. Go ahead and install.

```
npm install --save react react-dom
```

3. Tell Ember to include both of this libraries in the build. Add below lines of code in your ember-cli-build.js file (check this project for reference).

```
app.import({
  development: 'node_modules/react/umd/react.development.js',
  production: 'node_modules/react/umd/react.production.min.js'
});

app.import({
  development: 'node_modules/react-dom/umd/react-dom.development.js',
  production: 'node_modules/react-dom/umd/react-dom.production.min.js'
});
```

4. Go to your components folder and add one sample react component (say sample-react.jsx)

```
import React from "react";

class Samplereact extends React.Component {
  render() {
    return (
      <div>
        <p> Sample Component from React </p>
      </div>
    );
  }
}
```

5. The moment ember sees JSX code it will warn you --- Dang! Looks like a Build Error.
   Ahh !! some foreign lang ??
   Let's teach Ember to understand this JSX code.

```
npm install --save-dev babel-plugin-transform-class-properties babel-plugin-transform-react-jsx
```

After you install this configure your app to use them.

```
let app = new EmberApp(defaults, {
  // Add options here
  babel: {
      plugins: [
      'transform-class-properties',
      'transform-react-jsx',
      ]
    }
});
```

6. So we are all set, you will observe that your app will run fine now but your eslint will complain about jsx code. Let's resolve that as well.

```
npm install --save-dev eslint-plugin-babel eslint-plugin-react babel-eslint
```

Once this is done make following changes to your .eslintrc.js file.

```
  + parser: 'babel-eslint',
    parserOptions: {
    ecmaVersion: 2017,
  -    sourceType: 'module'
  +    sourceType: 'module',
  +    ecmaFeatures: {
  +      jsx: true
  +    }
    },
    plugins: [
  -    'ember'
  +    'babel',
  +    'ember',
  +    'react',
    ],
   rules: {
  +    'react/jsx-uses-react': 'error',
  +    'react/jsx-uses-vars': 'error',
   },
```

6. You are all set now to use React component. But one last step .. the way you inject components into ember is different from React. Ember uses {{sample-comp}} where as React uses `<SampleComp>`.
   To fill this gap, let's use ember-cli-react

```
npm install ember-cli-react
```

After you do this go to your app/resolver.js file and change contents to

```
import Resolver from 'ember-cli-react/resolver';

export default Resolver;

```

Now you are all set, just go to application.hbs file and write ...{{sample-react}} You will see the react component in your Ember app!!

## Follow below steps to add React Highchart to your ember app.

1. Install highcharts

```
  npm install highcharts-react-official
```

2. Update ember-cli-build file to include highcharts.

## Running Tests

- `ember test`
- `ember test --server`

### Linting

- `npm run lint:js`
- `npm run lint:js -- --fix`

### Building

- `ember build` (development)
- `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

- [ember.js](https://emberjs.com/)
- [ember-cli](https://ember-cli.com/)
- Development Browser Extensions
  - [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  - [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
    render react components in ember

```

```
