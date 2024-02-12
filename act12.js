document.querySelector('#addTask').addEventListener('click', () => {
    
    if (document.querySelector('#todoInput').value != ""){
        document.querySelector('#taskList').innerHTML += 
        `<div>
        <button class="doneButton">Done</button>
        <button class ="removeButton">Remove</button>
        <span>${document.querySelector('#todoInput').value}</span>
        </div>`;
        document.querySelector('#todoInput').value = "";
    }else{
        alert("Your output is empty!");
    }

    let doneButtons = document.querySelectorAll('.doneButton');{

        doneButtons.forEach(doneButton => {
            doneButton.addEventListener('click', (event) => {
                event.target.parentElement.lastElementChild.style =
                "text-decoration: line-through; background-color: green; color: white;";
                event.target.remove();
            } )
        })
    }

    let removeButtons = document.querySelectorAll('.removeButton');{

        removeButtons.forEach(removeButton => {
            removeButton.addEventListener('click', (i) => {
                i.target.parentElement.remove();
            })
        })
    }

} )