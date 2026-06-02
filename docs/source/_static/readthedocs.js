document.addEventListener("DOMContentLoaded", function () {
    // 1. MAPEAMENTO DO BOTÃO DE PESQUISA
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

    // 2. FUNÇÃO PARA INJETAR ESTILO (Aumentar a largura do modal)
    function customizarLarguraModal(shadowRoot) {
        // Verifica se o estilo já foi injetado para não duplicar
        if (shadowRoot.querySelector('#rtd-custom-width-style')) return;

        const estilo = document.createElement('style');
        estilo.id = 'rtd-custom-width-style';
        
        // Aplica uma largura maior (ex: 850px) e garante que ela responda bem em telas menores
        estilo.textContent = `
            .rtd-search-modal-container, 
            .DocSearch-Modal, 
            div[class*="modal"], 
            div[class*="container"] {
                max-width: 850px !important; 
                width: 90% !important;
            }
        `;
        shadowRoot.appendChild(estilo);
    }

    // 3. TRADUÇÃO DO MODAL E AJUSTES VISUAIS
    function traduzirElemento(elemento) {
        if (!elemento) return;

        if (elemento.nodeType === Node.TEXT_NODE) {
            let texto = elemento.nodeValue;
            if (texto.includes("Enter to select")) {
                elemento.nodeValue = texto.replace("Enter to select", "Enter para selecionar");
            }
            if (texto.includes("Up / Down to navigate")) {
                elemento.nodeValue = texto.replace("Up / Down to navigate", "Setas para navegar");
            }
            if (texto.includes("to select")) {
                elemento.nodeValue = texto.replace("to select", "para selecionar");
            }
            if (texto.includes("to navigate")) {
                elemento.nodeValue = texto.replace("to navigate", "para navegar");
            }
            if (texto.includes("to close")) {
                elemento.nodeValue = texto.replace("to close", "para fechar");
            }
            return;
        }

        if (elemento.placeholder && elemento.placeholder.includes("Search docs")) {
            elemento.placeholder = "Pesquisar na documentação...";
        }

        if (elemento.shadowRoot) {
            observarETraduzir(elemento.shadowRoot);
        }

        elemento.childNodes.forEach(traduzirElemento);
    }

    function observarETraduzir(alvo) {
        // Se for um Shadow DOM, injeta o estilo de largura
        if (alvo.nodeType === Node.DOCUMENT_FRAGMENT_NODE || alvo.shadowRoot) {
            customizarLarguraModal(alvo);
        }

        alvo.childNodes.forEach(traduzirElemento);

        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                mutation.addedNodes.forEach(node => {
                    if (alvo.nodeType === Node.DOCUMENT_FRAGMENT_NODE || alvo.shadowRoot) {
                        customizarLarguraModal(alvo);
                    }
                    traduzirElemento(node);
                });
            });
        });
        observer.observe(alvo, { childList: true, subtree: true });
    }

    // Procura o componente do Read the Docs
    const rtdSearchComponent = document.querySelector("readthedocs-search");
    
    if (rtdSearchComponent) {
        if (rtdSearchComponent.shadowRoot) {
            observarETraduzir(rtdSearchComponent.shadowRoot);
        } else {
            const rtdObserver = new MutationObserver(() => {
                if (rtdSearchComponent.shadowRoot) {
                    observarETraduzir(rtdSearchComponent.shadowRoot);
                    rtdObserver.disconnect();
                }
            });
            rtdObserver.observe(rtdSearchComponent, { attributes: true, childList: true });
        }
    } else {
        observarETraduzir(document.body);
    }
});
