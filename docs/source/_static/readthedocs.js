document.addEventListener("DOMContentLoaded", function () {
    // 1. MAPEAMENTO DO BOTÃO DE PESQUISA (Código que já funcionou)
    const searchSelectors = [
        "[role='search'] input",
        "input[name='q']",
        ".wy-side-nav-search input",
        "#rtd-search-form input",
        ".bd-search input"
    ];

    let searchInput = null;
    for (let selector of searchSelectors) {
        searchInput = document.querySelector(selector);
        if (searchInput) break;
    }

    if (searchInput) {
        searchInput.addEventListener("focus", function (e) {
            e.preventDefault();
            const event = new CustomEvent("readthedocs-search-show");
            document.dispatchEvent(event);
        });
    }

    // 2. TRADUÇÃO DOS BOTÕES DO MODAL (Português do Brasil)
    // Criamos um observador que fica de olho na página esperando o modal abrir
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.addedNodes.length) {
                // Procura pelas dicas de teclado dentro do modal do Read the Docs
                const commands = document.querySelectorAll(".rtd-search-hits-footer-commands-command, .DocSearch-Commands-Key");
                
                if (commands.length > 0) {
                    traduzirModal();
                }
            }
        });
    });

    // Inicia a observação no corpo do site
    observer.observe(document.body, { childList: true, subtree: true });

    function traduzirModal() {
        // Altera os textos de ajuda de navegação
        document.querySelectorAll(".rtd-search-hits-footer-commands-command").forEach(el => {
            let texto = el.innerHTML;
            if (texto.includes("to select")) {
                el.innerHTML = texto.replace("to select", "para selecionar");
            }
            if (texto.includes("to navigate")) {
                el.innerHTML = texto.replace("to navigate", "para navegar");
            }
            if (texto.includes("to close")) {
                el.innerHTML = texto.replace("to close", "para fechar");
            }
        });

        // Caso o tema use o padrão DocSearch/Algolia internamente:
        document.querySelectorAll(".DocSearch-Label").forEach(el => {
            if (el.textContent === "Select") el.textContent = "Selecionar";
            if (el.textContent === "Navigate") el.textContent = "Navegar";
            if (el.textContent === "Close") el.textContent = "Fechar";
        });
        
        // Traduz o placeholder interno do modal, se necessário
        const modalInput = document.querySelector(".rtd-search-modal-input, .DocSearch-Input");
        if (modalInput && modalInput.getAttribute("placeholder") === "Search docs") {
            modalInput.setAttribute("placeholder", "Pesquisar documentação...");
        }
    }
});
