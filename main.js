class Mssge{
    constructor(user_name,send_time,message_text){
        this.user_name=user_name;
        this.send_time=send_time;
        this.message_text=message_text;
    }
    toHtml(){
        return `<p>${this.send_time} ${this.user_name}: ${this.message_text}</ p>< /b>`;

    }
    
}
class Mssngr{
    constructor(user_name,send_time,message_text){
        this.user_name=user_name;
        this.send_time=send_time;
        this.message_text=message_text;

    }
    show_history() {
    }
    send(author, text){
    }
}
    let now = new Date();
    let newDate=`${now.getHours()}:${now.getMinutes()}`;
  document.querySelector("#send").addEventListener("click",addTasks);

  function addTasks(){
    let author=document.querySelector("#name").value;
    let text=document.querySelector("#message").value;
    document.querySelector(".list").innerHTML+=
    `
    <div style="border:1px solid black; width:max-content;">
    <p>Istifadəçi: ${author}</p>
    <p>Göndərdiyi mətn: ${text}</p>
    </div>`;
    }

document.querySelector("#show").addEventListener("click",addDate);

function addDate(){

    document.querySelector(".list").innerHTML+=`<div style="border:1px solid black; margin-top:10px; width:max-content;">
    Göndərilən tarix: ${newDate}</div>`;
}