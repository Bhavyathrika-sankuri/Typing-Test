
document.addEventListener("DOMContentLoaded" , () => {

    const arr = [1,2,3,4,5,6,7,8,9,0,"q","W","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","c","v","b","n","m","<",">","?","!",":","{","}"];
    let card = document.querySelector("#text");
    let boxes = document.querySelector("#boxes");
    let reset = document.querySelector("#reset");
    let start = document.querySelector("#start");
    let count = 0;

    for(let i=0;i<=40;i++){
        let div= document.createElement("div");
        div.classList.add("box");
        boxes.append(div);
        div.innerText = arr[i];
        
        div.addEventListener("click", () => {
            count++;
            card.value = card.value+div.innerText;
            document.querySelector("#hit0").innerText = count;
        })
    }

    reset.addEventListener("click", () => {
        location.reload();
    })

    start.addEventListener("click",() => {
        setTimeout(()=>{
            alert("TIme Out!!");
            card.value = "";
            
        },3000);
    })

})
