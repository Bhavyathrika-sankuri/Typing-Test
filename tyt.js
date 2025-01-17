
document.addEventListener("DOMContentLoaded" , () => {

    let card = document.querySelector("#card");
    let boxs = document.querySelectorAll(".box");
    
    boxs.forEach((box) => {
        box.setAttribute("contenteditable", "true")
        box.addEventListener("click" , () => {
            box.focus();

        })

            box.addEventListener("keydown" , (event) => {
                card.innerText = card.innerText + box.innerText;
                console.log(event.key)
            })
        
    })
})
