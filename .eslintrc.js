module.exports = {
  root: true,
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true
    }
  },
  plugins: ["ember", "babel", "ember", "react"],
  extends: ["eslint:recommended", "plugin:ember/recommended"],
  env: {
    browser: true
  },
  rules: {
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "no-console": "off"
  },
  overrides: [
    // node files
    {
      files: [
        "ember-cli-build.js",
        "testem.js",
        "blueprints/*/index.js",
        "config/**/*.js",
        "lib/*/index.js"
      ],
      parserOptions: {
        sourceType: "script",
        ecmaVersion: 2015
      },
      env: {
        browser: false,
        node: true
      }
    }
  ]
};
