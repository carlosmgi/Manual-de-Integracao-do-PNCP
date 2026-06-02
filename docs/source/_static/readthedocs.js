document.addEventListener("DOMContentLoaded", function () {
    // Lista de seletores comuns para caixas de pesquisa em vários temas
    const searchSelectors = [
        "[role='search'] input",
        "input[name='q']",
        ".wy-side-nav-search input",
        "#rtd-search-form input",
        ".bd-search input"
    ];

    // Tenta encontrar a caixa de pesquisa usando os seletores acima
    let searchInput = null;
    for (let selector of searchSelectors) {
        searchInput = document.querySelector(selector);
        if (searchInput) break;
    }

    // Se encontrou a caixa de pesquisa, aplica o evento
    if (searchInput) {
        searchInput.addEventListener("focus", function (e) {
            // Evita que a pesquisa padrão do tema interfira
            e.preventDefault();
            
            // Dispara o evento para abrir o modal nativo do Read the Docs
            const event = new CustomEvent("readthedocs-search-show");
            document.dispatchEvent(event);
        });
    } else {
        console.warn("Read the Docs Custom Search: Não foi possível encontrar o input de pesquisa na página.");
    }
});
