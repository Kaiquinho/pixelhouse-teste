function addToTable() {
    // Pega os dados localizados no formulário
    var fullname = document.getElementById("fullname").value;
    var birthdate = document.getElementById("birthdate").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
  
    // Pega a tabela
    var table = document.getElementById("userTable");
  
    var row = table.insertRow(-1);
  
    // Inseri novas celulas
    var nameCell = row.insertCell(0);
    var birthdateCell = row.insertCell(1);
    var emailCell = row.insertCell(2);
    var passwordCell = row.insertCell(3);
  
    // Adiciona os dados para as celulas da tabela
    nameCell.innerHTML = fullname
    birthdateCell.innerHTML = birthdate
    emailCell.innerHTML = email
    passwordCell.innerHTML = password
  
    // Mostra a tabela
    table.style.display = "block";
  }