

export function English(){
    document.getElementById("teste").innerHTML = languageEn.teste;

}

export function Portuguese(){
    document.getElementById("teste").innerHTML = languagePt.teste;
}

var languages ={
    "en":{
        "teste":"fuck"

    },
    "pt":{
        "teste":"fodase"

    }
}

function getLanguageEn() {
    return languages.en;
}

function getLanguagePt() {
    return languages.pt;
}

const languageEn =  getLanguageEn();
const languagePt = getLanguagePt();