

const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=69c560cd78c84554953747e1790c6b33";

const resultsContainer = document.querySelector(".result-container");


setTimeout(function() {

    async function getApi() {

        
        try {
                const response = await fetch(url);
            
                const results = await response.json();
            
                const facts = results.results;
            
              
                resultsContainer.innerHTML = "" ;
            
                for(let i = 0; i < facts.length; i++) {
                  
            
                    if(i === 8) {
                        break;
                    }
                    
                    const gameName = facts[i].name;
                    const gameRating = facts[i].rating;
                    const gameTags = (facts[i].tags).length;

                                   
                    resultsContainer.innerHTML += `<div class="result">
                                                    <h2>Name: ${gameName}</h2>
                                                    <p>Rating: ${gameRating}</p>
                                                    <p>Number of tags: ${gameTags}</div>`
                } 
            }
        
        catch (error) {
            console.log("error while loading API")
            resultsContainer.innerHTML = errorMessage("Could`n fetch the API, try to refresh page (press F5)")
        }
        
       
    }
    
    getApi();


}, 1100) 


