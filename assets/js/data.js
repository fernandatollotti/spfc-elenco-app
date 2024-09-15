// Array de objetos, onde cada objeto representa um jogador com as seguintes propriedades:
// - name: Nome do jogador
// - position: Posição em campo
// - image: URL da imagem do jogador
// - number: Número da camisa
const players = [
  {
    name: 'Igor Vinícius',
    number: '2',
    position: 'Lateral',
    image: 'https://cdn.saopaulofc.net/2023/11/spfc-capa-igor-v.png'
  },
  {
    name: 'Arboleda',
    number: '3',
    position: 'Zagueiro',
    image: 'https://cdn.saopaulofc.net/2023/11/arboleda-v3.png'
  },
  {
    name: 'Welington',
    number: '6',
    position: 'Lateral',
    image: 'https://cdn.saopaulofc.net/2023/11/spfc-capa-welington.png'
  },
  {
    name: 'Welington',
    number: '6',
    position: 'Lateral',
    image: 'https://cdn.saopaulofc.net/2023/11/spfc-capa-welington.png'
  },
  {
    name: 'Lucas Moura',
    number: '7',
    position: 'Atacante',
    image: 'https://cdn.saopaulofc.net/2023/11/spfc-capa-lucas.png'
  },
  {
    name: 'Giuliano Galoppo',
    number: '8',
    position: 'Meia',
    image: 'https://cdn.saopaulofc.net/2023/11/galoppo-v3.png'
  },
  {
    name: 'Jonathan Calleri',
    number: '9',
    position: 'Atacante',
    image: 'https://cdn.saopaulofc.net/2023/11/calleri-v3-1.png'
  },
  {
    name: 'Luciano',
    number: '10',
    position: 'Atacante',
    image: 'https://cdn.saopaulofc.net/2023/11/spfc-capa-luciano.png'
  },
  {
    name: 'Rodrigo Nestor',
    number: '11',
    position: 'Meia',
    image: 'https://cdn.saopaulofc.net/2023/11/spfc-capa-nestor.png'
  },
  {
    name: 'Rafinha',
    number: '13',
    position: 'Lateral',
    image: 'https://cdn.saopaulofc.net/2023/11/spfc-capa-rafinha.png'
  },
  {
    name: 'Michel Araujo',
    number: '15',
    position: 'Meia',
    image: 'https://cdn.saopaulofc.net/2023/11/spfc-capa-m-araujo.png'
  },
  {
    name: 'Luiz Gustavo',
    number: '16',
    position: 'Meia',
    image: 'https://cdn.saopaulofc.net/2024/01/spfc-capa-l-gustavo.png'
  },
  {
    name: 'André Silva',
    number: '17',
    position: 'Atacante',
    image: 'https://cdn.saopaulofc.net/2024/03/andre-silva-2.png'
  },
  {
    name: 'Rodriguinho',
    number: '18',
    position: 'Meia',
    image: 'https://cdn.saopaulofc.net/2023/11/spfc-capa-rodriguinho.png'
  },
  {
    name: 'Marcos Antônio',
    number: '20',
    position: 'Meia',
    image: 'https://cdn.saopaulofc.net/2024/08/img_2695.png'
  },
  {
    name: 'Bobadilla',
    number: '21',
    position: 'Meia',
    image: 'https://cdn.saopaulofc.net/2024/01/bobadilla-v3.png'
  },
  {
    name: 'Rafael',
    number: '23',
    position: 'Goleiro',
    image: 'https://cdn.saopaulofc.net/2023/11/spfc-capa-rafael.png'
  },
  {
    name: 'Alisson',
    number: '25',
    position: 'Meia',
    image: 'https://cdn.saopaulofc.net/2023/11/alisson-v3.png'
  },
  {
    name: 'Liziero',
    number: '26',
    position: 'Meia',
    image: 'https://cdn.saopaulofc.net/2024/08/img_2698.png'
  },
  {
    name: 'Wellington Rato',
    number: '27',
    position: 'Meia',
    image: 'https://cdn.saopaulofc.net/2023/11/spfc-capa-rato.png'
  },
  {
    name: 'Alan Franco',
    number: '28',
    position: 'Zaqueiro',
    image: 'https://cdn.saopaulofc.net/2023/11/alan-franco-v3.png'
  },
  {
    name: 'Pablo Maia',
    number: '29',
    position: 'Meia',
    image: 'https://cdn.saopaulofc.net/2023/11/spfc-capa-pablo-maia.png'
  },
  {
    name: 'Moreira',
    number: '30',
    position: 'Zagueiro',
    image: 'https://cdn.saopaulofc.net/2023/11/spfc-capa-moreira.png'
  },
  {
    name: 'Ferraresi',
    number: '32',
    position: 'Zagueiro',
    image: 'https://cdn.saopaulofc.net/2023/11/ferraresi-v3.png'
  },
  {
    name: 'Erick',
    number: '33',
    position: 'Atacante',
    image: 'https://cdn.saopaulofc.net/2024/01/erick-v3.png'
  },
  {
    name: 'Sabino',
    number: '35',
    position: 'Zagueiro',
    image: 'https://cdn.saopaulofc.net/2024/03/sabino.png'
  },
  {
    name: 'Patrick',
    number: '36',
    position: 'Lateral',
    image: 'https://cdn.saopaulofc.net/2023/11/spfc-capa-patrick.png'
  },
  {
    name: 'William',
    number: '39',
    position: 'Atacante',
    image: 'https://cdn.saopaulofc.net/2023/11/william-v3.png'
  },
  {
    name: 'Matheus Belém',
    number: '44',
    position: 'Zagueiro',
    image: 'https://cdn.saopaulofc.net/2023/11/belem-v3.png'
  },
  {
    name: 'Negrucci',
    number: '46',
    position: 'Meia',
    image: 'https://cdn.saopaulofc.net/2023/11/spfc-capa-negrucci-1.png'
  },
  {
    name: 'Ferreira',
    number: '47',
    position: 'Atacante',
    image: 'https://cdn.saopaulofc.net/2024/01/ferreira-v3.png'
  },
  {
    name: 'Young Moraes',
    number: '50',
    position: 'Goleiro',
    image: 'https://cdn.saopaulofc.net/2023/11/spfc-capa-young-ajustada.png'
  },
  {
    name: 'Jandrei',
    number: '93',
    position: 'Goleiro',
    image: 'https://cdn.saopaulofc.net/2023/11/spfc-capa-jandrei-ajustada.png'
  },
];