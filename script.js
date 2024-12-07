
 async function fetch_advice(){
    const url ="https://api.adviceslip.com/advice";
    try{
        const res=await fetch(url);
        if(!res.ok){
            throw new Error(`Response status :${res.status}`);
        }

        const json=await res.json();
        document.getElementById("advice_box").innerHTML=json.slip.advice;
    }
    catch(error){
        console.error(error.message);
    }
 }




function get_time_stamp(){
const now= new Date();
const date= now.getDate()+"/"+(now.getMonth()+1)+"/"+now.getFullYear();
const time= now.getHours()+":"+now.getMinutes()+":"+now.getSeconds();
document.getElementById("time").innerHTML=time;
document.getElementById("date").innerHTML=date;

}

function set_page(){
    get_time_stamp();
    fetch_advice();
    document.getElementById("slip").classList.add("show");
}

function reset_page(){
    document.getElementById("time").innerHTML="";
    document.getElementById("date").innerHTML="";
    document.getElementById("advice_box").innerHTML="";
    document.getElementById("slip").classList.remove("show");
}






