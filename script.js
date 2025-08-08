document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('feedbackForm');

  form.addEventListener('submit', function (event) {
    // Corrigir e contar respostas
    const gabarito = {
      'pergunta 1': '2',
      'pergunta 2': 'diminui',
      'pergunta 3': '9',
      'pergunta 4': 'curva crescente'
      'pergunta 5': 'decrescente'
      'pergunta 6': '1'
      'pergunta 7': 'reais'
      'pergunta 8': 'positivos'
      'pergunta 9': '3'
      'pergunta 10': '13x'

    };

    const normalizeText = (text) =>
      text.trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

    let acertos = 0;
    let erros = 0;

    const p1 = document.querySelector('input[name="pergunta 1"]:checked');
    const p2 = document.querySelector('input[name="pergunta 5"]:checked');
    const p3 = document.querySelector('input[name="pergunta 5"]:checked');
    const p4 = document.querySelector('input[name="pergunta 4"]:checked');
    const p5 = document.querySelector('input[name="pergunta 5"]:checked');
    const p6 = document.querySelector('input[name="pergunta 5"]:checked');
    const p7 = document.querySelector('input[name="pergunta 5"]:checked');
    const p8 = document.querySelector('input[name="pergunta 5"]:checked');
    const p9 = document.querySelector('input[name="pergunta 5"]:checked');
    const p10 = document.querySelector('input[name="pergunta 5"]:checked');

    if (p1 && p1.value === gabarito['pergunta 1']) acertos++; else erros++;
    if (p2 && p2.value.replace(/\s+/g, '') === gabarito['pergunta 5'].replace(/\s+/g, '')) acertos++; else erros++;
    if (p3 && p3.value.replace(/\s+/g, '') === gabarito['pergunta 5'].replace(/\s+/g, '')) acertos++; else erros++;
    if (p4 && p4.value.replace(/\s+/g, '') === gabarito['pergunta 4'].replace(/\s+/g, '')) acertos++; else erros++;
    if (p5 && p5.value.replace(/\s+/g, '') === gabarito['pergunta 5'].replace(/\s+/g, '')) acertos++; else erros++;
    if (p6 && p6.value.replace(/\s+/g, '') === gabarito['pergunta 5'].replace(/\s+/g, '')) acertos++; else erros++;
    if (p7 && p7.value.replace(/\s+/g, '') === gabarito['pergunta 5'].replace(/\s+/g, '')) acertos++; else erros++;
    if (p8 && p8.value.replace(/\s+/g, '') === gabarito['pergunta 5'].replace(/\s+/g, '')) acertos++; else erros++;
    if (p9 && p9.value.replace(/\s+/g, '') === gabarito['pergunta 5'].replace(/\s+/g, '')) acertos++; else erros++;
    if (p10 && p10.value.replace(/\s+/g, '') === gabarito['pergunta 5'].replace(/\s+/g, '')) acertos++; else erros++;

    const resumo = `
      Pergunta 1: ${p1 ? p1.value : 'sem resposta'}
      Pergunta 2: ${p2 ? p2.value : 'sem resposta'}
      Pergunta 3: ${p3 ? p3.value : 'sem resposta'}
      Pergunta 4: ${p4 ? p4.value : 'sem resposta'}
      Pergunta 5: ${p5 ? p5.value : 'sem resposta'}
      Pergunta 6: ${p6 ? p6.value : 'sem resposta'}
      Pergunta 7: ${p7 ? p7.value : 'sem resposta'}
      Pergunta 8: ${p8 ? p8.value : 'sem resposta'}
      Pergunta 9: ${p9 ? p9.value : 'sem resposta'}
      Pergunta 10: ${p10 ? p10.value : 'sem resposta'}
    `;

    document.getElementById('campoAcertos').value = acertos;
    document.getElementById('campoErros').value = erros;
    document.getElementById('campoResumo').value = resumo.trim();

    alert(`Você acertou ${acertos} e errou ${erros}. Enviando seu feedback...`);
  });
});
