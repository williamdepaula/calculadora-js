
### Configuração Inicial

```shell
$ sudo npm install -g karma
```

```shell
$ npm init -y
```

```shell
$ npm install --save-dev jasmine
```

```shell
$ jasmine init
```

```shell
$ npm install --save-dev karma
```

```shell
$ npm install --save-dev karma-jasmine
```

```shell
$ npm install --save-dev karma-firefox-launcher
```

# Configurando o Karma
No navegador aperte  ``TAB`` até chegar na opção firefox.

```shell
$ karma ini
t karma.conf.js

Which testing framework do you want to use ?
Press tab to list possible options. Enter to move to the next question.
> jasmine

Do you want to use Require.js ?
This will add Require.js plugin.
Press tab to list possible options. Enter to move to the next question.
> no
11 05 2020 08:45:45.131:WARN [init]: Failed to install "karma-jasmine". No permissions to write in /usr/local/lib!
  Please install it manually.

Do you want to capture any browsers automatically ?
> Press tab to list possible options. Enter empty string to move to the next question. 
> Firefox
> 
11 05 2020 08:45:52.965:WARN [init]: Failed to install "karma-firefox-launcher". No permissions to write in /usr/local/lib!
  Please install it manually.

What is the location of your source and test files ?
You can use glob patterns, eg. "js/*.js" or "test/**/*Spec.js".
Enter empty string to move to the next question.
> spec/**/*Spec.js
11 05 2020 08:46:19.475:WARN [init]: There is no file matching this pattern.

> 

Should any of the files included by the previous patterns be excluded ?
You can use glob patterns, eg. "**/*.swp".
Enter empty string to move to the next question.
> 

Do you want Karma to watch all the files and run the tests on change ?
Press tab to list possible options.
> yes


Config file generated at "/home/william/Documentos/UFMS/2020/1_semestre/Web_I/calculadora-js/karma.conf.js".
```

```shell
$ npm install --save-dev browserify
```

```shell
$ npm install --save-dev watchify
```

```shell
$ npm install --save-dev karma-browserify
```

## Edite o arquivo karma.conf.js e adicione
```json
 // frameworks to use
// available frameworks: https://npmjs.org/browse/keyword/karma-adapter
frameworks: ['jasmine', 'browserify'],

// list of files / patterns to load in the browser
files: [
    'spec/**/*Spec.js',
    'spec/helpers/**/SpecHelper,js'
],

// preprocess matching files before serving them to the browser
// available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
preprocessors: {
    'spec/**/*Spec.js': ['browserify']
},

```

## Integrando os teste no package.json
```json
"scripts": {
    "test-jasmine": "jasmine",
    "test-dev": "karma start",
    "test": "karma start --single-run"
  },
```

## Rodando os teste em produção
```shell
$ npm run test
```

## Conigurando o Travis
Crie um arquivo ``.travis.yml`` e coloque o seguinte conteúdo.
```json
language: node_js
before_install:
  - "export DISPLAY=:99.0"
  - "sh -e /etc/init.d/xvfb start"
node_js:
  - 'node'
  ```
