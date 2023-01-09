
var text = "" ;
var arr = [];

for(var i=0; i<26; i++){
arr[i] = String.fromCharCode(65+i); }

var n;
n=7;

for(var r=0; r<n; r++){
for(var c=0; c<=r; c++){
text+= arr[c];  }

for(var s=c-2; s>=0; s--){
text+= arr[s]; }

text += "<br>"; }

for(var r2=n-2; r2>=0; r--){
for(var c2=0; c2<=r2; c2++){
text+= arr[c2];  }

for(var s2=c2-2; s2>=0; s2--){
text+= arr[s2]; }

text += "<br>"; }

var final = document.querySelector(".mytext");
final.innerHTML=text;