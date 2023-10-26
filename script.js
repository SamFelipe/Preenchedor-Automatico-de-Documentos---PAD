// https://docx.js.org/#/?id=welcome
const dados = {
    nome,
    cargo,
    cpf,
    endereço,
    número,
    complemento,
    cidade,
    cep,
    jornada,
    horário,
    salário,
    admissão,
  };
  
  function formatarCPF(cpf) {
    var cpfFormatado = document.querySelector("#cpf").value // Remove qualquer coisa que não seja dígito
    cpfFormatado = cpfFormatado.replace(/(\d{3})(\d)/, '$1.$2'); // Coloca um ponto entre o terceiro e o quarto dígitos
    cpfFormatado = cpfFormatado.replace(/(\d{3})(\d)/, '$1.$2'); // Coloca um ponto entre o terceiro e o quarto dígitos novamente
    cpfFormatado = cpfFormatado.replace(/(\d{3})(\d{1,2})$/, '$1-$2'); // Coloca um hífen entre o terceiro e o quarto dígitos
    return cpfFormatado;
  }
  
  // Adiciona os eventos de click aos botões
  document.querySelector(".btn").addEventListener("click", function() {
    // Obtém os valores dos campos
    dados.nome = document.querySelector("#nome").value;
    dados.cargo = document.querySelector("#cargo").value;
    dados.cpf = formatarCPF(cpf);
    dados.endereço = document.querySelector("#endereço").value;
    dados.número = document.querySelector("#número").value;
    dados.complemento = document.querySelector("#complemento").value;
    dados.cidade = document.querySelector("#cidade").value;
    dados.cep = document.querySelector("#cep").value;
    dados.jornada = document.querySelector("#jornada").value;
    dados.horário = document.querySelector("#horário").value;
    dados.salário = document.querySelector("#salário").value;
    dados.admissão = document.querySelector("#admissão").value;
  
    // Abre o modelo de contrato
    const doc = new DOCX.Document();
    doc.load("modelo_contrato.docx");
  
    // Preenche os campos variáveis no documento
    for (const field of doc.paragraphs) {
      for (const key in dados) {
        if (field.text.includes(key)) {
          field.text = field.text.replace(key, dados[key]);
        }
      }
    }
  
    // Salva o documento preenchido
    doc.save("contrato_preenchido.docx");
  
    // Imprime uma mensagem de sucesso
    console.log("Contrato preenchido com sucesso!");
  });
  