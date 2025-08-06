<script>
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
      respostasUsuario.push(`Pergunta ${i}: ${respostaUsuario}`);
    } else {
      erros++;
      respostasUsuario.push(`Pergunta ${i}: sem resposta`);
    }
  }

  // Exibe na tela
  document.getElementById("resultado").innerHTML = `
    <h2>Resultado:</h2>
    <p>Você acertou ${acertos} de 10 questões.</p>
  `;

  // Preenche campos ocultos do formulário
  const campoAcertos = document.getElementById("campoAcertos");
  const campoErros = document.getElementById("campoErros");
  const campoResumo = document.getElementById("campoResumo");

  if (campoAcertos) campoAcertos.value = acertos;
  if (campoErros) campoErros.value = erros;
  if (campoResumo) campoResumo.value = respostasUsuario.join('\n');

  // Opcional: salvar no localStorage mesmo sem email
  const resultado = {
    acertos,
    erros,
    data: new Date().toLocaleString(),
    respostas: respostasUsuario
  };
  localStorage.setItem('resultadoQuiz', JSON.stringify(resultado));
}
</script>
