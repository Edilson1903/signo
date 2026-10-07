/* ============================================================
   Handler da página arcano.html
   - Popula a grade dos 22 arcanos
   - Valida nome + data e redireciona para arcano-resultado.html
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

    /* ---------- Popula a grade dos 22 arcanos ---------- */
    const lista = document.getElementById('listaArcanos');

    if (lista) {
        lista.innerHTML = ARCANOS.map(function (a) {
            return `
        <div class="col-6 col-md-4 col-lg-3">
          <div class="card mini-arcano h-100"
               style="--cor-arcano:${a.cor}; --cor-arcano-glow:${a.corSuave}">
            <div class="card-body text-center py-3">
              <div class="mini-arcano-numero">Arcano ${a.numero}</div>
              <div class="mini-arcano-simbolo">${a.simbolo}</div>
              <div class="fw-semibold">${escaparHtml(a.nome)}</div>
              <div class="small text-secondary">${escaparHtml(a.arquetipo)}</div>
            </div>
          </div>
        </div>
      `;
        }).join('');
    }

    /* ---------- Formulário ---------- */
    const form = document.getElementById('formArcano');
    if (!form) return;

    const inputNome = document.getElementById('nome_completo');
    const inputData = document.getElementById('data_nascimento');

    const feedbackNome = document.getElementById('feedbackNome');
    const feedbackData = document.getElementById('feedbackData');

    form.addEventListener('submit', function (evento) {
        evento.preventDefault();

        let valido = true;

        /* ----- Valida nome ----- */
        const erroNome = validarNomeCompleto(inputNome.value);

        if (erroNome !== null) {
            if (feedbackNome) feedbackNome.textContent = erroNome;
            inputNome.classList.add('is-invalid');
            valido = false;
        } else {
            inputNome.classList.remove('is-invalid');
        }

        /* ----- Valida data ----- */
        const erroData = validarDataNascimento(inputData.value);

        if (erroData !== null) {
            if (feedbackData) feedbackData.textContent = erroData;
            inputData.classList.add('is-invalid');
            valido = false;
        } else {
            inputData.classList.remove('is-invalid');
        }

        if (!valido) {
            (inputNome.classList.contains('is-invalid') ? inputNome : inputData).focus();
            return;
        }

        /* ----- Redireciona com nome + data ----- */
        const params = new URLSearchParams({
            nome: inputNome.value.trim(),
            data: inputData.value
        });

        window.location.href = 'arcano-resultado.html?' + params.toString();
    });

    inputNome.addEventListener('input', function () {
        inputNome.classList.remove('is-invalid');
    });
    inputData.addEventListener('input', function () {
        inputData.classList.remove('is-invalid');
    });
});