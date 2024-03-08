function obterParametroDaURL(p) {
    
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get(p);
}

// Uso da função para obter e imprimir o parâmetro 'minhaString'
const paramSession = obterParametroDaURL('project');
document.addEventListener('DOMContentLoaded', function() {
    // console.log('deu bom')
    document.getElementById(paramSession).removeAttribute('hidden');
});
// (function(){
//     console.log('deu bom')

// })()