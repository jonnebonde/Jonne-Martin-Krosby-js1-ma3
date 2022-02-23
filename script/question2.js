const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=69c560cd78c84554953747e1790c6b33";

const resultsContainer = document.querySelector(".container");
const loadingContainer = document.querySelector(".loader");



setTimeout(function() {

    async function getApi() {

        try {
                const response = await fetch(url);
            
                const results = await response.json();
            
                const facts = results.results;
            
                //console.log(facts.length)
               
                //console.log(facts);
            
                for(let i = 0; i < facts.length; i++) {
                    //console.log(facts[i].name)
                    //console.log(facts[i].rating)
                    //console.log(facts[i].tags)
            
                    if(i === 8) {
                        break;
                    }
                    
                    const gameName = facts[i].name;
                    const gameRating = facts[i].rating;
                    const gameTags = (facts[i].tags).length;

                  loadingContainer.innerHTML = "";  
                  resultsContainer.innerHTML += `<div class="result">
                                                    <h2>Name: ${gameName}</h2>
                                                    <p>Rating: ${gameRating}</p>
                                                    <p>Number of tags: ${gameTags}</div>`
                } 
            }
        
        catch (error) {
            console.log("error while loading API")
            resultsContainer.innerHTML = errorMessage("The API wouldnt phone home, try to refresh page (press F5)")
        }
        
       
    }
    
    getApi();


}, 1000)


