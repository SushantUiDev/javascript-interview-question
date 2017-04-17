function extractMe(){
  var str1="orange , Banana , Apple" ;
  //var newStr=str1.slice(7,13);
  //var newStr=str1.substring(-7,13);//substring can not accepts negative indexes
  var str2=str1.substr(7,1)//2nd parameter defines the length of extracted string
  alert(str2);
  document.getElementById("p1").innerHTML=str2 ;
  	
}