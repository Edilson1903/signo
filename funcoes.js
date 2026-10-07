/* ============================================================
   Funções utilitárias: validação, busca e formatação
   ============================================================ */

/**
 * Valida a data no formato "YYYY-MM-DD".
 * Retorna null se estiver OK, ou a mensagem de erro.
 */
function validarDataNascimento(data) {
    if (!data) {
        return 'Informe a sua data de nascimento.';
    }

    const dt = new Date(data + 'T00:00:00');

    if (Number.isNaN(dt.getTime())) {
        return 'Data inválida.';
    }

    const [ano, mes, dia] = data.split('-').map(Number);
    if (
        dt.getFullYear() !== ano ||
        dt.getMonth() + 1 !== mes ||
        dt.getDate() !== dia
    ) {
        return 'Data inválida.';
    }

    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0);

    if (dt > hoje) {
        return 'A data de nascimento não pode estar no futuro.';
    }

    if (ano < 1900) {
        return 'Informe uma data a partir de 1900.';
    }

    return null;
}

/**
 * Valida o nome completo de nascimento.
 * Retorna null se estiver OK, ou a mensagem de erro.
 */
function validarNomeCompleto(nome) {
    if (!nome || !nome.trim()) {
        return 'Informe o seu nome completo de nascimento.';
    }

    // Remove acentos e mantém apenas letras
    const limpo = nome
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^A-Za-z]/g, '');

    if (limpo.length < 3) {
        return 'O nome precisa ter pelo menos 3 letras.';
    }

    if (limpo.length > 100) {
        return 'Nome muito longo. Use apenas o nome de nascimento.';
    }

    return null;
}

/**
 * Descobre o signo a partir da data "YYYY-MM-DD".
 * Compara apenas o trecho "MM-DD", tratando o caso de Capricórnio,
 * que atravessa a virada do ano.
 */
function buscarSignoPorData(data) {
    if (!data) return null;

    const [, mes, dia] = data.split('-');
    const mmdd = `${mes}-${dia}`;

    for (const signo of SIGNOS) {
        const { dataInicio, dataFim } = signo;

        const dentro = (dataInicio <= dataFim)
            ? (mmdd >= dataInicio && mmdd <= dataFim)
            : (mmdd >= dataInicio || mmdd <= dataFim);

        if (dentro) return signo;
    }

    return null;
}

/**
 * Converte "YYYY-MM-DD" em "DD/MM/YYYY".
 */
function formatarDataBR(data) {
    const [ano, mes, dia] = data.split('-');
    return `${dia}/${mes}/${ano}`;
}

/**
 * Converte o nome do elemento em uma classe CSS segura.
 */
function classeElemento(elemento) {
    const mapa = {
        'Fogo': 'elemento-fogo',
        'Terra': 'elemento-terra',
        'Ar': 'elemento-ar',
        'Água': 'elemento-agua'
    };
    return mapa[elemento] || 'elemento-neutro';
}

/**
 * Escapa caracteres HTML (proteção contra injeção de HTML).
 */
function escaparHtml(texto) {
    const div = document.createElement('div');
    div.textContent = String(texto);
    return div.innerHTML;
}