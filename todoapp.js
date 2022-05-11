var incomplete = [];
var complete = [];

function pushIncomplete(){
    
     if(document.getElementById("add-update").innerHTML == 'update'){
        document.getElementById("add-update").innerHTML = 'Add'
        Update();
        
        //document.getElementById(id).innerHTML=renderCompleted();
     }
     else{
        var newItem = document.getElementById("new-task").value;
        incomplete.push(newItem);
        console.log(incomplete);
        renderIncompleted();
     }  
}
function renderIncompleted(){
    var text="<ul id='incomplete-tasks'>"
    for(let i=0; i<incomplete.length; i++){
        text +="<li><input type='checkbox'  onchange='pushComplete(this)' id='"+ incomplete[i] +"'><label>"+incomplete[i]+"</label><input type='text'><button class='edit' onclick='Edit(this)'>Edit</button><button class='delete' onclick='del(this)'>Delete</button></li></ul>"
       // console.log('id is',incomplete[i]);
    }
    document.getElementById("incomplete-tasks").innerHTML=text;
    return text;
}

function pushComplete(obj){
      console.log(obj);
      var chkli = obj.closest('li');
      var nodes = Array.from(chkli.parentElement.children);
      var index = nodes.indexOf(chkli);
      console.log(index);
      complete.push(incomplete[index]);
      incomplete.splice(index,1);
      console.log('incompleted',incomplete);
      document.getElementById("incomplete-tasks").innerHTML=renderIncompleted();
    //  for(let i=0; i<incomplete.length ;i++){
    //     var chkd = document.getElementById(incomplete[i]).checked;
    //     if(chkd == true){
    //          complete.push(incomplete[i]);
    //     }
    // }
    console.log('incompleted',incomplete);
    console.log('complete',complete);
    renderCompleted();
} 
function renderCompleted(){
    var text=""
    for(let i=0; i<complete.length; i++){
        text +="<li><input type='checkbox'  onchange='pushComplete()' id='"+ complete[i] +"' checked><label>"+complete[i]+"</label><input type='text'><button class='edit' onclick='Edit(this)'>Edit</button><button class='delete' onclick='del(this)'>Delete</button></li>"
       // console.log('id is',incomplete[i]);
    }
    document.getElementById("completed-tasks").innerHTML=text;
    return text;
}
var id;
var index;
function Edit(obj){
    console.log(obj);
    var editli =obj.closest('li');
    id = editli.parentElement.id;
    // alert(id);
    var nodes = Array.from(editli.parentElement.children);
    index = nodes.indexOf(editli);
    if(id == 'completed-tasks'){
        var editValue = complete[index];
        // complete.splice(index ,1);
        // document.getElementById(id).innerHTML=renderCompleted();
    } 
    else{
        var editValue = incomplete[index];
        // incomplete.splice(index ,1);
        // document.getElementById(id).innerHTML=renderIncompleted();
    }
    document.getElementById("new-task").value=editValue;
    document.getElementById("add-update").innerHTML="update";
}
function Update()
    {
        console.log("hello");
        var updatedItem = document.getElementById("new-task").value;
        if(id == 'completed-tasks')
        {
            complete[index] = updatedItem;
            document.getElementById(id).innerHTML=renderCompleted();
        }
        else
        {
            incomplete[index]= updatedItem;
            document.getElementById(id).innerHTML=renderIncompleted();
        }
    }

    function del(obj)
    {
        console.log(obj);
        var deleteli =obj.closest('li');
        id = deleteli.parentElement.id;
        alert(id);
        var nodes = Array.from(deleteli.parentElement.children);
        index = nodes.indexOf(deleteli);
        if(id == 'completed-tasks'){
             complete.splice(index ,1);
             document.getElementById(id).innerHTML=renderCompleted();
        } 
        else{
             incomplete.splice(index ,1);
             document.getElementById(id).innerHTML=renderIncompleted();
        }
    }
    