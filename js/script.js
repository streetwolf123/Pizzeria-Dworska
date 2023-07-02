let toggle = true;



if (toggle = true) {
    let timeSlot = document.querySelector(".time__paragraph");


    setInterval(() => {
        const newDate = new Date();
        const h = newDate.getHours();
        const m = newDate.getMinutes();
        const s = newDate.getSeconds();
        
        timeSlot.innerHTML =  h  + ":"  +  m + ":" + s;
    }, 1000)
}






