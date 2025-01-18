
document.addEventListener("DOMContentLoaded" , () => {

    const arr = [1,2,3,4,5,6,7,8,9,0,"q","W","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","c","v","b","n","m","<",">","?","!",":","{","}"];
    let card = document.querySelector("#card");
    let boxes = document.querySelector("#boxes");

    for(let i=0;i<=40;i++){
        let div= document.createElement("div");
        div.classList.add("box");
        boxes.append(div);
        div.innerText = arr[i];
    }

    
    let boxs = document.querySelectorAll(".box");
    let count = 0;

    boxs.forEach((box) => {
        box.setAttribute("contenteditable", "true")

            box.addEventListener("focus" , (event) => {
                card.innerText = card.innerText + box.innerText;
                count++;
                document.querySelector("#hit0").innerText = count;  
            })        
    })
})
