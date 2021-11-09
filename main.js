var takeItems = document.getElementById('inputList');
var btn = document.getElementById('btn');
var btndelete = document.getElementById('btndelete');
var chToDo =document.getElementById('chToDo');
//var lableTxt=document.getElementById("lableItem");
//console.log(lableTxt);
var list = document.getElementById('list');
var item_list = document.getElementById('item-list');
var btnClear = document.getElementById('btnClear');





btn.addEventListener('click' , (e) =>{
    
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



btndelete.addEventListener('click' , (e) =>{
    //console.log(takeItems.value);
    //var inputs = list.getElementsByTagName('input');
    console.log(list);
    var arr =[];
    

    for (var i=0 ; i< list.length; i++ ){
        if(list[i].type === 'checkbox' && list[i].checked){
        arr.push(list[i].value);
        console.log(arr);

        }
        list.remove(arr);
        console.log(list);
}
   
   
})  


btnClear.addEventListener('click' , (e) =>{
    
    list.remove();
    
})
