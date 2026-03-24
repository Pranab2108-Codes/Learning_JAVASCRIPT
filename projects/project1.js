document.addEventListener("DOMContentLoaded", function(){

    const searchButton = document.getElementById("search-button");
    const usernameInput = document.getElementById("user-input");
    const statsContainer = document.querySelector(".stats-container");
    const easyProgressCircle = document.querySelector(".easy-progress");
    const mediumProgressCircle = document.querySelector(".medium-progress");
    const hardProgressCircle = document.querySelector(".hard-progress");
    const easyLabel = document.getElementById("easy-label");
    const mediumLabel = document.getElementById("medium-label");
    const hardLabel = document.getElementById("hard-label");
    const cardStatsContainer = document.querySelector(".stats-cards");

    function validUserName(username){                                                          /* Return true or false based on the regular expression. */

        if(username.trim() === ""){

            alert("Username should not be empty");
            return false;

        }
        const regEx = /^[a-zA-Z0-9_-]+$/;
        const isMatching = regEx.test(username);
        if(!isMatching){

            alert("Invalid Username");

        }
        return isMatching;

    }

    let lastCallTime = 0;
    async function fetchUserDetails(username){

        const now = Date.now();
        if(now - lastCallTime < 3000){                                                         /* 3 sec gap. */

            alert("Please wait before trying again");
            return;

        }

        lastCallTime = now;
        try{

            searchButton.textContent = "Searching...";
            searchButton.disabled = true;
            const url = `https://leetcode-api-faisalshohag.vercel.app/${username}`;            
                
            const response = await fetch(url);
            if(!response.ok){
                
                throw new Error("Unable to fetch the user details");
                
            }
            const parsedData = await response.json();
            console.log("log in data: ",parsedData);
            displayUserData(parsedData);

        }
        catch(error){

            statsContainer.innerHTML = '<p> No data found.</p>'
        
        }
        finally{

            searchButton.textContent = "Search";
            searchButton.disabled=false;

        }

    }

    function updateProgress(solved, total,label,circle){

        const progressDegree = (solved/total) *100;
        circle.style.setProperty("--progress-degree", `${progressDegree}%`);
        label.textContent = `${solved}/${total}`;

    }

    function displayUserData(parsedData){

        const totalEasyQues = parsedData.totalEasy;
        const totalMediumQues = parsedData.totalMedium;
        const totalHardQues = parsedData.totalHard;

        const solvedEasyQues = parsedData.easySolved;
        const solvedMediumQues = parsedData.mediumSolved;
        const solvedHardQues = parsedData.hardSolved;

        updateProgress(solvedEasyQues, totalEasyQues, easyLabel, easyProgressCircle);
        updateProgress(solvedMediumQues, totalMediumQues, mediumLabel, mediumProgressCircle);
        updateProgress(solvedHardQues, totalHardQues, hardLabel, hardProgressCircle);

        const submissions = parsedData.totalSubmissions || [];

        const cardData = [

        {label: "Overall Submission", value: submissions[0]?.submissions || 0},
        {label: "Overall Easy Submission", value: submissions[1]?.submissions || 0},
        {label: "Overall Medium Submission", value: submissions[2]?.submissions || 0},
        {label: "Overall Hard Submission", value: submissions[3]?.submissions || 0},

        ];
        console.log("Card data is: ", cardData);

        cardStatsContainer.innerHTML = cardData.map(

            data => {

                return `
                    <div class="card">
                        <h3>${data.label}</h3>
                        <p>${data.value}</p>
                    </div>
                `

            }

        ).join("");

    }

    searchButton.addEventListener('click',function(){

        const username = usernameInput.value;
        console.log("Log in username: ", username);
        if(validUserName(username)){

            fetchUserDetails(username);

        }

    });
    
});
