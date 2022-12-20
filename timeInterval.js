function greeting () {
    // const nu = null
    let name = prompt("lütfen isminizi giriniz","");
    if(name != null){
        document.querySelector("#myName").innerHTML =  name;       
    }      
}
greeting();

function showTime() {
    let date = new Date().toLocaleTimeString() 
    let days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    document.getElementById("myClock").innerHTML= `${date} ${days[new Date().getDay()]}`  // date + days[new Date().getDay()]
}
setInterval(showTime,1000)
showTime();
