const botoes = document.querySelectorAll(".botao");
const detalhes = document.querySelectorAll(".pagina");

botoes.forEach((botao, indice) => {
	
	botao.addEventListener("click", () => {
		// Remova a classe 'selecionado' de todos os botões e detalhes
	
		botoes.forEach((botao) => 
		{
	
			botao.classList.remove("selecionado");
		});
		
		detalhes.forEach((detalhe) => 
		{
		
			detalhe.classList.remove("selecionado");
		});

		// Adicione a classe 'selecionado' apenas ao botão e detalhe clicados
		
		botao.classList.add("selecionado");
		
		detalhes[indice].classList.add("selecionado");
	
	});

	// Selecione o elemento com a classe "selecionado"
	const paginaSelecionada = document.querySelector(".selecionado");

	// Remova a classe "selecionado" da página selecionada
	paginaSelecionada.classList.remove("selecionado");

	// Selecione a página com a classe "pagina" para a qual deseja mover a classe "selecionado"
	const paginaDesejada = document.querySelector(".pagina");

	// Adicione a classe "selecionado" à página desejada
	paginaDesejada.classList.add("selecionado");
});