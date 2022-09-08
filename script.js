var arabic=document.getElementById("arabic");
var english=document.getElementById("english");
var title=document.getElementById("title");
//var text=document.getElementById("text");
var t1=document.getElementById("t1");
var t2=document.getElementById("t2");
var t3=document.getElementById("t3");
var t4=document.getElementById("t4");
var arabic=document.getElementById("arabic");
var english=document.getElementById("english");

arabic.onclick=()=>{
    getLanguage("arabic");
    localStorage.setItem("lang","arabic");

}

english.onclick=()=>{
    getLanguage("english");
    localStorage.setItem("lang","english");

}

function getLanguage(language){
    if(language=="arabic"){
        //title.innerHTML="مبرمج شيار";
        text.innerHTML="مترجم";
        t4.innerHTML="تواصل معنا";
        t3.innerHTML="موقعنا يدعم اللغتين العربية والانكليزية";
        t2.innerHTML="حول الموقع";
        t1.innerHTML="مرحبا بكم في موقع كودر شيار";
        arabic.innerHTML=`العربي`;
        english.innerHTML=`الانكليزية`;
    }
    else if(language=="english"){
       // title.innerHTML="Coder Shiyar";
        text.innerHTML="Translator";
        t4.innerHTML="Contact US";
        t3.innerHTML="Our website supports both Arabic and English";
        t2.innerHTML="About US";
        t1.innerHTML="welcome website of coder shiyar";
        arabic.innerHTML=`Arabic`;
        english.innerHTML=`English`;

        
    }

}
onload=()=>{
    getLanguage(localStorage.getItem("lang"));
}