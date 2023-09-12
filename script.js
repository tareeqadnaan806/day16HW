const textarea = document.getElementById("textarea")

textarea.addEventListener("keyup", (e)=>{
    // console.log(textarea.value);
    localStorage.setItem("textarea value", textarea.value)
})

textarea.innerText = localStorage.getItem("textarea value")
