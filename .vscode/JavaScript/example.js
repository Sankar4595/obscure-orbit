let name = 'reactareacta';
let result = '';

for(let i=0; i<name.length; i++){
    if(name[i]!='a'){
        result = result + name[i] + ' ';
    }
} console.log(result);