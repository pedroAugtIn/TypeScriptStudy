Anotações:

No terminal:
tsc --init
npm init -y

Criamos o arquivo index.html

No terminal:
mkd src
Para criar a pasta src
mkd dist
Para criar a pasta dist

Em nosso html vamos sempre linkar o nosso script ao arquivo .js
Nosso arquivo .js nunca será manuseado, seu conteúdo é gerado através da conversão de nosso arquivo .ts

Para indicar ao VSCode que a conversão deve ser criada em outro diretório, em nosso arquivo index.js (o padrão comercial é ter a pasta src com os dados de nosso typescript e a pasta dist onde teremos nosso javascript), temos que alterar nosso arquivo tsconfig.json:

Lá encontraremos a opção:
// "outDir": "./",     -> configuração inicial

temos que apagar as "//" e indicar a pasta, ficando assim:

"outDir": "./dist",

Após escrevermos algum código em nosso arquivo index.ts, para "transformá-lo" em index.js, no terminal:

tsc src/index.ts             -> muda conforme a posição de seu arquivo .ts


tsc -w 
Roda o terminal no "watch mode" ele acompanha toda mudança em nosso typescript - tudo que eu alterar em meu .ts (e salvar) já será atualizado em tempo real para meu arquivo .js

Em nosso package.json: -> opção para rodar nosso html caso não tenha as extensões e não queira fazer o download.
npm i lite-server