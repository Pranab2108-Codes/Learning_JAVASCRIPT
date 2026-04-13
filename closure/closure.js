function init(){

    let name = "Safari";
    function displayName(){

        console.log(name);             /* Required data got bind. */

    }
    return displayName;

}
let new_Function = init();
new_Function();