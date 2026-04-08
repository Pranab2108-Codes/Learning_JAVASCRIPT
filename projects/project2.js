let globalId = 1;


function markAsDone(todoId) {

    const parent = document.getElementById(todoId);
    parent.children[2].innerHTML = "Done!";

}


function createChild(title, description, id) {

    const child = document.createElement("div");
    const firstGrandChild = document.createElement("div");
    firstGrandChild.innerHTML = title;
    const secondGrandChild = document.createElement("div");
    secondGrandChild.innerHTML = description;
    const thirdGrandChild = document.createElement("button");
    thirdGrandChild.innerHTML = "Mark as done";
    thirdGrandChild.setAttribute("onclick", `markAsDone(${id})`);
    child.appendChild(firstGrandChild);
    child.appendChild(secondGrandChild);
    child.appendChild(thirdGrandChild);
    child.setAttribute("id", id);
    return child;

}


// function addTodo() {

//     const title = document.getElementById("title").value;
//     const description = document.getElementById("description").value;
//     const parent = document.getElementById("todos");
//     parent.appendChild(createChild(title, description, globalId++));

// }


function updateDOMAccordingToState(state){

    const parent = document.getElementById("todos");
    parent.innerHTML= "";
    for(let i =0;i<state.length;i++){
        const child = createChild(state[i].title, state[i].description, state[i].id);
        parent.appendChild(child);
    }

}
// updateDOMAccordingToState([{

//     title: "Go to GYM",
//     description: "From 6:00 AM - 8:00 AM",
//     id: 1

// },
// {

//     title: "Go to STUDY",
//     description: "From 8:00 AM - 12:00 PM",
//     id: 2

// }]);

window.setInterval(async function() {

    const res = await fetch("https://sum-server.100xdevs.com/todos");
    const json = await res.json();
    updateDOMAccordingToState(json.todos);

},5000);