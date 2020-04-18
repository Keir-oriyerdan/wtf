const okButton = document.getElementById("okbutton");

const texttop = document.getElementById("texttop");

const textbottom = document.getElementById("textbottom")

const activecollection = document.getElementsByClassName("active");
const displaytexttop = activecollection[0].firstChild;
const displaytextbottom = activecollection[0].lastChild;

const img = document.querySelectorAll(".img");
console.log(img);



okButton.onclick = function(event){
    event.preventDefault();

    displaytexttop.innerHTML = texttop.value;
    displaytextbottom.innerHTML = textbottom.value;

}

img.forEach(function(element){
    element.onclick = function(event){

        console.log(element);

        if (!element.className.includes("active")){
            img.forEach(function(image){
                image.classList.remove("active");
            })
            element.classList.add("active");   
        }
       
    }

}) 










