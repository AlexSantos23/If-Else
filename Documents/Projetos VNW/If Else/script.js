let idade = 21
if(idade >= 18){
    console.log("Acesso concedido")
} else{
    console.log("Acesso negado")
}

let humano = true
if(idade >= 18 && humano===true){
    console.log("Humano e maior de idade")
} else{
    console.log("Humano e menor de idade")
}

let mes = "Dezembro"
if(mes === "Dezembro" || mes === "janeiro"){
    console.log("Você faz aniversário em Janeiro ou Dezembro")
}

let letra = "A"
if(letra === "R"){
    console.log("Seu nome começa coma letra R")
} else{
    console.log("Seu nome não começa com a letra R")
}

let sobrenome = "Santos"
if(sobrenome == 6 || sobrenome == "E"){
    console.log("Seu sobrenome tem mais de 6 letras ou começa com E")
} else{
    console.log("Seu sobrenome não tem mais de 6 letras ou não começa com E")
}