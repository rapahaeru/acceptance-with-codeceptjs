# acceptance-with-codeceptjs
Primeiros passos de como configurar um teste de aceitação em javaScript. Utilizando codepceptJS com Phantom e como helper wedriverio


# Instalação

Primeiro criamos a estrutura de pastas do nosso projeto:

/
../test/
..../spec/
..../output/

- Inicie utilizando os pacotes do Node

**Npm init**

- Instale os pacotes necessários :

Codeceptjs : **npm install codeceptjs --save-dev**
Phantomjs (Nosso navegador baseado no WebKit para os testes) : **npm install phantomjs-prebuilt --save-dev**
WebdriverIO : **npm install webdriverio --save-dev**


# Configuração

Após a instalaçãp de todos os pacotes, precisamos configurar o codeceptjs.

execute arquivo binário para iniciar o codeceptjs:

**./node_modules/codeceptjs/bin/codecept.js init**

Em seguida responda o questionário: 

? Where are your tests located? (./*_test.js) : **por padrão escolho a pasta "test/spec/"**
? What helpers do you want to use? (Press <space> to select) : **Utilizaremos WebdriverIo**
? Where should logs, screenshots, and reports to be stored? (./output) : **"test/output/"**
? Would you like to extend I object with custom steps? (Y/n): para o nosso projeto, **N**

Pronto! Agora foi criado JSON chamado codecept. Este arquivo será nossa matriz de configurações.

Aparentemente, ele foi montado com a  seguinte configuração:
<code>
{
  "tests": "/test/spec/",
  "timeout": 10000,
  "output": "./test/output",
  "helpers": {},
  "include": {},
  "bootstrap": false,
  "mocha": {},
  "name": "acceptance-testing-final"
}
</code>

Vamos atualizar as seguintes partes :

de <code>"tests": "/test/spec/",</code> para <code>"tests": "/test/spec/*_spec.js",</code>

Dessa forma qualquer arquivo que tenha "_spec.js" no final do nome, será executado. Assim fica mais fácil para podermos separar determinadas specs em arquivos diferentes.

Adicionar o helper do WebdriverIO :

 <code>
   "helpers": {
    "WebDriverIO": {
      "browser": "chrome",
      "url": "http://localhost/<site-a-ser-testado>"
    }
  },
 </code>

ficando o arquivo completo, assim :

<code>
{
  "tests": "/test/spec/*_spec.js",
  "timeout": 10000,
  "output": "./test/output",
   "helpers": {
    "WebDriverIO": {
      "browser": "chrome",
      "url": "http://localhost/<site-a-ser-testado>"
    }
  },
  "include": {},
  "bootstrap": false,
  "mocha": {},
  "name": "acceptance-testing-final"
}
</code>


Para que o Webdriver IO funcione, será preciso que vocÊ execute ainda no terminal ( de preferencia em uma outra aba), o comando :

**./node_modules/phantomjs-prebuilt/bin/phantomjs --webdriver=4444**

Ele será seu "tail logs" de monitoração.


Agora, basta escrever seu teste como básico de exemplo :

<code>
Feature('My First Test');

	Scenario('test something', (I) => {

});
</code>


No terminao, chame da mesma forma que executamos o init do codeceptjs, mas agora com o comando run. Caso queira ver o passo-a-passo, adicione --steps ao final.

**./node_modules/codeceptjs/bin/codecept.js run --steps**

Ele executará todos os arquivos *_spec.js que estiverem na pasta setada no codecept.json.

=]