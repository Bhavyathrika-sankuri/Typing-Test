
document.addEventListener("DOMContentLoaded" , () => {

    let card = document.querySelector("#card");
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
