
document.getElementById('inputPalavra').addEventListener('input', contarLetras);

function contarLetras() {
    const palavra = document.getElementById('inputPalavra').value.toLowerCase();
    const vogais = palavra.match(/[aáâãàäåāąăæeéêèëēėěęĕêiíììïīīıoóôõòöøōőœuúüùûūůűų]/gi) || [];
    const consoantes = palavra.match(/[bcdfghjklmnpqrstvwxyzç]/gi) || [];
    
    document.getElementById('quantVogais').textContent = vogais.length;
    document.getElementById('quantConsoantes').textContent = consoantes.length;
}