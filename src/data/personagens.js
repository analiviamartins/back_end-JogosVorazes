//array de objetos. Cada objeto representa um personagem da trilogia Jogos Vorazes.
const personagens = [
    {
        nome: 'Katniss Everdeen',
        idade: 17,
        distrito: 'Distrito 12',
        genero: 'Feminino',
        profissao: 'Rebelde da Rebelião ',
        dano: 100,
        defesa: 100,
        descricao: 'Katniss Everdeen é a personagem principal e a narradora da trilogia Jogos Vorazes. Depois que sua irmã mais nova, Prim, foi selecionada para participar dos 74º Jogos Vorazes, Katniss se voluntariou para pegar seu lugar como a tributo feminina do Distrito 12.',
        imagem: 'https://static.wikia.nocookie.net/thehungergames/images/d/da/KatnissD13Portrait.jpg/revision/latest?cb=20190306042858',
    },
    {
        nome: 'Peeta Mellark',
        idade: 18,
        distrito: 'Distrito 12',
        genero: 'Masculino',
        profissao: 'Padeiro',
        dano: 90,
        defesa: 85,
        descricao: 'Peeta Mellark é um personagem fictício e um dos protagonistas da trilogia trilogia Jogos Vorazes por Suzanne Collins. Ele é o tributo masculino do distrito 12, que compete ao lado de Katniss Everdeen na 74ª Edição dos Jogos Vorazes. ',
        imagem: 'https://static.wikia.nocookie.net/hunger-gamepedia/images/c/ca/Peeta.png/revision/latest?cb=20190831022031',
    },
    {
        nome: 'Gale Hawthorne',
        idade: 20,
        distrito: 'Distrito 12',
        genero: 'Masculino',
        profissao: 'Caçador',
        dano: 85,
        defesa: 95,
        descricao: 'Gale Hawthorne é o melhor amigo de Katniss e parceiro de caça, um dos personagens mais importantes da série. Ele é muito devotado à sua família e à Katniss e é forçado a assistir quando ela se voluntaria para o 74º Jogos Vorazes no lugar de sua irmã e finge um romance como Peeta Mellark para se manter viva.',
        imagem: 'https://static.wikia.nocookie.net/thehungergames/images/d/d6/GaleD13Portrait.jpg/revision/latest?cb=20190306042858',
    },
    {
        nome: 'Haymitch Abernathy',
        idade: 42,
        distrito: 'distrito 12',
        genero: 'Masculino',
        profissao: 'Mnetor',
        dano: 70,
        defesa: 80,
        descricao: 'Haymitch Abernathy era o único sobrevivente dos Jogos Vorazes do distrito 12, tendo sobrevivido a 50º edição dos Jogos Vorazes, segundo Massacre Quaternário, antes de Katniss Everdeen e Peeta Mellark vencerem o 74º Jogos Vorazes sobre a sua orientação.',
        imagem: 'https://static.wikia.nocookie.net/34th-hunger-games/images/0/02/Unknown-1531954541.jpeg/revision/latest?cb=20180718225541',
    },
    {
        nome: 'Cinna',
        idade: 30,
        distrito: 'Capital',
        genero: 'Masculino',
        profissao: 'Estilista',
        dano: 60,
        defesa: 30,
        descricao: 'Cinna era o estilista de Katniss durante a sua campanha nos 74º e 75º dos Jogos Vorazes.',
        imagem: 'https://static.wikia.nocookie.net/jogosvorazes/images/b/bd/CinnaCF001.png/revision/latest?cb=20141118195334&path-prefix=pt-br',
    },
    {
        nome: 'Effie Trinket',
        idade: 30,
        distrito: 'Capital',
        genero: 'Feminino',
        profissao: 'Escolta',
        dano: 40,
        defesa: 41,
        descricao: 'Effie Trinket é a escolta dos tributos do Distrito 12, incluindo Katniss Everdeen e Peeta Mellark.',
        imagem: 'https://static.wikia.nocookie.net/p__/images/9/9f/EffieTrinket.jpeg/revision/latest?cb=20230513032031&path-prefix=protagonist',
    },
    {
        nome: 'Primrose Everdeen',
        idade: 13,
        distrito: 'distrito 12',
        genero: 'Feminino',
        profissao: 'Médica',
        dano: 67,
        defesa: 80,
        descricao: 'Primrose "Prim" Everdeen era a irmã mais nova de Katniss Everdeen. ',
        imagem: 'https://static.wikia.nocookie.net/thehungergames/images/9/93/PrimroseD13Portrait.jpg/revision/latest?cb=20190306042858',
    },
    {
        nome: 'Presidente Snow',
        idade: 84,
        distrito: 'Capital',
        genero: 'Masculino',
        profissao: 'Presidente',
        dano: 50,
        defesa: 60,
        descricao: 'Snow foi um presidente tirânico de Panem. Em sua juventude era conhecido por seu apelido "Coryo", dado originalmente por sua prima Tigris.',
        imagem: 'https://static.wikia.nocookie.net/jogosvorazes/images/4/48/Snow-pro.jpg/revision/latest?cb=20140531011838&path-prefix=pt-br',
    },
    {
        nome: 'Plutarch Heavensbee',
        idade: 30,
        distrito: 'Capital',
        genero: 'Masculino',
        profissao: 'Idealizador',
        dano: 50,
        defesa: 30,
        descricao: 'Plutarch Heavensbee é o principal idealizador Jogos Vorazes em Em Chamas, no lugar de Seneca Crane.',
        imagem: 'https://static.wikia.nocookie.net/jogosvorazes/images/f/fb/Plutarch_Heavensbee.png/revision/latest?cb=20141118190657&path-prefix=pt-br',
    },
    {
        nome: 'Alma Coin',
        idade: 50,
        distrito: 'Distrito 12',
        genero: 'Feminino',
        profissao: 'Presidente',
        dano: 60,
        defesa: 30,
        descricao: 'Alma Coin foi a presidente do Distrito 12 e a líder da rebelião contra A Capital pelas pessoas dos distritos de Panem.',
        imagem: 'https://static.wikia.nocookie.net/jogosvorazes/images/1/12/Almacoin.png/revision/latest/scale-to-width-down/270?cb=20160930190817&path-prefix=pt-br',
    },
    {
        nome: 'Marvel',
        idade: 18,
        distrito: 'Distrito 1',
        genero: 'Masculino',
        profissao: 'Tributo',
        dano: 75,
        defesa: 88,
        descricao: 'Marvel é um antagonista secundário em Jogos Vorazes. Ele era o tributo do Distrito 1 nos 74º Jogos Vorazes, e membro do grupo dos Tributos Carreiristas.',
        imagem: 'https://static.wikia.nocookie.net/thehungergames/images/6/6d/MarvelNormal.png/revision/latest/thumbnail/width/360/height/450?cb=20140318205457',
    },
    {
        nome: 'Glimmer',
        idade: 17,
        distrito: 'Distrito 1',
        genero: 'Feminino',
        profissao: 'Tributo',
        dano: 44,
        defesa: 20,
        descricao: 'Glimmer era um tributo carreirista do Distrito 1 nos 74º Jogos Vorazes.',
        imagem: 'https://static.wikia.nocookie.net/jogosvorazes/images/f/fc/Tribute_D1_female.jpg/revision/latest?cb=20141120185110&path-prefix=pt-br',
    },
    {
        nome: 'Cato',
        idade: 18,
        distrito: 'Distrito 2',
        genero: 'Masculino',
        profissao: 'Tributo',
        dano: 30,
        defesa: 40,
        descricao: 'Cato é o principal antagonista em Jogos Vorazes. Ele é o tributo homem do Distrito 2 e o líder de Carreira nos 74º Jogos Vorazes.',
        imagem: 'https://pm1.aminoapps.com/6519/73e04411dd2fdd2a9a70f48cb839ee775fd28ba0_hq.jpg',
    },
    {
        nome: 'Clove',
        idade: 15,
        distrito: 'Distrito 2',
        genero: 'Feminino',
        profissao: 'Tributo',
        dano: 45,
        defesa: 25,
        descricao: 'Tributo feminino do distrito dois . Clove arremessa facas com a maior facilidade',
        imagem: 'https://static.wikia.nocookie.net/jogosvorazes/images/1/12/Almacoin.png/revision/latest/scale-to-width-down/270?cb=20160930190817&path-prefix=pt-br',
    },
    {
        nome: 'Foxface',
        idade: 15,
        distrito: 'Distrito 5',
        genero: 'Feminino',
        profissao: 'Tributo',
        dano: 30,
        defesa: 40,
        descricao: 'Foxface era o tributo feminino do Distrito 5 no 74º Jogos Vorazes. Foxface (rosto de raposa) era o apelido que Katniss deu a ela. O nome dela de verdade é Finch.',
        imagem: 'https://static.wikia.nocookie.net/thehungergames/images/a/ad/Tribute_D5_Female_copy.jpg/revision/latest?cb=20120214004426',
    },
    {
        nome: 'Thresh',
        idade: 18,
        distrito: 'Distrito 11',
        genero: 'Masculino',
        profissao: 'Tributo',
        dano: 25,
        defesa: 30,
        descricao: 'Thresh era o tributo do Distrito 11 no 74º Jogos Vorazes. Forte e esperto, ele era uma séria ameaça aos outros tributos participando dos jogos, assim como Cato.',
        imagem: 'https://static.wikia.nocookie.net/jogosvorazes/images/a/a2/ThreshNormal.png/revision/latest?cb=20141118194445&path-prefix=pt-br',
    },
    {
        nome: 'Rue',
        idade: 12,
        distrito: 'Distrito 11',
        genero: 'Feminino',
        profissao: 'Tributo',
        dano: 50,
        defesa: 40,
        descricao: 'Rue era o tributo de 12 anos do Distrito 11, que foi selecionada a participar na 74º Edição dos Jogos Vorazes.',
        imagem: 'https://static.wikia.nocookie.net/jogosvorazes/images/7/7e/Rue_tribute_portrait.jpg/revision/latest?cb=20141118183053&path-prefix=pt-br',
    },
    {
        nome: 'Gloss',
        idade: 30,
        distrito: 'Distrito 1',
        genero: 'Masculino',
        profissao: 'Tributo',
        dano: 40,
        defesa: 50,
        descricao: 'Gloss era o tributo masculino do Distrito 1 que participou do 75º Jogos Vorazes. Ele ganhou o 63º Jogos Vorazes e tambem é irmão de Cashmere.',
        imagem: 'https://static.wikia.nocookie.net/thehungergames/images/5/5d/Quarter_quell_gloss.jpg/revision/latest/scale-to-width-down/270?cb=20140218190901',
    },
    {
        nome: 'Cashmere',
        idade: 27,
        distrito: 'Distrito 1',
        genero: 'Feminino',
        profissao: 'Tributo',
        dano: 50,
        defesa: 25,
        descricao: 'Cashmere era o tributo feminino do Distrito 1 que participou dos 75º Jogos Vorazes do Terceiro Massacre Quaternário. Ela foi a vencedora da 64° Jogos Vorazes.',
        imagem: 'https://static.wikia.nocookie.net/thehungergames/images/9/92/Quarter_quell_cashmere.jpg/revision/latest/scale-to-width-down/270?cb=20140218190812',
    },
    {
        nome: 'Brutus',
        idade: 15,
        distrito: 'Distrito 2',
        genero: 'Masculino',
        profissao: 'Tributo',
        dano: 60,
        defesa: 30,
        descricao: 'Brutus foi um tributo Carreirista do Distrito 2. Ele também foi o vencedor de um Jogos Vorazes (evento) desconhecido.',
        imagem: 'https://static.wikia.nocookie.net/thehungergames/images/f/fb/Quarter_quell_brutus.jpg/revision/latest?cb=20140218190941',
    },
    {
        nome: 'Enobaria',
        idade: 18,
        distrito: 'Distrito 2',
        genero: 'Feminino',
        profissao: 'Tributo',
        dano: 70,
        defesa: 50,
        descricao: 'Enobaria é a Vitoriosa da 62ª edição dos Jogos Vorazes. Ela também foi a representante feminina do seu distrito na 75ª edição dos Jogos Vorazes ou Terceiro Massacre Quartenário.',
        imagem: 'https://pbs.twimg.com/media/E8ym65hXEAQADuS.jpg',
    },
    {
        nome: 'Beetee Latier',
        idade: 30,
        distrito: 'Distrito 3',
        genero: 'Masculino',
        profissao: 'Tributo',
        dano: 70,
        defesa: 55,
        descricao: 'Beetee Latier é o tributo do Distrito 3, que participou do 75º Jogos Vorazes. Ele é um dos 6 sobreviventes do terceiro Massacre Quaternário.',
        imagem: 'https://static.wikia.nocookie.net/thehungergames/images/f/fb/Quarter_quell_brutus.jpg/revision/latest?cb=20140218190941',
    },
    {
        nome: 'Wiress',
        idade: 40,
        distrito: 'Distrito 3',
        genero: 'Feminino',
        profissao: 'Tributo',
        dano: 40,
        defesa: 60,
        descricao: 'Wiress era um tributo do Distrito 3. Ela era conhecida por ganhar uma edição dos Jogos Vorazes não-especificada e então participou do 75º Jogos Vorazes.',
        imagem: 'https://static.wikia.nocookie.net/thehungergames/images/3/33/Hunger-games-catching-fire-meet-652404-17-wiress.jpeg/revision/latest?cb=20140218191241',
    },
    {
        nome: 'Finnick Odair',
        idade: 25,
        distrito: 'Distrito 4',
        genero: 'Masculino',
        profissao: 'Tributo',
        dano: 70,
        defesa: 80,
        descricao: 'Finnick Odair era um dos vencedores do Distrito 4. Ele era conhecido por ganhar a 65º Edição dos Jogos Vorazes',
        imagem: 'https://lorena.r7.com/public/assets/img/postagens/post_49289.jpg',
    },
    {
        nome: 'Johanna Mason',
        idade: 21,
        distrito: 'Distrito 7',
        genero: 'Feminino',
        profissao: 'Tributo',
        dano: 40,
        defesa: 55,
        descricao: 'Johanna Mason é a vencedora da 71º Edição dos Jogos Vorazes do Distrito 7. Ela foi sorteada novamente para o Terceiro Massacre Quaternário. ',
        imagem: 'https://p2.trrsf.com/image/fget/cf/1200/1200/middle/images.terra.com/2023/03/01/2135516932-jena-malone-hunger-games.jpg',
    },
    {
        nome: 'Johanna Mason',
        idade: 21,
        distrito: 'Distrito 7',
        genero: 'Feminino',
        profissao: 'Tributo',
        dano: 40,
        defesa: 55,
        descricao: 'Johanna Mason é a vencedora da 71º Edição dos Jogos Vorazes do Distrito 7. Ela foi sorteada novamente para o Terceiro Massacre Quaternário. ',
        imagem: 'https://p2.trrsf.com/image/fget/cf/1200/1200/middle/images.terra.com/2023/03/01/2135516932-jena-malone-hunger-games.jpg',
    },
    {
        nome: 'Johanna Mason',
        idade: 21,
        distrito: 'Distrito 7',
        genero: 'Feminino',
        profissao: 'Tributo',
        dano: 40,
        defesa: 55,
        descricao: 'Johanna Mason é a vencedora da 71º Edição dos Jogos Vorazes do Distrito 7. Ela foi sorteada novamente para o Terceiro Massacre Quaternário. ',
        imagem: 'https://p2.trrsf.com/image/fget/cf/1200/1200/middle/images.terra.com/2023/03/01/2135516932-jena-malone-hunger-games.jpg',
    },
    {
        nome: 'Annie Cresta',
        idade: 22,
        distrito: 'Distrito 4',
        genero: 'Feminino',
        profissao: 'Mentor',
        dano: 20,
        defesa: 25,
        descricao: 'Annie Cresta Odair  é uma vencedora do Distrito 4. Annie é conhecida por ganhar a 70ª edição dos Jogos Vorazes. Ela é a esposa do falecido Finnick Odair e mãe de seu filho',
        imagem: 'https://pm1.aminoapps.com/7854/dac36f5cec80f9bd75ced8cd20cce77b9707e096r1-600-600v2_00.jpg',
    },
];

export default personagens;