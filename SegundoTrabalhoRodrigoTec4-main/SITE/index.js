start();

function start() {
    loadDataFromServer();
    let saveButton = document.getElementById('enviarBtn');
    saveButton.onclick = function() {
       save();
    };
}

function loadDataFromServer() {
    $.get('https://news-api-node.herokuapp.com/api/v1/news/', function(data) {
        addDataInTable(data);
    });
}

function addDataInTable(data) {
    let table = document.getElementById('men');
    let tbody = table.tBodies[0];
    tbody.innerHTML = '';

    data.forEach(function(item) {
        let line = document.createElement('tr');
        
        let nomeColumn = document.createElement('td');
        nomeColumn.innerHTML = item.nome;
        line.appendChild(nameColumn);

        let mensagemColumn = document.createElement('td');
        mensagemColumn.innerHTML = item.mensagem;
        line.appendChild(mensagemColumn);

        tbody.appendChild(line);
    });
}

function save() {
    let newCourse = {
        nome: document.getElementById('nome').value,
        mensagem: document.getElementById('mensagem').value
    };
    
    $.post("https://news-api-node.herokuapp.com/api/v1/news/", newCourse).done(function() {
        loadDataFromServer();
    });
}