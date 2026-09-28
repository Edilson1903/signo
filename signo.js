/* ============================================================
   Handler da página de resultado (signo.html)
   - Lê a data da query string (?data=YYYY-MM-DD)
   - Valida e monta o card do signo
   - Adiciona bloco DINÂMICO (previsão da semana, energia do dia,
     número/cor da sorte, fase da lua) baseado na data de acesso
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('resultado');
    if (!container) return;

    /* ---------- Lê a data da URL ---------- */
    const params = new URLSearchParams(window.location.search);
    const data = params.get('data') || '';

    /* ---------- Valida ---------- */
    const erro = validarDataNascimento(data);

    if (erro !== null) {
        container.innerHTML = `
      <div class="card card-form text-center p-4 p-md-5">
        <div class="display-4 mb-3">🔭</div>
        <h1 class="h4 mb-4">Ops! Não conseguimos identificar o signo</h1>
        <div class="alert alert-warning mb-4">${escaparHtml(erro)}</div>
        <a href="index.html" class="btn btn-primary btn-destaque">Voltar e tentar novamente</a>
      </div>
    `;
        return;
    }

    /* ---------- Busca o signo ---------- */
    const signo = buscarSignoPorData(data);

    if (!signo) {
        container.innerHTML = `
      <div class="card card-form text-center p-4 p-md-5">
        <div class="display-4 mb-3">🔭</div>
        <h1 class="h4 mb-4">Signo não encontrado</h1>
        <a href="index.html" class="btn btn-primary btn-destaque">Voltar</a>
      </div>
    `;
        return;
    }

    /* ---------- Conteúdo DINÂMICO (muda por dia/semana) ---------- */
    const dinamico = gerarConteudoDinamico(signo.slug);

    /* ---------- Monta as listas ---------- */
    const caracteristicasHtml = signo.caracteristicas
        .map(c => `<span class="badge-suave">${escaparHtml(c)}</span>`)
        .join('');

    const afinidadesHtml = signo.afinidades
        .map(a => `<span class="badge-suave">${escaparHtml(a)}</span>`)
        .join('');

    /* ---------- Renderiza ---------- */
    container.innerHTML = `
    <article class="card card-signo ${classeElemento(signo.elemento)} p-4 p-md-5">

      <header class="text-center mb-4">
        <div class="signo-simbolo">${signo.simbolo}</div>
        <h1 class="display-4 fw-bold titulo-gradiente mb-2">
          ${escaparHtml(signo.nome)}
        </h1>
        <p class="text-secondary mb-1">${escaparHtml(signo.periodo)}</p>
        <p class="small text-secondary mb-0">
          Nascimento em ${formatarDataBR(data)}
        </p>
      </header>

      <!-- ================================================ -->
      <!--  BLOCO DINÂMICO: muda a cada dia e a cada semana  -->
      <!-- ================================================ -->

      <section class="bloco-dinamico mb-4">

        <div class="dinamico-cabecalho">
          <span class="dinamico-pulso"></span>
          <span class="dinamico-titulo">Conteúdo da semana</span>
          <span class="dinamico-periodo">${dinamico.intervalo}</span>
        </div>

        <p class="dinamico-previsao">${escaparHtml(dinamico.previsao)}</p>

        <div class="row g-3 mt-1">

          <div class="col-12 col-md-6">
            <div class="info-dinamica">
              <span class="info-emoji">${dinamico.energia.emoji}</span>
              <div>
                <span class="info-rotulo">Energia do dia</span>
                <span class="info-valor">${escaparHtml(dinamico.energia.rotulo)}</span>
                <span class="info-dica">${escaparHtml(dinamico.energia.dica)}</span>
              </div>
            </div>
          </div>

          <div class="col-6 col-md-3">
            <div class="info-dinamica">
              <span class="info-emoji">🍀</span>
              <div>
                <span class="info-rotulo">Número da sorte</span>
                <span class="info-valor">${dinamico.numeroSorte}</span>
              </div>
            </div>
          </div>

          <div class="col-6 col-md-3">
            <div class="info-dinamica">
              <span class="info-emoji">🎨</span>
              <div>
                <span class="info-rotulo">Cor da semana</span>
                <span class="info-valor">
                  <span class="cor-amostra" style="background:${dinamico.corSorte.hex}"></span>
                  ${escaparHtml(dinamico.corSorte.nome)}
                </span>
              </div>
            </div>
          </div>

          <div class="col-12">
            <div class="info-dinamica">
              <span class="info-emoji">${dinamico.lua.emoji}</span>
              <div>
                <span class="info-rotulo">Fase da lua hoje</span>
                <span class="info-valor">${escaparHtml(dinamico.lua.nome)}</span>
              </div>
            </div>
          </div>

        </div>

        <p class="dinamico-aviso">
          🔄 Este conteúdo muda automaticamente. A próxima atualização semanal
          será em <strong>${dinamico.proximaAtualizacao}</strong>.
        </p>

      </section>

      <!-- ================================================ -->
      <!--  FIM DO BLOCO DINÂMICO                            -->
      <!-- ================================================ -->

      <section class="mb-4">
        <h2 class="h5 secao-titulo">Sobre o signo</h2>
        <p class="mb-0 texto-corpo">${escaparHtml(signo.descricao)}</p>
      </section>

      <section class="mb-4">
        <h2 class="h5 secao-titulo">Principais características</h2>
        <div class="d-flex flex-wrap gap-2">${caracteristicasHtml}</div>
      </section>

      <section class="mb-4">
        <h2 class="h5 secao-titulo">Combina com</h2>
        <div class="d-flex flex-wrap gap-2">${afinidadesHtml}</div>
      </section>

      <section class="mb-4">
        <h2 class="h5 secao-titulo">Curiosidades</h2>
        <p class="mb-0 texto-corpo">${escaparHtml(signo.sorte)}</p>
      </section>

      <div class="d-flex flex-column flex-sm-row gap-2 mt-4">
        <a href="index.html" class="btn btn-primary btn-destaque flex-fill">
          🔄 Descobrir outro signo
        </a>
        <button type="button" class="btn btn-outline-light flex-fill"
                onclick="window.print()">
          🖨️ Imprimir resultado
        </button>
      </div>

    </article>
  `;
});