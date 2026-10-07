/* ============================================================
   Handler da página arcano-resultado.html

   Cálculo do Arcano Pessoal:

   PASSO 1 — DATA DE NASCIMENTO
     • Somar todos os dígitos do dia, mês e ano.
     • Se o total > 22, somar os algarismos novamente
       até chegar entre 1 e 22.
     • → Este é o ARCANO PESSOAL.

   PASSO 2 — NOME COMPLETO (vibração complementar)
     • Converter cada letra pela tabela pitagórica.
     • Somar tudo.
     • Se o total > 22, reduzir somando algarismos até 1-22.
     • → Esta é a VIBRAÇÃO DO NOME.

   O arcano pessoal é determinado pela DATA.
   A vibração do nome colore a leitura do arcano.
   ============================================================ */

/* ---------- Tabela pitagórica tradicional ---------- */
const TABELA_PITAGORICA = {
  A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, H: 8, I: 9,
  J: 1, K: 2, L: 3, M: 4, N: 5, O: 6, P: 7, Q: 8, R: 9,
  S: 1, T: 2, U: 3, V: 4, W: 5, X: 6, Y: 7, Z: 8
};

/* ============================================================
   Utilitários
   ============================================================ */

function normalizarNome(nome) {
  return nome
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toUpperCase()
    .replace(/[^A-Z]/g, '');
}

function somarDigitos(numero) {
  return String(numero)
    .split('')
    .reduce((acc, d) => acc + Number(d), 0);
}

/** Reduz um valor até 1-22, guardando os passos. */
function reduzirComPassos(valor) {
  const passos = [valor];
  let n = valor;

  while (n > 22) {
    n = somarDigitos(n);
    passos.push(n);
  }

  if (n === 0) n = 22;

  return { resultado: n, passos: passos };
}

/* ============================================================
   PASSO 1 — Número a partir da DATA
   Dígitos na ordem DIA / MÊS / ANO
   ============================================================ */
function calcularNumeroData(data) {
  const [ano, mes, dia] = data.split('-');
  const sequencia = (dia + mes + ano).split('').map(Number);

  const somaBruta = sequencia.reduce((acc, d) => acc + d, 0);

  const reducao = reduzirComPassos(somaBruta);

  return {
    dataBR: `${dia}/${mes}/${ano}`,
    digitos: sequencia,
    somaBruta: somaBruta,
    passos: reducao.passos,
    numero: reducao.resultado
  };
}

/* ============================================================
   PASSO 2 — Número a partir do NOME
   ============================================================ */
function calcularNumeroNome(nome) {
  const limpo = normalizarNome(nome);

  const detalhes = [];
  let somaBruta = 0;

  for (const letra of limpo) {
    const valor = TABELA_PITAGORICA[letra] || 0;
    somaBruta += valor;
    detalhes.push({ letra: letra, valor: valor });
  }

  const reducao = reduzirComPassos(somaBruta);

  return {
    nomeLimpo: limpo,
    detalhes: detalhes,
    somaBruta: somaBruta,
    passos: reducao.passos,
    numero: reducao.resultado
  };
}

/* ============================================================
   PASSO 3 — Busca o arcano
   ============================================================ */
function buscarArcano(numero) {
  return ARCANOS.find(a => a.numero === numero) || null;
}

/* ============================================================
   Formatação dos passos de redução
   Ex.: [29, 11] → "29 → 2 + 9 = 11"
   ============================================================ */
function formatarReducao(passos) {
  if (passos.length <= 1) return '';

  let texto = String(passos[0]);

  for (let i = 1; i < passos.length; i++) {
    const anterior = String(passos[i - 1]);
    const digitos = anterior.split('').join(' + ');
    texto += ` → ${digitos} = ${passos[i]}`;
  }

  return texto;
}

/* ============================================================
   Renderização
   ============================================================ */
document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById('resultado');
  if (!container) return;

  /* ---------- Lê parâmetros ---------- */
  const params = new URLSearchParams(window.location.search);
  const data = params.get('data') || '';
  const nome = params.get('nome') || '';

  /* ---------- Valida ---------- */
  const erroData = validarDataNascimento(data);
  const erroNome = validarNomeCompleto(nome);

  if (erroData !== null || erroNome !== null) {
    const msg = erroData || erroNome;
    container.innerHTML = `
      <div class="card card-form text-center p-4 p-md-5">
        <div class="display-4 mb-3">🔭</div>
        <h1 class="h4 mb-4">Não conseguimos calcular o arcano</h1>
        <div class="alert alert-warning mb-4">${escaparHtml(msg)}</div>
        <a href="arcano.html" class="btn btn-primary btn-destaque">
          Voltar e tentar novamente
        </a>
      </div>
    `;
    return;
  }

  /* ---------- PASSO 1 ---------- */
  const numData = calcularNumeroData(data);

  /* ---------- PASSO 2 ---------- */
  const numNome = calcularNumeroNome(nome);

  /* ---------- ARCANO PESSOAL = NÚMERO DA DATA ---------- */
  const arcano = buscarArcano(numData.numero);

  if (!arcano) {
    container.innerHTML = `
      <div class="card card-form text-center p-4 p-md-5">
        <div class="display-4 mb-3">🎴</div>
        <h1 class="h4 mb-4">Arcano não encontrado</h1>
        <a href="arcano.html" class="btn btn-primary btn-destaque">Voltar</a>
      </div>
    `;
    return;
  }

  /* ---------- Listas de luz/sombra ---------- */
  const pontosFortesHtml = arcano.pontosFortes
    .map(p => `<li>${escaparHtml(p)}</li>`)
    .join('');

  const pontosFracosHtml = arcano.pontosFracos
    .map(p => `<li>${escaparHtml(p)}</li>`)
    .join('');

  /* ---------- Chips letra-a-letra ---------- */
  const detalhesNomeHtml = numNome.detalhes
    .map(d => `
      <span class="letra-chip" title="Letra ${d.letra} = ${d.valor}">
        <strong>${d.letra}</strong>
        <span>${d.valor}</span>
      </span>
    `)
    .join('');

  /* ---------- Textos das reduções ---------- */
  const reducaoDataTexto = formatarReducao(numData.passos);
  const reducaoNomeTexto = formatarReducao(numNome.passos);

  /* ---------- Render ---------- */
  container.innerHTML = `
    <article class="card card-arcano p-4 p-md-5"
             style="--cor-arcano:${arcano.cor}; --cor-arcano-glow:${arcano.corSuave}">

      <header class="text-center mb-4">
        <div class="arcano-etiqueta">Arcano Nº ${arcano.numero}</div>
        <div class="arcano-simbolo">${arcano.simbolo}</div>
        <h1 class="display-4 fw-bold titulo-gradiente mb-2">
          ${escaparHtml(arcano.nome)}
        </h1>
        <p class="text-secondary mb-1">${escaparHtml(arcano.arquetipo)}</p>
        <p class="small text-secondary mb-0">
          ${escaparHtml(nome)} • ${numData.dataBR}
        </p>
      </header>

      <!-- ================================================ -->
      <!--  COMO O ARCANO FOI CALCULADO                      -->
      <!-- ================================================ -->

      <section class="mb-4">
        <h2 class="h5 secao-titulo">Como o seu arcano foi calculado</h2>

        <div class="calculo-grid">

          <!-- Passo 1: Data -->
          <div class="calculo-card calculo-final">
            <div class="calculo-passo">1</div>
            <div class="calculo-conteudo">
              <span class="calculo-rotulo">Data de nascimento</span>

              <span class="calculo-data">${numData.dataBR}</span>

              <span class="calculo-formula">
                ${numData.digitos.join(' + ')}
                = <strong>${numData.somaBruta}</strong>
              </span>

              ${reducaoDataTexto
      ? `<span class="calculo-reducao">${escaparHtml(reducaoDataTexto)}</span>`
      : ''}

              <span class="calculo-resultado calculo-resultado-final">
                Arcano: <strong>${numData.numero}</strong>
              </span>
            </div>
          </div>

          <!-- Passo 2: Nome -->
          <div class="calculo-card">
            <div class="calculo-passo">2</div>
            <div class="calculo-conteudo">
              <span class="calculo-rotulo">Nome completo (pitagórico)</span>

              <span class="calculo-data">${escaparHtml(nome)}</span>

              <span class="calculo-formula">
                Soma das letras = <strong>${numNome.somaBruta}</strong>
              </span>

              ${reducaoNomeTexto
      ? `<span class="calculo-reducao">${escaparHtml(reducaoNomeTexto)}</span>`
      : ''}

              <span class="calculo-resultado">
                Vibração do nome: <strong>${numNome.numero}</strong>
              </span>
            </div>
          </div>

          <!-- Passo 3: Explicação -->
          <div class="calculo-card">
            <div class="calculo-passo">3</div>
            <div class="calculo-conteudo">
              <span class="calculo-rotulo">Como ler isso</span>
              <span class="calculo-formula">
                Seu arcano pessoal vem da <strong>data de nascimento</strong>.
              </span>
              <span class="calculo-formula">
                A vibração do nome <strong>colore</strong> a leitura,
                mas não substitui o arcano.
              </span>
            </div>
          </div>

        </div>

        <details class="detalhes-nome mt-3">
          <summary>Ver letra por letra do nome</summary>
          <div class="letras-container">${detalhesNomeHtml}</div>
        </details>

      </section>

      <!-- ================================================ -->
      <!--  FIM DO BLOCO DE CÁLCULO                          -->
      <!-- ================================================ -->

      <section class="mb-4">
        <h2 class="h5 secao-titulo">Sobre o seu arcano</h2>
        <p class="mb-0 texto-corpo">${escaparHtml(arcano.descricao)}</p>
      </section>

      <section class="mb-4">
        <h2 class="h5 secao-titulo">Luz e sombra do arcano</h2>

        <div class="row g-3 mt-1">

          <div class="col-12 col-lg-6">
            <div class="card-lado lado-bom">
              <div class="lado-cabecalho">
                <span class="lado-emoji">🌟</span>
                <span class="lado-titulo">Lado bom</span>
              </div>
              <ul class="lado-lista">${pontosFortesHtml}</ul>
            </div>
          </div>

          <div class="col-12 col-lg-6">
            <div class="card-lado lado-ruim">
              <div class="lado-cabecalho">
                <span class="lado-emoji">⚠️</span>
                <span class="lado-titulo">Lado ruim</span>
              </div>
              <ul class="lado-lista">${pontosFracosHtml}</ul>
            </div>
          </div>

        </div>
      </section>

      <section class="mb-4">
        <h2 class="h5 secao-titulo">Sua missão</h2>
        <div class="card-missao">
          <span class="missao-emoji">🎯</span>
          <p class="mb-0">${escaparHtml(arcano.missao)}</p>
        </div>
      </section>

      <section class="mb-4">
        <h2 class="h5 secao-titulo">Conselho do arcano</h2>
        <div class="card-conselho">
          <span class="conselho-emoji">💡</span>
          <p class="mb-0">${escaparHtml(arcano.conselho)}</p>
        </div>
      </section>

      <div class="d-flex flex-column flex-sm-row gap-2 mt-4">
        <a href="arcano.html" class="btn btn-primary btn-destaque flex-fill">
          🔄 Descobrir outro arcano
        </a>
        <a href="index.html" class="btn btn-outline-light flex-fill">
          🔮 Ver meu signo
        </a>
        <button type="button" class="btn btn-outline-light flex-fill"
                onclick="window.print()">
          🖨️ Imprimir
        </button>
      </div>

    </article>
  `;
});