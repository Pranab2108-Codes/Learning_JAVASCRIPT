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

function addTodo() {                                                                   /* No need of this button anymore when we use the solution of updateDOMAccordingToState. */

    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const parent = document.getElementById("todos");
    parent.appendChild(createChild(title, description, globalId++));

}


function updateDOMAccordingToState(state){                                             /* As we know there can be many things happen inside a website while refresh, might get add, update and delete so the 1st solution is to make the DOM blank completely and then add from starting as much as we want only. */

    const parent = document.getElementById("todos");
    parent.innerHTML= "";
    for(let i =0;i<state.length;i++){
        const child = createChild(state[i].title, state[i].description, state[i].id);
        parent.appendChild(child);
    }

}

updateDOMAccordingToState([{                                                           /* In a website adding is not the only aperation we should perform, there can be many opeartions in real world which are possible and must need to do like update, delete. */

    title: "Go to GYM",                                                                /* We can directly pass the todos into the website instead of writing in placeholder. */
    description: "From 6:00 AM - 8:00 AM",                                             /* Of course we don't need Add Todo button here if we are doing it manually earlier. */
    id: 1

},                                                                                     /* No need of this updateDOMAccordingToState here if we go for the setInterval because in setInterval the todos are coming automatically by API, we are not sending or creating it manually. */
{

    title: "Go to STUDY",
    description: "From 8:00 AM - 12:00 PM",
    id: 2

}]);

window.setInterval(async function() {                                                   /* Here as we know many opeartions can happen in a refresh, this API also gives different todos each time we refresh */

    const res = await fetch("https://sum-server.100xdevs.com/todos");                   /* Through this we can make sure how things happen in real world while refreshing many things get add, update and delete all at the same time in a website. */
    const json = await res.json();
    updateDOMAccordingToState(json.todos);                                              /* If we focus to change those things only which need to be change in a website and remain as it is for the rest of content then it will be more optimize than doing like aking the DOM blank and then put only that much content which we want it to be screening. */

},5000);                                                                                /* That's why the best optimize solution is to introduce React because , react is the only thing which store the old values of DOM in it's virtual DOM and find the difference between the old content and in upcoming new content and at last it will only update those things which are new to DOM, and remain those things which are common in old content and upcoming new content and in final it's update the virtual DOM according to the new DOM. */                                                    
