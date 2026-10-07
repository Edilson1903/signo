/* ============================================================
   Base de dados dos 12 signos
   Formato da data: "MM-DD"
   Cada signo traz: pontosFortes (lado bom) e pontosFracos (lado ruim)
   ============================================================ */

const SIGNOS = [
    {
        nome: 'Áries',
        slug: 'aries',
        simbolo: '♈',
        dataInicio: '03-21',
        dataFim: '04-19',
        elemento: 'Fogo',
        modalidade: 'Cardinal',
        regente: 'Marte',
        periodo: '21 de março a 19 de abril',
        descricao: 'Áries é o pioneiro do zodíaco: age por impulso, ama desafios e não tem paciência para rodeios. Sua energia contagiante abre caminhos, mas a impulsividade exige atenção.',
        caracteristicas: ['Corajoso', 'Determinado', 'Entusiasta', 'Impulsivo', 'Competitivo'],
        afinidades: ['Leão', 'Sagitário', 'Gêmeos', 'Aquário'],
        sorte: 'Cor: vermelho • Pedra: diamante • Dia: terça-feira',
        pontosFortes: [
            'Coragem para começar o que ninguém teve peito de iniciar',
            'Iniciativa rápida: decide e age sem enrolação',
            'Liderança natural em situações de pressão',
            'Entusiasmo contagiante que inspira o grupo',
            'Sinceridade direta — você sempre sabe onde pisa'
        ],
        pontosFracos: [
            'Impulsividade: age antes de pensar nas consequências',
            'Impaciência com processos longos e detalhados',
            'Agressividade quando contrariado',
            'Egoísmo em momentos de competição',
            'Dificuldade em manter constância depois do começo'
        ]
    },
    {
        nome: 'Touro',
        slug: 'touro',
        simbolo: '♉',
        dataInicio: '04-20',
        dataFim: '05-20',
        elemento: 'Terra',
        modalidade: 'Fixo',
        regente: 'Vênus',
        periodo: '20 de abril a 20 de maio',
        descricao: 'Touro valoriza segurança, conforto e estabilidade. Paciente e persistente, constrói suas conquistas passo a passo e dificilmente abre mão daquilo que considera seu.',
        caracteristicas: ['Paciente', 'Confiável', 'Persistente', 'Teimoso', 'Sensual'],
        afinidades: ['Virgem', 'Capricórnio', 'Câncer', 'Peixes'],
        sorte: 'Cor: verde • Pedra: esmeralda • Dia: sexta-feira',
        pontosFortes: [
            'Estabilidade emocional: porto seguro para quem está por perto',
            'Persistência lendária — termina o que começa',
            'Lealdade inabalável em relações e compromissos',
            'Sensualidade e apreço genuíno pelos prazeres da vida',
            'Praticidade para resolver problemas do mundo real'
        ],
        pontosFracos: [
            'Teimosia: dificuldade em ceder mesmo quando está errado',
            'Possessividade com pessoas, objetos e território',
            'Materialismo excessivo e apego ao conforto',
            'Resistência a mudanças — perde oportunidades por medo',
            'Preguiça e tendência à zona de conforto'
        ]
    },
    {
        nome: 'Gêmeos',
        slug: 'gemeos',
        simbolo: '♊',
        dataInicio: '05-21',
        dataFim: '06-20',
        elemento: 'Ar',
        modalidade: 'Mutável',
        regente: 'Mercúrio',
        periodo: '21 de maio a 20 de junho',
        descricao: 'Curioso e comunicativo, Gêmeos vive de ideias, conversas e novidades. Adapta-se rapidamente a qualquer ambiente, mas pode se dispersar com facilidade.',
        caracteristicas: ['Comunicativo', 'Versátil', 'Curioso', 'Ágil', 'Inconstante'],
        afinidades: ['Libra', 'Aquário', 'Áries', 'Leão'],
        sorte: 'Cor: amarelo • Pedra: ágata • Dia: quarta-feira',
        pontosFortes: [
            'Comunicação afiada: convence, explica e conecta',
            'Adaptabilidade extrema — sobrevive em qualquer ambiente',
            'Curiosidade intelectual que nunca se apaga',
            'Rapidez mental e aprendizado veloz',
            'Sociabilidade e facilidade em fazer amigos'
        ],
        pontosFracos: [
            'Inconstância: começa mil coisas e termina poucas',
            'Superficialidade em temas que exigem profundidade',
            'Nervosismo e ansiedade mental constante',
            'Dificuldade em se comprometer de verdade',
            'Tagarelice — fala mais do que escuta'
        ]
    },
    {
        nome: 'Câncer',
        slug: 'cancer',
        simbolo: '♋',
        dataInicio: '06-21',
        dataFim: '07-22',
        elemento: 'Água',
        modalidade: 'Cardinal',
        regente: 'Lua',
        periodo: '21 de junho a 22 de julho',
        descricao: 'Sensível e protetor, Câncer tem forte ligação com a família e o lar. Intuitivo, capta o clima emocional do ambiente antes mesmo de qualquer palavra ser dita.',
        caracteristicas: ['Sensível', 'Protetor', 'Intuitivo', 'Leal', 'Emotivo'],
        afinidades: ['Escorpião', 'Peixes', 'Touro', 'Virgem'],
        sorte: 'Cor: prata • Pedra: pérola • Dia: segunda-feira',
        pontosFortes: [
            'Empatia profunda: sente o que o outro sente',
            'Intuição afiada para perceber intenções ocultas',
            'Lealdade feroz à família e aos amigos próximos',
            'Instinto protetor que acolhe quem precisa',
            'Memória afetiva que valoriza raízes e história'
        ],
        pontosFracos: [
            'Sensibilidade excessiva: leva tudo para o lado pessoal',
            'Apego ao passado — dificuldade em virar a página',
            'Manipulação emocional quando se sente ameaçado',
            'Insegurança crônica e medo de rejeição',
            'Tendência à vitimização e ao drama'
        ]
    },
    {
        nome: 'Leão',
        slug: 'leao',
        simbolo: '♌',
        dataInicio: '07-23',
        dataFim: '08-22',
        elemento: 'Fogo',
        modalidade: 'Fixo',
        regente: 'Sol',
        periodo: '23 de julho a 22 de agosto',
        descricao: 'Leão brilha por onde passa. Criativo, generoso e cheio de presença, gosta de ser reconhecido e lidera com carisma — desde que receba a devida atenção.',
        caracteristicas: ['Carismático', 'Generoso', 'Criativo', 'Confiante', 'Orgulhoso'],
        afinidades: ['Áries', 'Sagitário', 'Libra', 'Gêmeos'],
        sorte: 'Cor: dourado • Pedra: rubi • Dia: domingo',
        pontosFortes: [
            'Carisma natural que ilumina qualquer ambiente',
            'Generosidade com quem ama — dá sem medir',
            'Liderança inspiradora e capacidade de motivar',
            'Criatividade vibrante em arte, negócios e vida',
            'Autoconfiança que abre portas e move montanhas'
        ],
        pontosFracos: [
            'Vaidade e necessidade constante de aprovação',
            'Arrogância quando se sente superior',
            'Drama e exagero em situações simples',
            'Teimosia em reconhecer erros',
            'Dificuldade em dividir o palco e o protagonismo'
        ]
    },
    {
        nome: 'Virgem',
        slug: 'virgem',
        simbolo: '♍',
        dataInicio: '08-23',
        dataFim: '09-22',
        elemento: 'Terra',
        modalidade: 'Mutável',
        regente: 'Mercúrio',
        periodo: '23 de agosto a 22 de setembro',
        descricao: 'Virgem observa detalhes que ninguém mais vê. Prático, organizado e analítico, busca a perfeição em tudo — e às vezes cobra demais de si mesmo.',
        caracteristicas: ['Organizado', 'Analítico', 'Prático', 'Detalhista', 'Crítico'],
        afinidades: ['Touro', 'Capricórnio', 'Câncer', 'Escorpião'],
        sorte: 'Cor: bege • Pedra: safira • Dia: quarta-feira',
        pontosFortes: [
            'Organização impecável: nada escapa ao seu radar',
            'Análise fria e precisa em momentos de crise',
            'Dedicação total ao trabalho e às pessoas',
            'Praticidade para resolver o que outros complicam',
            'Confiabilidade: se prometeu, cumpre'
        ],
        pontosFracos: [
            'Perfeccionismo paralisante — nada está bom o suficiente',
            'Crítica excessiva a si e aos outros',
            'Ansiedade e preocupação constante com detalhes',
            'Rigidez com regras e métodos próprios',
            'Autossabotagem por medo de errar'
        ]
    },
    {
        nome: 'Libra',
        slug: 'libra',
        simbolo: '♎',
        dataInicio: '09-23',
        dataFim: '10-22',
        elemento: 'Ar',
        modalidade: 'Cardinal',
        regente: 'Vênus',
        periodo: '23 de setembro a 22 de outubro',
        descricao: 'Libra é o signo do equilíbrio e das relações. Diplomático, estético e sociável, evita conflitos e busca harmonia — mas pode ter dificuldade em tomar decisões.',
        caracteristicas: ['Diplomático', 'Sociável', 'Elegante', 'Justo', 'Indeciso'],
        afinidades: ['Gêmeos', 'Aquário', 'Leão', 'Sagitário'],
        sorte: 'Cor: rosa • Pedra: opala • Dia: sexta-feira',
        pontosFortes: [
            'Diplomacia: resolve conflitos sem ferir ninguém',
            'Senso de justiça apurado e equilíbrio nas decisões',
            'Charme natural que abre portas e corações',
            'Sociabilidade e facilidade em criar conexões',
            'Sensibilidade estética — enxerga beleza onde ninguém vê'
        ],
        pontosFracos: [
            'Indecisão crônica: trava diante de escolhas',
            'Evita conflitos a qualquer custo, mesmo quando precisa',
            'Dependência afetiva e medo de ficar sozinho',
            'Superficialidade em relações muito próximas',
            'Manipulação sutil para manter a paz aparente'
        ]
    },
    {
        nome: 'Escorpião',
        slug: 'escorpiao',
        simbolo: '♏',
        dataInicio: '10-23',
        dataFim: '11-21',
        elemento: 'Água',
        modalidade: 'Fixo',
        regente: 'Plutão',
        periodo: '23 de outubro a 21 de novembro',
        descricao: 'Intenso e magnético, Escorpião sente tudo em profundidade. Leal a quem confia, tem faro para segredos e uma força de vontade difícil de dobrar.',
        caracteristicas: ['Intenso', 'Leal', 'Estratégico', 'Magnético', 'Desconfiado'],
        afinidades: ['Câncer', 'Peixes', 'Virgem', 'Capricórnio'],
        sorte: 'Cor: vinho • Pedra: topázio • Dia: terça-feira',
        pontosFortes: [
            'Determinação feroz: nada o faz desistir',
            'Intensidade que transforma tudo em que toca',
            'Lealdade absoluta a quem merece confiança',
            'Intuição profunda sobre pessoas e intenções',
            'Estratégia e foco cirúrgico em objetivos'
        ],
        pontosFracos: [
            'Ciúmes possessivos e controle excessivo',
            'Vingança e rancor guardados por anos',
            'Desconfiança paranoica mesmo de aliados',
            'Obsessão e dificuldade em soltar o que passou',
            'Manipulação e jogos de poder emocional'
        ]
    },
    {
        nome: 'Sagitário',
        slug: 'sagitario',
        simbolo: '♐',
        dataInicio: '11-22',
        dataFim: '12-21',
        elemento: 'Fogo',
        modalidade: 'Mutável',
        regente: 'Júpiter',
        periodo: '22 de novembro a 21 de dezembro',
        descricao: 'Sagitário precisa de horizonte aberto. Otimista, sincero e aventureiro, busca sentido em cada experiência e não suporta se sentir preso.',
        caracteristicas: ['Otimista', 'Aventureiro', 'Sincero', 'Expansivo', 'Impulsivo'],
        afinidades: ['Áries', 'Leão', 'Libra', 'Aquário'],
        sorte: 'Cor: azul • Pedra: turquesa • Dia: quinta-feira',
        pontosFortes: [
            'Otimismo inabalável: sempre enxerga o lado bom',
            'Espírito aventureiro que explora o desconhecido',
            'Sinceridade brutal — fala o que pensa, sem rodeios',
            'Generosidade e visão de longo alcance',
            'Filosofia de vida que inspira quem está perto'
        ],
        pontosFracos: [
            'Impulsividade e decisões tomadas no calor do momento',
            'Falta de compromisso: foge quando fica sério demais',
            'Exagero em tudo — come, fala e promete demais',
            'Tato zero: magoa sem perceber',
            'Irresponsabilidade com prazos e detalhes práticos'
        ]
    },
    {
        nome: 'Capricórnio',
        slug: 'capricornio',
        simbolo: '♑',
        dataInicio: '12-22',
        dataFim: '01-19',
        elemento: 'Terra',
        modalidade: 'Cardinal',
        regente: 'Saturno',
        periodo: '22 de dezembro a 19 de janeiro',
        descricao: 'Capricórnio constrói pensando no longo prazo. Disciplinado, responsável e ambicioso, alcança suas metas com paciência — mas precisa aprender a relaxar.',
        caracteristicas: ['Disciplinado', 'Responsável', 'Ambicioso', 'Prático', 'Reservado'],
        afinidades: ['Touro', 'Virgem', 'Escorpião', 'Peixes'],
        sorte: 'Cor: cinza • Pedra: ônix • Dia: sábado',
        pontosFortes: [
            'Disciplina exemplar: cumpre o que promete a si mesmo',
            'Responsabilidade com trabalho, família e palavra',
            'Ambição com pé no chão — constrói impérios devagar',
            'Praticidade para transformar sonho em plano',
            'Persistência lendária: aguenta anos por um objetivo'
        ],
        pontosFracos: [
            'Frieza emocional que afasta quem ama',
            'Pessimismo e tendência a ver o lado difícil primeiro',
            'Rigidez com regras e resistência ao novo',
            'Vício em trabalho — esquece de viver',
            'Dificuldade em relaxar e pedir ajuda'
        ]
    },
    {
        nome: 'Aquário',
        slug: 'aquario',
        simbolo: '♒',
        dataInicio: '01-20',
        dataFim: '02-18',
        elemento: 'Ar',
        modalidade: 'Fixo',
        regente: 'Urano',
        periodo: '20 de janeiro a 18 de fevereiro',
        descricao: 'Aquário pensa à frente do seu tempo. Original, independente e humanitário, questiona padrões e valoriza a liberdade acima de quase tudo.',
        caracteristicas: ['Original', 'Independente', 'Humanitário', 'Inventivo', 'Distante'],
        afinidades: ['Gêmeos', 'Libra', 'Áries', 'Sagitário'],
        sorte: 'Cor: turquesa • Pedra: ametista • Dia: sábado',
        pontosFortes: [
            'Originalidade: enxerga soluções que ninguém imaginou',
            'Independência feroz — não vive de aprovação alheia',
            'Humanitarismo genuíno: luta por causas maiores',
            'Intelecto privilegiado e pensamento visionário',
            'Capacidade de inovar e quebrar padrões obsoletos'
        ],
        pontosFracos: [
            'Distanciamento emocional: difícil de se conectar de verdade',
            'Teimosia em defender ideias mesmo contra evidências',
            'Rebeldia sem causa — contesta só por contestar',
            'Frieza em momentos que pedem acolhimento',
            'Isolamento e dificuldade em pedir ajuda'
        ]
    },
    {
        nome: 'Peixes',
        slug: 'peixes',
        simbolo: '♓',
        dataInicio: '02-19',
        dataFim: '03-20',
        elemento: 'Água',
        modalidade: 'Mutável',
        regente: 'Netuno',
        periodo: '19 de fevereiro a 20 de março',
        descricao: 'Peixes é sensível, imaginativo e empático. Vive entre a razão e a fantasia, tem grande intuição artística e absorve facilmente as emoções ao redor.',
        caracteristicas: ['Empático', 'Imaginativo', 'Intuitivo', 'Artístico', 'Sensível'],
        afinidades: ['Câncer', 'Escorpião', 'Touro', 'Capricórnio'],
        sorte: 'Cor: lilás • Pedra: água-marinha • Dia: quinta-feira',
        pontosFortes: [
            'Empatia profunda: sente a dor do outro como se fosse sua',
            'Intuição quase sobrenatural sobre pessoas e situações',
            'Criatividade sem limites — arte, música, escrita fluem',
            'Compaixão genuína e capacidade de perdoar',
            'Imaginação fértil que cria mundos inteiros'
        ],
        pontosFracos: [
            'Escapismo: foge da realidade em fantasias e vícios',
            'Vitimização e tendência a se colocar como mártir',
            'Falta de limites — diz sim quando queria dizer não',
            'Indecisão e dificuldade em escolher caminhos',
            'Ingenuidade e tendência a confiar demais'
        ]
    }
];