var takeItems = document.getElementById('inputList');
var btn = document.getElementById('btn');

//var lableTxt=document.getElementById("lableItem");
//console.log(lableTxt);
var list = document.getElementById('list');
var item_list = document.getElementById('item-list');
var btnClear = document.getElementById('btnClear');
console.log(takeItems);




btn.addEventListener('click' , (e) =>{
    console.log(takeItems.value);
    //console.log(list.value);
    //lableTxt.value=takeItems.value;
    //list.textContent=takeItems.value;
    //list.append(takeItems.value);
    var txt= takeItems.value;
    
    var li = document.createElement('li');
    var ch = document.createElement('input');
    ch.type="checkbox";
    ch.name="name";
    ch.value="value";
    ch.id="id";
    
    li.appendChild(ch);
    li.appendChild(document.createTextNode(txt));
    //li.innerHTML = txt;
    list.appendChild(li);
    

})


btnClear.addEventListener('click' , (e) =>{
    
    list.remove();
    
})
