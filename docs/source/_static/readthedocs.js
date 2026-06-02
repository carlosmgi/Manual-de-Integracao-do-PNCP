document.addEventListener("DOMContentLoaded", function () {

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
        alvo.childNodes.forEach(traduzirElemento);

        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                mutation.addedNodes.forEach(traduzirElemento);
            });
        });
        observer.observe(alvo, { childList: true, subtree: true });
    }

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
