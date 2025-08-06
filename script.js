function normalizeText(text) {
  return text
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function verificarRespostas() {
  const gabarito = {
    q1: "2",
    q2: "diminui",
    q3: "9",
    q4: "curva",
    q5: "decrescente",
    q6: "1",
    q7: "reais",
    q8: "positivos",
    q9: "3",
    q10: "13x"
  };

  let acertos = 0;
  let erros = 0;
  let respostasUsuario = [];

  for (let i = 1; i <= 10; i++) {
    const nome = `q${i}`;
    const input = document.querySelector(`input[name="${nome}"]:checked`);

    let respostaUsuario = '';

    if (input) {
      respostaUsuario = input.value;
      if (normalizeText(respostaUsuario) === normalizeText(gabarito[nome])) {
        acertos++;
      } else {
        erros++;
      }
    } else {
      erros++;
    }

    respostasUsuario.push(`Pergunta ${i}: ${respostaUsuario || 'sem resposta'}`);
  }

  // Exibir resultado no quiz
  const resultadoDiv = document.getElementById("resultado");
  resultadoDiv.innerHTML = `
    <h2>Resultado:</h2>
    <p>Você acertou ${acertos} de 10 questões.</p>
  `;

  // Preencher campos ocultos com os resultados
  document.getElementById('campoAcertos').value = acertos;
  document.getElementById('campoErros').value = erros;
  document.getElementById('campoResumo').value = respostasUsuario.join('\n');

  // Salvar no localStorage para visualização futura (caso necessário)
  const email = document.getElementById('email').value || 'anonimo';
  const resultado = {
    acertos,
    erros,
    data: new Date().toLocaleString()
  };
  const banco = JSON.parse(localStorage.getItem('quizResultados') || '{}');
  banco[email] = resultado;
  localStorage.setItem('quizResultados', JSON.stringify(banco));
}

function enviarAvaliacao() {
  // Quando o feedback for enviado, preenche os campos ocultos com os valores de acertos e erros
  const acertos = document.getElementById('campoAcertos').value;
  const erros = document.getElementById('campoErros').value;
  const resumo = document.getElementById('campoResumo').value;

  if (!acertos || !erros) {
    alert("Por favor, verifique suas respostas antes de enviar o feedback.");
    return;
  }

  // O Formspree irá processar o envio do formulário agora com as informações de acertos e erros
  const feedbackForm = document.getElementById("feedbackForm");
  feedbackForm.submit();
}
