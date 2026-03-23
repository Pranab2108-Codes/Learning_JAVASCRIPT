const time1 = performance.now();                                         /* This tells the exact time, here we are computing the start time, means before execution. */
for(let i=1;i<=10000;i++){
    let para = document.createElement('p');                              /* Here we are each time means 10000 times we are creating a paragraph. */
    para.textContent = "This is paragraph No. " +i;                      /* Here in each paragraph we are setting the content of paragraph. */
    document.body.appendChild(para);                                     /* Here when we attached to the document so that it will show/render in browser, means here it will reflow and do repaint. */
}                                                                        /* So we are here doing this "document.body.appendChild()" 10000 times so reflow and repaint happening 10000 times both respectively. */
const time2 = performance.now();                                         /* This give the time after execution of our code structure. */
console.log("Total time:" +(time2-time1));                               /* So this will be the total time. */


const time3 = performance.now();
let myDiv = document.createElement('div');                               /* This is fast than above code, because first we are making the div container. */
for(let i =1;i<=10000;i++){
    let para = document.createElement('p');                              /* Here each time we are creating the paragraph, meas 10000 times. */
    para.textContent = "This is paragraph No. " +i;                      /* Adding the content in paragraph. */
    myDiv.appendChild(para);                                             /* Then appending the paragraph inside of div container. */
}
document.body.appendChild(myDiv);                                        /* Because of appending this div container as child of the document, doesn't matter in where like body, or head or anywhere it will do reflow and repaint to render in browser, so here only 1 reflow and 1 repaint, because only appending mydiv container into document 1 time only. */
const time4 = performance.now();
console.log("Total time: " +(time4-time3));


const time5 = performance.now();
let fragment = document.createDocumentFragment();                        /* This might be fast or a little bit slow than the above code, because here we are using document Fragment, first we are creating here the document fragment. */
for(let i =1;i<=10000;i++){
    let para = document.createElement('p');                              /* Here each time, means we are creating the paragraph 10000 times. */
    para.textContent = "This is paragraph No." +i;                       /* Here we are attaching the content into the paragraph. */
    fragment.appendChild(para);                                          /* Now here we are appending the paragraph into the fragment. */
}
document.body.appendChild(fragment);                                     /* Here only 1 time we are appending the fragment into the document. */
const time6 = performance.now();
console.log("Total time: " +(time6-time5));