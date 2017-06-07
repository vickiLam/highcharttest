var ajaxhttp = new XMLHttpRequest();
var url = "test.json";

ajaxhttp.open("GET", url, ture);
ajaxhttp.setRequestHeader("content-type", "application/json")
ajaxhttp.onreadystatechange = function(){
  if(ajaxhttp.readyState == 4 && ajaxhttp.status == 200){
    var jcontent = JSON.parse(ajaxhttp.responseText);
    oupu.innerHTML = jcontent.volume;
    for(var myObj in jcontent){
      console.log(myObj);
      output.innerHTML += jcontent[myObj].volume + '<BR>';
    }
    console.log(jcontent);
  }
}
ajaxhttp.send(null);
