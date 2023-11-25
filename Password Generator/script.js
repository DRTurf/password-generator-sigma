const input_field = document.getElementById("input_field");
const generate = document.getElementById("generate");
const copy = document.getElementById("copy");
const pass_length = document.getElementById("pass_length");
const upper_case = document.getElementById("upper_case");
const lower_case = document.getElementById("lower_case");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols")
let finalStrings="";
let a;

pass_length.addEventListener("change", (e)=>{
    if(isNaN(Number(e.target.value))){
        pass_length.value="";
        return alert("Please Enter a numerical value.")
    }
   
    a=Number(e.target.value); console.log(a);
})

upper_case.addEventListener("click", ()=>{
    const upperString="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if(upper_case.value!="checked"){
        upper_case.value="checked";
        finalStrings+=upperString;
    }
    else if(upper_case.value=="checked"){
        upper_case.removeAttribute("value","checked");
        if(finalStrings.includes(upperString)){
            finalStrings=finalStrings.replace(upperString,"");
        }
    }
    console.log(finalStrings);
})

lower_case.addEventListener("click", ()=>{
    const lowerString="abcdefghijklmnopqrstuvwxyz";
    if(lower_case.value!="checked"){
        lower_case.value="checked";
        finalStrings+=lowerString;
    }
    else if(lower_case.value=="checked"){
        lower_case.removeAttribute("value","checked");
        if(finalStrings.includes(lowerString)){
            finalStrings=finalStrings.replace(lowerString,"");
        }
    }
    console.log(finalStrings);
})

numbers.addEventListener("click", ()=>{
    const nums="0123456789";
    if(numbers.value!="checked"){
        numbers.value="checked";
        finalStrings+=nums
    }
    else if(numbers.value=="checked"){
        numbers.removeAttribute("value","checked");
        if(finalStrings.includes(nums)){
            finalStrings=finalStrings.replace(nums,"");
        }
    }
    console.log(finalStrings);
})

symbols.addEventListener("click", ()=>{
    let allSymbols = '';
    for (let i = 32; i <= 126; i++) {
        const char = String.fromCharCode(i);
        if (!(/[A-Z0-9a-z ]/).test(char)) {
            allSymbols += char; 
        }
    }
    if(symbols.value!="checked"){
        symbols.value="checked";
        finalStrings+=allSymbols;
    }
    else if(symbols.value=="checked"){
        symbols.removeAttribute("value","checked");
        if(finalStrings.includes(allSymbols)){
            finalStrings=finalStrings.replace(allSymbols,"");
        }
    }
    console.log(finalStrings);
})

generate.addEventListener("click", ()=>{
    let generatedPassword="";
    for(let i=0; i<a; i++){
        generatedPassword+=finalStrings.charAt(Math.floor(Math.random()*finalStrings.length));
    }
    console.log(generatedPassword);
    input_field.value=generatedPassword;
    
})

 copy.addEventListener("click",()=>{
        console.log(input_field.value);
        navigator.clipboard.writeText(input_field.value);
})