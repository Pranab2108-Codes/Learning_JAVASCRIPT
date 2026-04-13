var fPara = document.getElementById('fPara');                                 /* Here we are getting the ID first, so we can have our element as event-target. */
function changeText(event){                                                   /* This is the actual action which going to be happen after the click event occur. */

    console.log(event);
    fPara.textContent = "Pranab Sethi";

}
fPara.addEventListener('click',changeText);                                   /* Here the click is the event, and whatever the actions will be there that can be applied by the changeText function but we cant mention it as normal function like function_name(). */

fPara.removeEventListener('click',changeText);                                /* We can remove the event listener, so there will be no more action occur when the event will trigger. */


var fPara = document.getElementById('fPara');                                 /* This is also another way to add event's action but we dont prefer this usually, because here the function will takes a memory which is only recognize by this part only and when we remove that same function we can not be access the same address, because it will be different. */
fPara.addEventListener('click', function (){

    fPara.textContent = "Pranab Sethi";

});

fPara.removeEventListener('click',function (){                                /* Here this function will not points to the same address. */
    
    fPara.textContent = "Pranab Sethi";

});


let anchorElement = document.getElementById('firstAnchor');
function changeAnchorDefault(event){                                          /* Here we are changing this anchor tag to redirect to another page. */
    
    event.preventDefault();                                                   /* Here we are preventing the default action. */
    anchorElement.textContent = "Click done sir";                             /* Now when we click the hyperlink it will show this. */

}
anchorElement.addEventListener('click',changeAnchorDefault);


let paragraphs = document.querySelectorAll('p');                              /* Here we are taking all paragraph tags at once, and all of these store in a array like structure. */
function giveAlertParagraph(event){

    alert("Hey you have Clicked on para: " +event.target.textContent);        /* It will generate the alert, if we would've clicked on either First or Paragraph then it will show whole paragraph, doesn't mean what is inside of this paragraph, and if we would've clicked on first or span then it will show only first span or second span or so on.... */

}
for(let i=0;i<paragraphs.length;i++){

    let para = paragraphs[i];                                                 /* When there will be multiple tags of same element, it comes with in array structure. */
    para.addEventListener('click',giveAlertParagraph);

}


function alertSpanOnly(event){    

    if(event.target.nodeName === 'SPAN'){                                     /* Here we have set the alert with a particular tag only like span here, nodeName is neccessary. */
        
        alert("You have only clicked on " +event.target.textContent);         /* The event.target gives the browser */
    
    }
}


let divWrapper = document.getElementById('wrapper');
divWrapper.addEventListener('click',alertSpanOnly);                           /* event.currentTarget is the element where EventListener is being attached to, and "event.target" is the actual element which we have clicked and it will send this to browser automatically. */