let h1 = document.querySelector('h1');
let  btn = document.querySelector('button');
let inp =  document.querySelector('input');
let ul= document.querySelector('ul');

btn.addEventListener('click',()=>{
    console.log(inp.value);
    let items = document.createElement('li');
     items.innerText=inp.value;
     let deletebtn = document.createElement('button');
     deletebtn.innerText="delete";
    deletebtn.classList.add('delete');
     items.appendChild(deletebtn);
     

        
    ul.appendChild(items);
    inp.value=" ";

    
})



ul.addEventListener('click',(e)=>{
    console.dir(e.target);
    if(e.target.nodeName="BUTTON"){
        let listItem = e.target.parentElement;
        listItem.remove();
    }
    
})