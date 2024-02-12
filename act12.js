document.querySelector('#addTask').addEventListener('click', () => {
    
    if (document.querySelector('#todoInput').value != ""){
        document.querySelector('#taskList').innerHTML += 
        `<div>
        <button class="doneButton">Done</button>
        <span>${document.querySelector('#todoInput').value}</span>
        <hr>
        </div>`;
        document.querySelector('#todoInput').value = "";
    }else{
        alert("Your output is empty!");
    }
} )