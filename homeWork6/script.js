// 1) Task of home work

let urNum = [];
let urNumWithSpacesBetween = [];
document.getElementById("urNum").innerHTML = urNum;

function myFunction(){
    urNum.push(+document.getElementById("numb").value);
    document.getElementById("urNum").innerHTML = urNum;
    let input1 = document.getElementById('numb');
    input1.value = "";
}
function myFunction1() {
    let rezultat = 0;
    let sumaNumerePare = 0;
    let sumaNumereImpare = 0;
    for(let e = 0; e < urNum.length; e++){
        if (urNum[e] % 2 == 0){
            sumaNumerePare += urNum[e];
        } else {
            sumaNumereImpare += urNum[e];
        }
    }
    if(sumaNumereImpare > sumaNumerePare){
        rezultat = sumaNumereImpare - sumaNumerePare;
    } else {
        rezultat = sumaNumerePare - sumaNumereImpare;
    }
    document.getElementById("urResult").innerHTML = rezultat;
}
function myFunction2(){
    urNum = [];
    document.getElementById("urNum").innerHTML = "";
    document.getElementById("urResult").innerHTML = "";
}
const input = document.getElementById('numb');
input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("myBtn").click();
  }
});

// 2) Task of home work

let task2array = [
    {
        title: "Nike",
        price: 300,
        type: "shoes"
    },
    {
        title: "Puma",
        price: 400,
        type: "shoes"
    }, 
    {
        title: "BMW",
        price: 7000,
        type: "car"
    },
    {
        title: "Chanel",
        price: 1200,
        type: "perfume"
    }
];

for(let j = 0; j < task2array.length; j ++){
    if(task2array[j].type === "shoes"){
        console.log(task2array[j].title);
    }
}

// 3) Task of home work

let task3array = [];
for(let z = 0; z < task2array.length; z++){
    if(task2array[z].price < 1000){
        task3array.push(task2array[z]);
    }
}

// Finish