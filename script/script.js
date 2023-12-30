const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");
const img4 = document.getElementById("img4");
const containerOne = document.getElementById("one");
const containerTwo = document.getElementById("two");
const containerThree = document.getElementById("three");
const containerFour = document.getElementById("four");
const containerFive = document.getElementById("five");

    // mobile view

let bool = true;


img1.addEventListener("touchstart",()=>{
    img2.src =  "../assets/images/icon-minus.svg" ;
    containerOne.style.display = (containerOne.style.display === "none") ? "block" : "none";  
    if(bool){
        img1.src =  "../assets/images/icon-plus.svg" ;
        bool = false;
    }else{
        img1.src = "../assets/images/icon-minus.svg";
        bool = true;
    }
});

img2.addEventListener("touchstart",()=>{
    img2.src =  "../assets/images/icon-plus.svg" ;
    containerTwo.style.display = (containerTwo.style.display === "none") ? "block" : "none";  
    if(bool){
        img2.src =  "../assets/images/icon-plus.svg" ;
        bool = false;
    }else{
        img2.src = "../assets/images/icon-minus.svg";
        bool = true;
    }
});

img3.addEventListener("touchstart",()=>{
    containerThree.style.display = (containerThree.style.display === "none") ? "block" : "none";  
    if(bool){
        img3.src =  "../assets/images/icon-plus.svg" ;
        bool = false;
    }else{
        img3.src = "../assets/images/icon-minus.svg";
        bool = true;
    }
});

img4.addEventListener("touchstart",()=>{
    containerFour.style.display = (containerFour.style.display === "none") ? "block" : "none";  
    if(bool){
        img4.src =  "../assets/images/icon-plus.svg" ;
        bool = false;
    }else{
        img4.src = "../assets/images/icon-minus.svg";
        bool = true;
    }
});

    // desktop view


    img1.addEventListener("click",()=>{
        img2.src =  "../assets/images/icon-minus.svg" ;
        containerOne.style.display = (containerOne.style.display === "none") ? "block" : "none";  
        if(bool){
            img1.src =  "../assets/images/icon-plus.svg" ;
            bool = false;
        }else{
            img1.src = "../assets/images/icon-minus.svg";
            bool = true;
        }
    });
    
    img2.addEventListener("click",()=>{
        img2.src =  "../assets/images/icon-plus.svg" ;
        containerTwo.style.display = (containerTwo.style.display === "none") ? "block" : "none";  
        if(bool){
            img2.src =  "../assets/images/icon-plus.svg" ;
            bool = false;
        }else{
            img2.src = "../assets/images/icon-minus.svg";
            bool = true;
        }
    });
    
    img3.addEventListener("click",()=>{
        containerThree.style.display = (containerThree.style.display === "none") ? "block" : "none";  
        if(bool){
            img3.src =  "../assets/images/icon-plus.svg" ;
            bool = false;
        }else{
            img3.src = "../assets/images/icon-minus.svg";
            bool = true;
        }
    });
    
    img4.addEventListener("click",()=>{
        containerFour.style.display = (containerFour.style.display === "none") ? "block" : "none";  
        if(bool){
            img4.src =  "../assets/images/icon-plus.svg" ;
            bool = false;
        }else{
            img4.src = "../assets/images/icon-minus.svg";
            bool = true;
        }
    });
