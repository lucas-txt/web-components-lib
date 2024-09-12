# Block components

## Descição

A biblioteca conta com diferentes widgets para atender multiplas funcionalidades. Todos seguem as mesmas regras de designe e são semelhantes na sua estilização, para que combinem.

Demonstração: https://web-components-lib-kappa.vercel.app/

## Dcocumentação


### `<text-block></text-block>`
Um bloco com botão para viralo e mostrar uma derterminadafrase frase. 

- Parametros:
  - `arrow-size="40"` define a porcentagem de espaço que o bloco de seta ocupa, 40% nesse cado.
  - `row-reserve="true"` faz com que o bloco de seta fique a esquerda.
  - `speed-animation=".2s"` define a velocidade da animação do bloco, `.1s` é a padrão.
  - `height="100px"` e `height="300px"` definem o tamanho do bloco, esses são os valores padrão.

- Subtags:
  - `<face-one color="blue">another content to face one</face-one>`
  - `<face-two color="blue">another content to face one</face-two>`
  - `<face-three color="blue">another content to face one</face-three>`
  - `<face-four color="blue">another content to face one</face-four>`
 

### `<star-blocks></star-blocks>`
Uma pontuação de estrelas onde cada estrela é um bloco.

- Parametros: 
  - `fixed="2"` define a estrela que esta selecionada.

  
