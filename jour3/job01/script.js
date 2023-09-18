document.addEventListener("DOMContentLoaded", function (){

    const nbr1 =  document.getElementById('nbr1');
    const nbr2 = document.getElementById('nbr2');
    const errorMsg = document.getElementById('errorMsg');
    const result = document.getElementById('result');
    const submit = document.getElementById('submit');
    const submit2 = document.getElementById('submit2')

    submit.addEventListener("click", () =>{
        let inputValue1 = parseInt(nbr1.value);
        let inputValue2 = parseInt(nbr2.value);
        document.aler
        if(inputValue1 !== "" || inputValue2 !== "" ){
            if(!isNaN(inputValue1) || !isNaN(inputValue2)){
                errorMsg.textContent = "";
                let sum = inputValue1 + inputValue2;
                let sous = inputValue1 - inputValue2;
                let div = inputValue1 / inputValue2;
                let mult = inputValue1 * inputValue2;

                let container = document.getElementById('list')
                let ul = document.createElement('ul');

                let li1 = document.createElement('li');
                li1.textContent = "Le resultat de l'addition est " + sum;

                let li2 = document.createElement('li');
                li2.textContent = "Le resultat de la soustraction est " + sous;

                let li3 = document.createElement('li');
                li3.textContent = "Le resultat de la division est " + div;

                let li4 = document.createElement('li');
                li4.textContent = "Le resultat de la multiplication est " + mult;

                ul.appendChild(li1);
                ul.appendChild(li2);
                ul.appendChild(li3);
                ul.appendChild(li4);

                container.appendChild(ul);
            } else{
                errorMsg.textContent = "Les nombres entrée ne sont pas valide.";
            }
        } else{
            errorMsg.textContent = "Un des champs et vide.";
        }

    });

    // console.log(nbr2.value);
})