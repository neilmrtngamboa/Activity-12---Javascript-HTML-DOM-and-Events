function addTolist (){
    let add = document.createElement ('li')

    let val = document.createTextNode(document.querySelector('#todoInput').value);

    add.appendChild(val);

    document.querySelector('#taskList').appendChild('add');

}


