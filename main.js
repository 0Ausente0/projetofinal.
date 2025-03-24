function Salvar() {
    let date1 = document.getElementById("data1").value;
    let date2 = document.getElementById("data2").value;
    if (date1 && date2) {
        localStorage.setItem('savedadata1', date1);
        localStorage.setItem('savedadata2', date2);
    }
    else {
        let savedadata1 = localStorage.getItem('savedadata1');
        let savedadata2 = localStorage.getItem('savedadata2');
        if (savedadata1 && savedadata2) {
            document.getElementById("data1").value = savedadata1;
            document.getElementById("data2").value = savedadata2;
            alert("Datas carregadas com sucesso!");
        } else {
            alert("Nenhuma data salva encontrada.");
        }
    }
}
window.onload = function() {
    let savedadata1 = localStorage.getItem('savedadata1');
    let savedadata2 = localStorage.getItem('savedadata2');

    if (savedadata1 && savedadata2) {
        document.getElementById("data1").value = savedadata1;
        document.getElementById("data2").value = savedadata2;
    }
};