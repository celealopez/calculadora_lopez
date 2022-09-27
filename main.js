document.querySelector('#calcular').addEventListener('click', ()=>{
    const n1 = parseFloat(document.querySelector('#n1').value);
    const n2 = parseFloat(document.querySelector('#n2').value);
    const op = document.querySelector('#op').value;

    if(op == '+'){
        r = n1 + n2;
    }else if(op == '-'){
        r = n1 - n2;
    }else if(op == '*'){
        r = n1 * n2;
    }else if(op == '/'){
        r = n1 / n2;
    }else if(op == ""){
        alert('debe elegir un operador')
        return ""
    }
    console.log(r)

    document.querySelector('#r').innerHTML = r;
})