// Ativa o modal de pesquisa do Read the Docs ao focar no input de busca do seu tema
document.querySelector("[role='search'] input").addEventListener("focusin", () => {
    const event = new CustomEvent("readthedocs-search-show");
    document.dispatchEvent(event);
});
