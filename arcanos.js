/* ============================================================
   Base de dados dos 22 Arcanos Maiores do Tarô
   ============================================================ */

const ARCANOS = [
    {
        numero: 1,
        nome: 'O Mago',
        simbolo: '🎩',
        arquetipo: 'O Criador • O Comunicador',
        cor: '#e11d48',
        corSuave: 'rgba(225, 29, 72, .35)',
        descricao: 'O Mago é o arcano da manifestação. Você nasceu com o poder de transformar ideias em realidade — basta canalizar sua vontade. Sua palavra tem peso: aquilo que você diz tende a se materializar.',
        pontosFortes: [
            'Comunicação poderosa: convence, cria e transforma com a palavra',
            'Iniciativa e capacidade de começar do zero',
            'Versatilidade — aprende rápido e se adapta a qualquer área',
            'Carisma que atrai oportunidades naturalmente',
            'Visão clara do que quer e como conseguir'
        ],
        pontosFracos: [
            'Manipulação para conseguir o que quer',
            'Dispersão: quer fazer tudo ao mesmo tempo',
            'Egocentrismo e necessidade de aplausos',
            'Superficialidade em projetos longos',
            'Tendência a prometer mais do que cumpre'
        ],
        missao: 'Usar seu poder de criação e comunicação para inspirar, ensinar e transformar a vida das pessoas ao seu redor.',
        conselho: 'Foque em uma coisa de cada vez. Sua palavra é mágica — use-a com responsabilidade.'
    },
    {
        numero: 2,
        nome: 'A Sacerdotisa',
        simbolo: '🌙',
        arquetipo: 'A Intuitiva • A Guardiã do Saber',
        cor: '#6366f1',
        corSuave: 'rgba(99, 102, 241, .35)',
        descricao: 'A Sacerdotisa é o arcano da intuição e dos mistérios. Você tem acesso a um saber que não vem dos livros, mas da alma. Sua força está no silêncio, na observação e na sabedoria interior.',
        pontosFortes: [
            'Intuição afiada: sabe as coisas antes de acontecerem',
            'Capacidade de escutar o que não é dito',
            'Sabedoria profunda sobre a natureza humana',
            'Discrição e confiabilidade — guarda segredos',
            'Fé inabalável no invisível e no mistério'
        ],
        pontosFracos: [
            'Isolamento excessivo e fuga do mundo real',
            'Passividade: espera em vez de agir',
            'Frieza emocional aparente que afasta pessoas',
            'Dificuldade em pedir ajuda',
            'Tendência a se perder em fantasias espirituais'
        ],
        missao: 'Ser a ponte entre o visível e o invisível — trazer sabedoria para quem precisa enxergar além.',
        conselho: 'Confie mais na sua intuição do que nos ruídos externos. O silêncio também é resposta.'
    },
    {
        numero: 3,
        nome: 'A Imperatriz',
        simbolo: '👑',
        arquetipo: 'A Criadora • A Mãe Fértil',
        cor: '#16a34a',
        corSuave: 'rgba(22, 163, 74, .35)',
        descricao: 'A Imperatriz é o arcano da criação, do acolhimento e da abundância. Você veio ao mundo para nutrir, criar e fazer florescer — pessoas, projetos e ideias. Sua energia é fértil e generosa.',
        pontosFortes: [
            'Criatividade e fertilidade em tudo o que toca',
            'Acolhimento natural — pessoas se sentem seguras perto de você',
            'Sensualidade e conexão com o corpo e a natureza',
            'Generosidade sem esperar retorno',
            'Capacidade de fazer projetos crescerem do zero'
        ],
        pontosFracos: [
            'Superproteção que sufoca quem ama',
            'Dependência afetiva e medo de ficar só',
            'Materialismo e apego ao conforto',
            'Dificuldade em estabelecer limites',
            'Tendência a se anular pelo outro'
        ],
        missao: 'Criar, nutrir e fazer a vida florescer — seja gerando filhos, projetos ou comunidades.',
        conselho: 'Cuide de você com o mesmo carinho com que cuida dos outros. Você também merece florescer.'
    },
    {
        numero: 4,
        nome: 'O Imperador',
        simbolo: '🏛️',
        arquetipo: 'O Estruturador • O Pai',
        cor: '#dc2626',
        corSuave: 'rgba(220, 38, 38, .35)',
        descricao: 'O Imperador é o arcano da estrutura, da liderança e do poder legítimo. Você nasceu para organizar o caos, criar bases sólidas e proteger quem está sob seu comando.',
        pontosFortes: [
            'Liderança natural e capacidade de comandar',
            'Disciplina e organização que constroem impérios',
            'Visão estratégica de longo prazo',
            'Confiabilidade — cumpre o que promete',
            'Proteção firme das pessoas que ama'
        ],
        pontosFracos: [
            'Autoritarismo e controle excessivo',
            'Rigidez e dificuldade em ceder',
            'Frieza emocional em nome da razão',
            'Resistência a mudanças e a novas ideias',
            'Tendência a ver tudo como disputa de poder'
        ],
        missao: 'Construir estruturas duradouras que sustentem pessoas, famílias e projetos por gerações.',
        conselho: 'Firmeza não é sinônimo de dureza. Liderar é também ouvir e acolher.'
    },
    {
        numero: 5,
        nome: 'O Papa',
        simbolo: '📜',
        arquetipo: 'O Mestre • O Guia Espiritual',
        cor: '#7c3aed',
        corSuave: 'rgba(124, 58, 237, .35)',
        descricao: 'O Papa (ou Hierofante) é o arcano do ensino, da tradição e da fé. Você tem o dom de traduzir o invisível para quem está começando a jornada. É um mestre nato.',
        pontosFortes: [
            'Capacidade de ensinar e transmitir conhecimento',
            'Fé e moral sólidas que sustentam decisões',
            'Respeito às tradições e ao saber ancestral',
            'Conselheiro confiável — pessoas pedem sua orientação',
            'Habilidade de unir pessoas em torno de um propósito'
        ],
        pontosFracos: [
            'Dogmatismo e rigidez doutrinária',
            'Dificuldade em aceitar novas interpretações',
            'Apego ao papel de "sábio" e à autoridade',
            'Moralismo excessivo que julga os outros',
            'Resistência em viver o que prega'
        ],
        missao: 'Ser ponte entre o saber antigo e o mundo contemporâneo, ensinando pelo exemplo.',
        conselho: 'Sua autoridade vem da coerência entre o que ensina e o que vive. Viva primeiro, ensine depois.'
    },
    {
        numero: 6,
        nome: 'Os Amantes',
        simbolo: '💕',
        arquetipo: 'O Relacional • A Escolha',
        cor: '#ec4899',
        corSuave: 'rgba(236, 72, 153, .35)',
        descricao: 'Os Amantes é o arcano do amor, das escolhas e das parcerias. Você veio ao mundo para aprender a amar com sabedoria — e a escolher sem medo entre os caminhos que a vida oferece.',
        pontosFortes: [
            'Capacidade de amar intensamente e com entrega',
            'Empatia que enxerga o outro como igual',
            'Talento para criar parcerias equilibradas',
            'Consciência das próprias escolhas e consequências',
            'Sensibilidade estética e apreço pela beleza'
        ],
        pontosFracos: [
            'Indecisão crônica diante de escolhas importantes',
            'Dependência afetiva — medo de ficar só',
            'Idealização excessiva do amor romântico',
            'Dificuldade em dizer não e magoar',
            'Culpa constante pelas escolhas feitas'
        ],
        missao: 'Aprender a amar sem perder a si mesmo e a escolher com o coração alinhado à razão.',
        conselho: 'Amar é também escolher todo dia. Não tenha medo de decidir — não escolher já é uma escolha.'
    },
    {
        numero: 7,
        nome: 'O Carro',
        simbolo: '🏇',
        arquetipo: 'O Vencedor • O Guerreiro',
        cor: '#0891b2',
        corSuave: 'rgba(8, 145, 178, .35)',
        descricao: 'O Carro é o arcano da vitória, do movimento e do triunfo. Você nasceu para vencer obstáculos, conquistar territórios e liderar pelo exemplo. Sua energia é de conquista.',
        pontosFortes: [
            'Determinação feroz para alcançar objetivos',
            'Coragem em situações de conflito e pressão',
            'Liderança em movimento — sabe conduzir o grupo',
            'Capacidade de virar o jogo quando tudo parece perdido',
            'Disciplina para manter o foco no destino'
        ],
        pontosFracos: [
            'Impulsividade e atropelo de etapas',
            'Arrogância depois das vitórias',
            'Dificuldade em pedir ajuda ou recuar',
            'Ansiedade e pressa por resultados',
            'Tendência a confundir velocidade com direção'
        ],
        missao: 'Vencer batalhas externas e internas, mostrando que determinação move montanhas.',
        conselho: 'Vitória sem propósito é só barulho. Reflita antes de acelerar — o destino importa mais que a velocidade.'
    },
    {
        numero: 8,
        nome: 'A Justiça',
        simbolo: '⚖️',
        arquetipo: 'O Equilibrador • O Mediador',
        cor: '#0ea5e9',
        corSuave: 'rgba(14, 165, 233, .35)',
        descricao: 'A Justiça é o arcano do equilíbrio, da verdade e da responsabilidade. Você veio ao mundo para pesar, julgar com imparcialidade e fazer valer a ética acima de tudo.',
        pontosFortes: [
            'Senso de justiça apurado e imparcialidade',
            'Capacidade de ver todos os lados de uma questão',
            'Responsabilidade com a palavra dada',
            'Raciocínio claro em meio ao caos',
            'Coragem para tomar decisões difíceis'
        ],
        pontosFracos: [
            'Julgamento excessivo a si e aos outros',
            'Frieza que afasta quem precisa de acolhimento',
            'Rigidez com regras e moral',
            'Paralisia diante de decisões ambíguas',
            'Tendência a cobrar mais do que recebe'
        ],
        missao: 'Trazer equilíbrio e verdade onde há desordem, sem perder a compaixão pelo caminho.',
        conselho: 'Justiça sem misericórdia endurece o coração. Veja cada caso com olhos humanos.'
    },
    {
        numero: 9,
        nome: 'O Eremita',
        simbolo: '🕯️',
        arquetipo: 'O Sábio • O Buscador',
        cor: '#64748b',
        corSuave: 'rgba(100, 116, 139, .35)',
        descricao: 'O Eremita é o arcano da introspecção, da sabedoria e da busca interior. Você precisa de solidão para se encontrar — e sua missão é iluminar caminhos com a sabedoria que acumula.',
        pontosFortes: [
            'Sabedoria profunda adquirida na experiência',
            'Capacidade de estar só sem se sentir sozinho',
            'Discernimento para orientar quem está perdido',
            'Foco interior e paz em meio ao caos',
            'Autoconhecimento que poucos alcançam'
        ],
        pontosFracos: [
            'Isolamento excessivo que virá misantropia',
            'Dificuldade em se abrir emocionalmente',
            'Julgamento de quem não segue o mesmo caminho',
            'Frieza e distanciamento nas relações',
            'Tendência a se perder em reflexões sem agir'
        ],
        missao: 'Buscar a verdade interior e compartilhar a luz dessa sabedoria com quem caminha ao lado.',
        conselho: 'A solidão cura, mas não é morada. Compartilhe o que aprendeu — sua luz serve para iluminar outros.'
    },
    {
        numero: 10,
        nome: 'A Roda da Fortuna',
        simbolo: '🎡',
        arquetipo: 'O Ciclo • O Destino',
        cor: '#f59e0b',
        corSuave: 'rgba(245, 158, 11, .35)',
        descricao: 'A Roda da Fortuna é o arcano dos ciclos, das reviravoltas e do destino. Sua vida é marcada por mudanças constantes — e sua força está em dançar com a roda, sem tentar travá-la.',
        pontosFortes: [
            'Capacidade de se adaptar a qualquer mudança',
            'Otimismo que atravessa as piores fases',
            'Fé de que tudo passa — o bom e o ruim',
            'Boa sorte frequente em viradas de ciclo',
            'Visão de longo prazo acima dos tropeços'
        ],
        pontosFracos: [
            'Sensação de que a vida está fora de controle',
            'Passividade diante das adversidades',
            'Dificuldade em criar raízes e constância',
            'Oscilação emocional constante',
            'Apego ao que já passou'
        ],
        missao: 'Aprender a fluir com os ciclos da vida, aceitando que todo sobe e desce tem um propósito.',
        conselho: 'Você não controla a roda, mas controla como gira com ela. Aprenda a esperar a volta certa.'
    },
    {
        numero: 11,
        nome: 'A Força',
        simbolo: '🦁',
        arquetipo: 'A Força Interior • A Domadora',
        cor: '#eab308',
        corSuave: 'rgba(234, 179, 8, .35)',
        descricao: 'A Força é o arcano da coragem mansa, do autocontrole e da força que vem do coração. Você doma as feras internas com doçura, não com violência.',
        pontosFortes: [
            'Força interior inabalável mesmo em crises',
            'Autocontrole e paciência para domar impulsos',
            'Coragem serena — enfrenta o medo de frente',
            'Doçura que desarma as feras mais ferozes',
            'Resiliência impressionante em momentos difíceis'
        ],
        pontosFracos: [
            'Repressão de emoções fortes que pedem saída',
            'Excesso de autoconfiança que ignora limites',
            'Tendência a aguentar demais em silêncio',
            'Dificuldade em reconhecer fraquezas',
            'Explosões tardias de raiva contida'
        ],
        missao: 'Domar as próprias feras internas e mostrar que a verdadeira força é suave, não bruta.',
        conselho: 'Aguentar calado não é força — é autossabotagem. Deixe as emoções circularem antes que explodam.'
    },
    {
        numero: 12,
        nome: 'O Enforcado',
        simbolo: '🙃',
        arquetipo: 'O Sacrificador • O Visionário',
        cor: '#8b5cf6',
        corSuave: 'rgba(139, 92, 246, .35)',
        descricao: 'O Enforcado é o arcano da entrega, da pausa e do novo olhar. Você veio ao mundo para enxergar o que os outros não veem — e às vezes precisa se sacrificar para isso.',
        pontosFortes: [
            'Capacidade de ver o mundo por ângulos únicos',
            'Paciência para esperar o momento certo',
            'Desapego material e espiritual',
            'Compreensão profunda de causas e efeitos',
            'Sabedoria que surge nos momentos de pausa'
        ],
        pontosFracos: [
            'Tendência a se colocar como mártir',
            'Estagnação e dificuldade em sair da inércia',
            'Culpa e autopunição constantes',
            'Falta de ação quando é preciso agir',
            'Postura passiva diante da injustiça'
        ],
        missao: 'Aprender a pausa sagrada e usar o olhar invertido para enxergar soluções que ninguém vê.',
        conselho: 'A pausa é sagrada, mas não é morada. Use o tempo parado para renascer, não para se perder.'
    },
    {
        numero: 13,
        nome: 'A Morte',
        simbolo: '🦋',
        arquetipo: 'O Transformador • O Renascido',
        cor: '#4b5563',
        corSuave: 'rgba(75, 85, 99, .45)',
        descricao: 'A Morte (no Tarô) é o arcano da transformação profunda — não da morte física. Você veio ao mundo para morrer simbolicamente muitas vezes e renascer mais forte a cada ciclo.',
        pontosFortes: [
            'Capacidade de transformação radical quando decide',
            'Coragem para cortar o que não serve mais',
            'Renascimento constante — nunca fica no fundo do poço',
            'Aceitação dos ciclos naturais da vida',
            'Visão clara do que precisa morrer para o novo surgir'
        ],
        pontosFracos: [
            'Medo do desconhecido que atrasa mudanças',
            'Apego a situações que já morreram',
            'Melancolia e tendência ao luto prolongado',
            'Crises existenciais frequentes',
            'Dificuldade em ver beleza no fim dos ciclos'
        ],
        missao: 'Transformar-se continuamente — ser exemplo vivo de que todo fim carrega um recomeço.',
        conselho: 'Solte o que já acabou. Você não é feito de perdas, é feito do que renasce delas.'
    },
    {
        numero: 14,
        nome: 'A Temperança',
        simbolo: '🏺',
        arquetipo: 'O Alquimista • O Mediador',
        cor: '#06b6d4',
        corSuave: 'rgba(6, 182, 212, .35)',
        descricao: 'A Temperança é o arcano da moderação, da paciência e da alquimia interior. Você veio ao mundo para misturar extremos com sabedoria e encontrar o ponto de equilíbrio.',
        pontosFortes: [
            'Capacidade de mediar conflitos com sabedoria',
            'Paciência para esperar o tempo das coisas',
            'Alquimia de emoções — transforma dor em remédio',
            'Equilíbrio entre razão e emoção',
            'Capacidade de curar relações e pessoas'
        ],
        pontosFracos: [
            'Indecisão por querer ficar bem com todos',
            'Frieza em momentos que pedem intensidade',
            'Perfeccionismo no controle das emoções',
            'Dificuldade em se posicionar firmemente',
            'Tendência a evitar conflitos necessários'
        ],
        missao: 'Curar pela moderação, misturando o que parece incompatível e criando pontes onde havia muros.',
        conselho: 'Equilíbrio não é neutralidade. Às vezes a dose certa é de coragem, não de calma.'
    },
    {
        numero: 15,
        nome: 'O Diabo',
        simbolo: '😈',
        arquetipo: 'A Sombra • O Tentador',
        cor: '#991b1b',
        corSuave: 'rgba(153, 27, 27, .4)',
        descricao: 'O Diabo é o arcano das amarras e dos desejos. Ele mostra que muitas prisões são escolhidas — e que a liberdade vem ao encarar a própria sombra de frente.',
        pontosFortes: [
            'Consciência aguda das próprias sombras e desejos',
            'Intensidade e magnetismo natural',
            'Capacidade de encarar o que os outros evitam',
            'Poder de sedução e persuasão',
            'Força para quebrar ciclos de dependência'
        ],
        pontosFracos: [
            'Vícios, compulsões e dependências',
            'Auto-sabotagem em momentos-chave',
            'Manipulação e jogos de poder',
            'Obsessão e ciúme possessivo',
            'Apego a prazeres que aprisionam'
        ],
        missao: 'Encarar a sombra, libertar-se das próprias correntes e ajudar outros a fazerem o mesmo.',
        conselho: 'O que você nega te escraviza. Olhe para a sombra sem medo — é ali que mora sua verdadeira força.'
    },
    {
        numero: 16,
        nome: 'A Torre',
        simbolo: '🗼',
        arquetipo: 'O Demolidor • O Despertador',
        cor: '#f97316',
        corSuave: 'rgba(249, 115, 22, .35)',
        descricao: 'A Torre é o arcano da ruptura, do despertar e da reconstrução. Você veio ao mundo para derrubar estruturas falsas — começando pelas próprias — e reconstruir sobre bases verdadeiras.',
        pontosFortes: [
            'Capacidade de recomeçar do zero absoluto',
            'Coragem para derrubar o que está falso',
            'Clareza em momentos de crise extrema',
            'Resiliência diante de grandes rupturas',
            'Visão do que precisa ser reconstruído'
        ],
        pontosFracos: [
            'Tendência a autossabotagem em momentos de estabilidade',
            'Crises dramáticas recorrentes',
            'Dificuldade em construir o que permanece',
            'Choque e desespero diante de perdas',
            'Medo constante do próximo desabamento'
        ],
        missao: 'Derrubar estruturas falsas — internas e externas — e ajudar a reconstruir sobre verdade.',
        conselho: 'Toda queda é uma chance de reerguer algo mais verdadeiro. Não tema o raio que derruba ilusões.'
    },
    {
        numero: 17,
        nome: 'A Estrela',
        simbolo: '⭐',
        arquetipo: 'A Esperança • A Curadora',
        cor: '#38bdf8',
        corSuave: 'rgba(56, 189, 248, .35)',
        descricao: 'A Estrela é o arcano da esperança, da fé e da cura. Você nasceu para levar luz onde há escuridão — e sua presença tem efeito terapêutico sobre as pessoas.',
        pontosFortes: [
            'Esperança inabalável mesmo em tempos difíceis',
            'Capacidade de curar com presença e palavras',
            'Generosidade genuína com quem sofre',
            'Fé que inspira outras pessoas a continuar',
            'Sensibilidade espiritual e conexão com o divino'
        ],
        pontosFracos: [
            'Ingenuidade e excesso de confiança nos outros',
            'Tendência a se doar mais do que pode',
            'Fuga da realidade através do otimismo cego',
            'Decepção frequente com quem idealiza',
            'Dificuldade em admitir dor e fraqueza'
        ],
        missao: 'Ser farol de esperança e canal de cura para todos que cruzam seu caminho.',
        conselho: 'Você também precisa de cura. Deixe-se cuidar — a estrela também tem noite escura.'
    },
    {
        numero: 18,
        nome: 'A Lua',
        simbolo: '🌕',
        arquetipo: 'A Sonhadora • O Inconsciente',
        cor: '#a78bfa',
        corSuave: 'rgba(167, 139, 250, .35)',
        descricao: 'A Lua é o arcano do inconsciente, dos sonhos e das ilusões. Você vive entre dois mundos — o visível e o sutil — e sua missão é aprender a navegar sem se perder nas sombras.',
        pontosFortes: [
            'Imaginação fértil e conexão com o mundo onírico',
            'Intuição profunda sobre emoções e segredos',
            'Sensibilidade artística e criativa',
            'Capacidade de perceber o que está oculto',
            'Empatia com medos e angústias alheias'
        ],
        pontosFracos: [
            'Ilusões e autoengano frequentes',
            'Medos noturnos, ansiedade e fobias',
            'Tendência a viver em fantasia e evitar o real',
            'Confusão mental e indecisão',
            'Oscilação emocional sem controle'
        ],
        missao: 'Explorar as profundezas do inconsciente e trazer à luz o que estava escondido — em si e nos outros.',
        conselho: 'Nem toda sombra é perigo. Aprenda a distinguir intuição de medo — e a sonhar acordado, com os pés no chão.'
    },
    {
        numero: 19,
        nome: 'O Sol',
        simbolo: '☀️',
        arquetipo: 'O Iluminador • A Criança Interior',
        cor: '#fbbf24',
        corSuave: 'rgba(251, 191, 36, .35)',
        descricao: 'O Sol é o arcano da luz, da clareza e da alegria. Você nasceu para brilhar, iluminar e trazer vitalidade — sua presença aquece e alegra quem está por perto.',
        pontosFortes: [
            'Alegria contagiante e vitalidade radiante',
            'Clareza mental para ver e decidir',
            'Autoconfiança luminosa que inspira',
            'Generosidade e calor humano',
            'Sucesso natural em atividades públicas'
        ],
        pontosFracos: [
            'Arrogância e autoexaltação',
            'Necessidade constante de atenção e aplausos',
            'Dificuldade em lidar com a tristeza',
            'Ingenuidade sobre as intenções alheias',
            'Intolerância com quem está em fase sombria'
        ],
        missao: 'Brillar sem ofuscar — usar sua luz para aquecer, curar e inspirar, não para ofuscar.',
        conselho: 'Sua luz é um dom, mas nem todos estão prontos para ela. Aprenda a iluminar com delicadeza.'
    },
    {
        numero: 20,
        nome: 'O Julgamento',
        simbolo: '📯',
        arquetipo: 'O Desperto • O Renascido',
        cor: '#a855f7',
        corSuave: 'rgba(168, 85, 247, .35)',
        descricao: 'O Julgamento é o arcano do despertar e do chamado interior. Você veio ao mundo para ouvir a trombeta da sua própria alma e ajudar outros a despertarem também.',
        pontosFortes: [
            'Capacidade de renascer após grandes provações',
            'Escuta sensível ao chamado interior',
            'Capacidade de perdoar e seguir adiante',
            'Vocação para despertar consciências',
            'Compreensão dos grandes ciclos da vida'
        ],
        pontosFracos: [
            'Autocrítica severa e sensação de julgamento',
            'Culpa por erros do passado',
            'Tendência a se cobrar perfeição',
            'Dificuldade em se perdoar plenamente',
            'Medo do julgamento alheio'
        ],
        missao: 'Despertar a si mesmo e aos outros — ser a trombeta que anuncia um novo tempo.',
        conselho: 'Você não está sendo julgado. Está sendo chamado. Responda ao chamado, não à culpa.'
    },
    {
        numero: 21,
        nome: 'O Mundo',
        simbolo: '🌍',
        arquetipo: 'O Realizador • A Completude',
        cor: '#10b981',
        corSuave: 'rgba(16, 185, 129, .35)',
        descricao: 'O Mundo é o arcano da realização, da totalidade e do sucesso. Você veio ao mundo para completar grandes ciclos — e sua energia atrai êxito e reconhecimento.',
        pontosFortes: [
            'Capacidade de concluir ciclos com maestria',
            'Visão global e integração de saberes',
            'Sucesso em empreitadas de longo prazo',
            'Reconhecimento natural pelos talentos',
            'Sensação de propósito cumprido'
        ],
        pontosFracos: [
            'Perfeccionismo que impede encerrar ciclos',
            'Medo de terminar e recomeçar do zero',
            'Apego aos resultados e ao reconhecimento',
            'Sensação de vazio após grandes conquistas',
            'Dificuldade em celebrar sem culpa'
        ],
        missao: 'Completar grandes ciclos e mostrar que todo fim é também uma porta para um novo mundo.',
        conselho: 'Celebre suas conquistas. O fim de um ciclo não apaga o que você construiu — abre espaço para o próximo.'
    },
    {
        numero: 22,
        nome: 'O Louco',
        simbolo: '🃏',
        arquetipo: 'O Livre • O Viajante',
        cor: '#f43f5e',
        corSuave: 'rgba(244, 63, 94, .35)',
        descricao: 'O Louco é o arcano da liberdade, do início e da confiança absoluta. Você veio ao mundo para caminhar sem mapa, confiando que o universo provê — e ensinar aos outros que é possível viver leve.',
        pontosFortes: [
            'Liberdade e coragem para começar sempre de novo',
            'Confiança inabalável no desconhecido',
            'Espontaneidade e alegria de viver',
            'Capacidade de se adaptar a qualquer situação',
            'Visão ingênua que descobre caminhos novos'
        ],
        pontosFracos: [
            'Irresponsabilidade e fuga de compromissos',
            'Ingenuidade excessiva e ilusão constante',
            'Dificuldade em criar raízes',
            'Tendência a fugir quando fica difícil',
            'Falta de foco e constância'
        ],
        missao: 'Mostrar que a vida pode ser vivida com leveza e confiança — sem medo do próximo passo.',
        conselho: 'Voar é lindo, mas pousar também é preciso. Liberdade sem raiz vira fuga.'
    }
];