// Initialization

let availableCopy = parseInt(document.getElementById("available-copy-number").innerText);

let bookmarkCount = parseInt(document.getElementById("bookmark-count").innerText);

let availableCoins = parseInt(document.getElementById("available-coins").innerText);

let serviceCards = document.getElementsByClassName("service-card");

let callHistory = document.getElementById("history-container");

let clearHistory = document.getElementById("history-clear-bttn");

// Bookmark Event 

let bookmarkBtns = document.getElementsByClassName("bookmark-bttn");
for (let btn of bookmarkBtns){
    btn.addEventListener("click", function(){
        bookmarkCount++;
        document.getElementById("bookmark-count").innerText = bookmarkCount;
    })
}

// Copy Event


for(let card of serviceCards){
        card.addEventListener("click", function(e){
        if(e.target.classList.contains("copy-bttn")){
            e.preventDefault();
            availableCopy++;
            document.getElementById("available-copy-number").innerText = availableCopy;
        
            let serviceNumber = e.currentTarget.querySelector(".call-number").innerText;
            navigator.clipboard.writeText(serviceNumber).then(function(){
                alert("Number Has Been Copied : " + serviceNumber);
            })          
        }
    })
}

// Call and add history event 


for(let card of serviceCards){
        card.addEventListener("click", function(e){
        if(e.target.classList.contains("call-bttn")){
            e.preventDefault();
            if(availableCoins >= 20){
                availableCoins = availableCoins - 20;
                document.getElementById("available-coins").innerText = availableCoins;
            }else{
                alert("❌ You don't have enough coins! need at least 20 coins to make a call.");
            return;
            }

            let serviceTitle = card.querySelector(".card-title").innerText;
            let serviceNumber = card.querySelector(".call-number").innerText;
            alert("📞 Calling " + serviceTitle + " " + serviceNumber + " ...");
            let history = document.createElement("li");
            history.classList.add("flex","justify-between", "items-center", "p-4", "rounded-lg", "bg-gray-100")
            let date = new Date().toLocaleTimeString();

            // Appending the history item in history list

            history.innerHTML = `
               <span>
                    <h3 class="text-[18px] font-medium font-primary">
                        ${serviceTitle}
                    </h3>
                        <p class="text-[18px] font-normal text-gray-600 font-primary">
                            ${serviceNumber}
                        </p>
                </span>
                <span class="text-[18px] font-medium font-primary">
                     ${date}
                </span>
            ` 
            callHistory.appendChild(history);  
        }
    })
}

// Clear history event 

clearHistory.addEventListener("click", function(){
    callHistory.innerHTML = " "; 
})