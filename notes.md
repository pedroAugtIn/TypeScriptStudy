TypeScript: https://www.typescriptlang.org/
Objetivo: escrever JavaScript de forma mais precisa - Type Safety.
Por exemplo:
2 + "2" retorna 22. Isso não deveria ser "permitido".
O que typescript faz por nós?
- Static Checking: o typescript verifica seu código enquanto você o escreve, destacando erros e fornecendo sugestões diretamente no editor de código;

Você escreve seu código em typescript e o converte em javascript.
It's a development tool. It helps you write better codes.

Ao desenvolver um código em .ts, através do comando tsc nomedoarquivo em nosso terminal, será criado nosso arquivo .js


Types: number, string, boolean, null, undefined, void, object, array, tuples, any, never ...

Situations: A function accepts 2 numbers; a function returns a string; 

Syntax: let variableName: type = value
Ex: 
let userId: number = 3344455
Contudo, precisamos entender que typescript é esperto. A syntax acima é correta, mas é redundante, uma vez que o typescript já identifica automaticamente o type à partir daquilo que é atribuído a ele.
Logo, o correto seria utilizarmos:
let userId = 3344455

Da mesma forma, importante destacar que: 
let userId: number = 3344455 -> esta é uma syntax typescript. Quando convertermos ela em javascript ela não será utilizada, sendo substituída por : let userId = 3344455.

any keyword: é um type que é atribuído pelo typescript quando ele não consegue identificar o conteúdo que será utilizado naquela variável no futuro. Não é muito recomendado seu uso e muitas vezes é utilizado apenas para "escapar" do real objetivo do typescript.
Basicamente você não quer usar o type "any" em typescript, apenas em casos muito específicos.
https://www.typescriptlang.org/docs/handbook/2/everyday-types.html


Creating a new type: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
Ex:
type User = {
    name: string;
    email: string;
    isActive: boolean
}



