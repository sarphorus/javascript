var a = new Date()
var hora = a.getHours()
console.log(`Agora são exatamente ${hora} horas.`)
if(hora < 12){
    console.log("Bom dia!")
} else if(hora < 18){
    console.log("Boa tarde!")
} else{
    ("Boa noite")
}