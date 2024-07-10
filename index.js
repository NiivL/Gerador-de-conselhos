const btn_generate = document.querySelector(".advice-update");
const advice_id = document.querySelector(".advice-id");
let advice_description = document.querySelector(".advice-description");

async function buscarInfoNaApi(){
try{
    const url = "https://api.adviceslip.com/advice"
    const resposta = await fetch(url);
    return await resposta.json();

}catch(err){
    console.log(err);
}};

buscarInfoNaApi();

async function generate(){
    const infoDaApi = await buscarInfoNaApi();
    advice_id.innerText = "Advice #" + infoDaApi.slip.id;
    advice_description.innerText = infoDaApi.slip.advice;
}


