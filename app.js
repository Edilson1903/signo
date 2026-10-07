/* ============================================================
   Handler da página inicial (index.html)
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

  const lista = document.getElementById('listaSignos');

  if (lista) {
    lista.innerHTML = SIGNOS.map(function (s) {
      return `
        <div class="col-6 col-md-4 col-lg-3">
          <div class="card mini-signo ${classeElemento(s.elemento)} h-100">
            <div class="card-body text-center py-3">
              <div class="mini-simbolo">${s.simbolo}</div>
              <div class="fw-semibold">${escaparHtml(s.nome)}</div>
              <div class="small text-secondary">${escaparHtml(s.elemento)}</div>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  const form = document.getElementById('formSigno');
  if (!form) return;

  const input = document.getElementById('data_nascimento');
  const feedback = input.parentElement.querySelector('.invalid-feedback');

  form.addEventListener('submit', function (evento) {
    evento.preventDefault();

    const valor = input.value;
    const erro = validarDataNascimento(valor);

    if (erro !== null) {
      if (feedback) feedback.textContent = erro;
      input.classList.add('is-invalid');
      input.focus();
      return;
    }

    window.location.href = 'signo.html?data=' + encodeURIComponent(valor);
  });

  input.addEventListener('input', function () {
    input.classList.remove('is-invalid');
  });
});