/* ============================================================
   Motor de conteúdo dinâmico
   Gera previsões que mudam conforme o DIA e a SEMANA de acesso,
   sempre coerentes com o signo do usuário.

   Método: hash determinístico de (slug + chave-de-período)
   → mesma semana + mesmo signo = mesmo resultado
   → semana seguinte = resultado novo
   ============================================================ */

/* ---------- Hash simples (estável entre acessos) ---------- */
function hashString(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = ((hash << 5) - hash) + str.charCodeAt(i);
        hash |= 0;
    }
    return Math.abs(hash);
}

function escolherPorSeed(lista, seed) {
    return lista[hashString(seed) % lista.length];
}

/* ---------- Chaves de período ---------- */

/** Retorna "YYYY-MM-DD" do dia atual. */
function chaveDia(date = new Date()) {
    const a = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    return `${a}-${m}-${d}`;
}

/** Retorna "YYYY-Www" (semana ISO) do dia atual. */
function chaveSemana(date = new Date()) {
    const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
    const diaSemana = d.getUTCDay() || 7;
    d.setUTCDate(d.getUTCDate() + 4 - diaSemana);
    const inicioAno = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
    const semana = Math.ceil((((d - inicioAno) / 86400000) + 1) / 7);
    return `${d.getUTCFullYear()}-W${String(semana).padStart(2, '0')}`;
}

/** Retorna "YYYY-MM". */
function chaveMes(date = new Date()) {
    const a = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    return `${a}-${m}`;
}

/* ---------- Intervalo da semana (segunda a domingo) ---------- */
function intervaloDaSemana(date = new Date()) {
    const d = new Date(date);
    const dia = d.getDay() || 7;
    const segunda = new Date(d);
    segunda.setDate(d.getDate() - dia + 1);
    const domingo = new Date(segunda);
    domingo.setDate(segunda.getDate() + 6);

    const fmt = (dt) => String(dt.getDate()).padStart(2, '0') + '/' +
        String(dt.getMonth() + 1).padStart(2, '0');
    return `${fmt(segunda)} a ${fmt(domingo)}`;
}

/* ============================================================
   Conteúdo base
   ============================================================ */

const TOM_POR_SIGNO = {
    aries: 'Sua energia impulsiva pede direção.',
    touro: 'Seu ritmo estável favorece o que é duradouro.',
    gemeos: 'Sua mente ágil conecta ideias rapidamente.',
    cancer: 'Sua sensibilidade capta o que não é dito.',
    leao: 'Seu brilho natural abre portas.',
    virgem: 'Seu olhar atento nota o detalhe decisivo.',
    libra: 'Seu equilíbrio harmoniza ambientes.',
    escorpiao: 'Sua intensidade revela o essencial.',
    sagitario: 'Sua expansão busca novos horizontes.',
    capricornio: 'Sua disciplina constrói o que permanece.',
    aquario: 'Sua originalidade quebra padrões.',
    peixes: 'Sua intuição enxerga além do visível.'
};

const PREVISOES_SEMANA = [
    'Semana de colheita: o que você plantou começa a dar frutos. Tenha paciência com o ritmo natural das coisas.',
    'Momentos de clareza mental virão com força. Aproveite para tomar decisões que vinha adiando.',
    'Um ciclo se fecha e outro se abre. Solte o que já não faz sentido e abra espaço para o novo.',
    'Foco em relacionamentos: uma conversa sincera pode destravar algo importante.',
    'Semana favorável a projetos criativos. Sua imaginação está mais fértil do que o normal.',
    'Cuidado com excesso de autocrítica. Você está indo melhor do que imagina.',
    'Boa semana para reorganizar finanças e prioridades. Menos é mais.',
    'Energia de movimento: se estava parado, é hora de retomar. Se estava acelerado, é hora de desacelerar.',
    'Uma oportunidade disfarçada de desafio vai aparecer. Olhe com atenção.',
    'Semana de reconexão com a própria intuição. Confie mais no seu primeiro instinto.',
    'Fase de ajustes: pequenas mudanças na rotina terão grande impacto nas próximas semanas.',
    'Boa fase para aprender algo novo. Sua mente está mais receptiva.',
    'Semana de introspecção. Reservar um tempo sozinho vai te fazer bem.',
    'Clima de resolução: pendências antigas finalmente encontram encaminhamento.',
    'Energia de renovação. Um novo hábito começado agora tende a durar.',
    'Semana de encontros significativos. Preste atenção nas pessoas que cruzam seu caminho.',
    'Bom momento para dizer não ao que drena energia e sim ao que nutre.',
    'Semana com tendência a reviravoltas positivas. Mantenha o otimismo com os pés no chão.',
    'Foco em saúde e bem-estar. Seu corpo está pedindo atenção em algum aspecto.',
    'Fase de semear. O que você iniciar agora terá desdobramentos em até três meses.',
    'Semana de conversas importantes. Escute mais do que fale.',
    'Clima de reencontro: alguém do passado pode reaparecer com uma proposta.',
    'Momento de firmar limites. Dizer não também é cuidar de si.',
    'Boa fase para concluir o que ficou pela metade. Finalize antes de começar algo novo.',
    'Energia de expansão: viagens, estudos ou contatos distantes favorecem.',
    'Semana pede calma nas decisões financeiras. Evite impulsos.',
    'Fase de inspiração artística. Canalize sua criatividade em algo concreto.',
    'Boa semana para reconciliar-se com alguém. O perdão abre caminhos.',
    'Semana de descobertas internas. Um insight importante vai surgir.',
    'Momento ideal para cuidar do corpo: sono, alimentação e exercício pedem atenção.'
];

const ENERGIAS_DIA = [
    { rotulo: 'Alta', emoji: '🚀', dica: 'Aproveite para adiantar tarefas importantes.' },
    { rotulo: 'Moderada', emoji: '⚖️', dica: 'Ritmo equilibrado: vá com calma, sem pressa.' },
    { rotulo: 'Reflexiva', emoji: '🪞', dica: 'Bom dia para pensar antes de agir.' },
    { rotulo: 'Criativa', emoji: '🎨', dica: 'Sua imaginação está afiada — use-a.' },
    { rotulo: 'Social', emoji: '🤝', dica: 'Encontros e conversas tendem a render.' },
    { rotulo: 'Introspectiva', emoji: '🌌', dica: 'Dia de recolhimento e autocuidado.' },
    { rotulo: 'Produtiva', emoji: '📈', dica: 'Coloque em ordem o que estava solto.' },
    { rotulo: 'Sensível', emoji: '💧', dica: 'Escute suas emoções com atenção.' },
    { rotulo: 'Decisiva', emoji: '⚡', dica: 'Hora de escolher e seguir em frente.' },
    { rotulo: 'Tranquila', emoji: '🌿', dica: 'Aproveite para respirar e relaxar.' }
];

const NUMEROS_SORTE = [1, 2, 3, 5, 7, 8, 9, 11, 13, 17, 21, 22, 24, 29, 33, 42];

const CORES_SORTE = [
    { nome: 'Vermelho', hex: '#e63946' },
    { nome: 'Laranja', hex: '#f77f00' },
    { nome: 'Amarelo', hex: '#fcbf49' },
    { nome: 'Verde', hex: '#43aa8b' },
    { nome: 'Turquesa', hex: '#06aed5' },
    { nome: 'Azul', hex: '#4361ee' },
    { nome: 'Violeta', hex: '#7209b7' },
    { nome: 'Rosa', hex: '#f72585' },
    { nome: 'Dourado', hex: '#d4af37' },
    { nome: 'Prata', hex: '#b0b0b0' },
    { nome: 'Bege', hex: '#d6c5a5' },
    { nome: 'Preto', hex: '#22223b' }
];

/* ============================================================
   Fase da lua — cálculo astronômico simples
   ============================================================ */
function faseDaLua(date = new Date()) {
    const conhecida = new Date(Date.UTC(2000, 0, 6, 18, 14));
    const ciclo = 29.530588853;
    const dias = (date - conhecida) / 86400000;
    const idade = ((dias % ciclo) + ciclo) % ciclo;

    if (idade < 1.85) return { nome: 'Lua Nova', emoji: '🌑' };
    if (idade < 5.54) return { nome: 'Crescente Côncava', emoji: '🌒' };
    if (idade < 9.23) return { nome: 'Quarto Crescente', emoji: '🌓' };
    if (idade < 12.91) return { nome: 'Crescente Gibosa', emoji: '🌔' };
    if (idade < 16.61) return { nome: 'Lua Cheia', emoji: '🌕' };
    if (idade < 20.30) return { nome: 'Minguante Gibosa', emoji: '🌖' };
    if (idade < 23.99) return { nome: 'Quarto Minguante', emoji: '🌗' };
    if (idade < 27.68) return { nome: 'Minguante Côncava', emoji: '🌘' };
    return { nome: 'Lua Nova', emoji: '🌑' };
}

/** Retorna a data da próxima segunda-feira. */
function proximaSegunda(date = new Date()) {
    const d = new Date(date);
    const dia = d.getDay() || 7;
    d.setDate(d.getDate() + (8 - dia));
    return String(d.getDate()).padStart(2, '0') + '/' +
        String(d.getMonth() + 1).padStart(2, '0') + '/' +
        d.getFullYear();
}

/* ============================================================
   Gera todo o bloco dinâmico para um signo
   ============================================================ */
function gerarConteudoDinamico(slugSigno, data = new Date()) {
    const dia = chaveDia(data);
    const semana = chaveSemana(data);

    const seedDia = `${slugSigno}-${dia}`;
    const seedSemana = `${slugSigno}-${semana}`;

    const tom = TOM_POR_SIGNO[slugSigno] || '';
    const prev = escolherPorSeed(PREVISOES_SEMANA, seedSemana);
    const energia = escolherPorSeed(ENERGIAS_DIA, seedDia);
    const numero = escolherPorSeed(NUMEROS_SORTE, seedSemana);
    const cor = escolherPorSeed(CORES_SORTE, seedSemana);
    const lua = faseDaLua(data);

    return {
        semanaAtual: semana,
        intervalo: intervaloDaSemana(data),
        previsao: `${tom} ${prev}`,
        energia: energia,
        numeroSorte: numero,
        corSorte: cor,
        lua: lua,
        proximaAtualizacao: proximaSegunda(data)
    };
}