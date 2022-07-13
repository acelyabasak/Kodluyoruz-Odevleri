/**** Kullanıcı Adı İsteme ve Ekrana Yazdırma ****/
var userName = prompt("Kullanıcı adınızı giriniz:");
let myName = document.querySelector("#myName");
myName.innerHTML = `${userName}`;

/***** Saat Kodları ****/
var newDate = new Date();
var hours = newDate.getHours();
var minutes = newDate.getMinutes();
var seconds = newDate.getSeconds();
var days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];

let clock = document.querySelector("#myClock");
clock.innerHTML = `${hours}:${minutes}:${seconds} ${days[newDate.getDay()]}`;