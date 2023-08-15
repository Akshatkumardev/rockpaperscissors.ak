const todolist = [{
  name:'',
  duedate:''
}];

rendertodolist();

function rendertodolist(){
  let todolistHTML = '';

  todolist.forEach(function(todoObject,index){
    const{name,duedate} = todoObject;
    const html = `
      <div>${name}</div>
      <div>${duedate}</div> 
      <button onclick = "
        todolist.splice(${index},1);
        rendertodolist();
      " class = "deletebutton">Delete</button>
    
    `;
    todolistHTML+= html;
  })
 
 

  document.querySelector('.js-todo').innerHTML = todolistHTML;

}

function onKeydown(event){
  
  if(event.key === 'Enter'){
    addtodo();
  }
      
}

function addtodo(){
  const inputElement = document.querySelector('.js-nameinput');
  const name = inputElement.value;

  const datainputelement = document.querySelector('.js-duedateinput');
  const duedate = datainputelement.value;

  todolist.push({
    name,
    duedate
  })
  

  inputElement.value = '';
  rendertodolist();

}




