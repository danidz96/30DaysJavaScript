const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

function handleCheck(e) {
    // Comprobar si está presionada la tecla shift
    // Y comprobar que se chequea
    let inBetween = false;
    if (e.shiftKey && this.checked) {
        // Recorrer todos los checkbox
        checkboxes.forEach(checkbox => {
            console.log(checkbox);
            if (checkbox === this || checkbox === lastChecked) {
                inBetween = !inBetween;
            }
            if (inBetween) {
                checkbox.checked = true
            }
        });
    }

    lastChecked = this;
} 

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));