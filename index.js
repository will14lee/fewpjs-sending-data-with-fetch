// Add your code here
let nameButt=document.querySelector("button#nameButton")
let mailButt=document.querySelector("button#mailButton")
nameButt.addEventListener("click", ()=>{
    let nameInput=document.querySelector("input#name")
    let pName= document.querySelector("p#pName")
    if(nameInput.value!==""){
    pName.innerHTML=nameInput.value
    }
    else{
        alert("Please type a name!")
    }
});
mailButt.addEventListener("click", ()=>{
    let mailInput=document.querySelector("input#email")
    let mMail= document.querySelector("p#pMail")
    if(mailInput.value!==""){
    mMail.innerHTML=mailInput.value
    }
    else{
        alert("Please type an email")
    }
})

const data={
    dogName: "Bryon",
    dogBreed: "Poodle"
};
const configurationObject= {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
        },
        body: JSON.stringify(data)
};

fetch("http://localhost:3000/dogs", configurationObject)
    .then(function(response) {
        return response.json();
    })
    .then(function(object) {
        console.log(object);
    })
    .catch(function(error){
        alert("Cease and Desist!");
        console.log(error.message);
    });

