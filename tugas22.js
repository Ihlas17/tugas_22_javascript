function fore(f){
let temp = ''
temp=f.split(' ').forEach(function(a,b){
    console.log('item : '+a+' index ke '+b) 
})
return temp
}console.log(fore('Saya ingin belajar bersama'))