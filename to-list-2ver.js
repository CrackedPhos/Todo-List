const todoList = [];

function displayList(){
    let todoListHTML = '';

        for (let i = 0; i < todoList.length; i++){
            const valuesObj = todoList[i];
            //const name = valuesObj.name;
            //const dueDate = valuesObj.dueDate;
            const { name, dueDate} = valuesObj;
            const html = `
                <div>${name}</div> <div>${dueDate}</div>
                <button onclick="
                todoList.splice(${i},1);
                displayList();" class='delete'>delete</button>`;
            
            todoListHTML += html;
        }


        document.querySelector('.js-todo-list').innerHTML = `${todoListHTML}`;
}



function addTodo(){
    const inputElement = document.querySelector('.js-input');
    const name = inputElement.value;

    const dateInputElement = document.querySelector('.js-input-date');
    const dueDate =dateInputElement.value;

    todoList.push({
        name,
        dueDate,

    });
    //console.log(input);
    console.log(todoList);

    inputElement.value='';//This makes input box empty

    displayList();


}
