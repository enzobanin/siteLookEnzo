function reserva(formulario) {
    nome = formulario.nome.value;
    sobrenome = formulario.sobrenome.value;
    email = formulario.email.value;
    telefone = formulario.tel.value;
    pessoas = formulario.pessoas.value;
    data = formulario.data.value;
    hora = formulario.hora.value;
    opcao = formulario.opcoes.selectedIndex;

    let res;
    switch (opcao) {
        case 0:
            res = "da rede social";
            break;
        case 1:
            res = "de revistas/jornais";
            break;
        case 2:
            res = "de anúncios";
            break;
        case 3:
            res = "dos amigos";
            break;
        case 4:
            res = "de outros";
    }
    document.getElementById("dados").innerHTML = "A reserva foi marcado por " + nome + " " + sobrenome + "." + " Seu email é " + email + ", telefone : " + telefone + 
    " . A mesa foi reservada para " + pessoas + " pessoas"+ ", no dia " + data + " às " + hora + " e conheceu nosso restaurante por meio " + res + ".";
}