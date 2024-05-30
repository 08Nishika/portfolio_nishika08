// the array for typing effect

var aboutArr = ["FullStack Developer","Coding Enthusiast","Web developer"];

/* Function to make typing effect */

function typing (){
    let typingSpan = document.querySelector('#typingEffect');
    let letterIndex = 0;
    let index = 0;
    let deletion = 0;

    setInterval(() => {
         if (typingSpan.innerText.length != aboutArr[index].length){

            
            if (!deletion){
             

                typingSpan.innerHTML = typingSpan.innerHTML + aboutArr[index][letterIndex++];
              
                
            }
            
            else{
                typingSpan.innerText = typingSpan.innerText.slice(0 , typingSpan.innerText.length - 1);
                
                if (typingSpan.innerText.length == 0){
                    deletion = 0;
                    index = (index + 1)%3;
                    letterIndex = 0;
                }
            }
        }
        
        else{
        
            deletion = 1;
            typingSpan.innerText = typingSpan.innerText.slice(0 , typingSpan.innerText.length - 1);
        }
        
    },100)
}


setTimeout(() => {
    typing();
}, 980);