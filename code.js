//search system
var words = ["af", "asf", "asl", "ate", "aura", "banger", "based", "basic", "bde", "bestie", "bet", "bffr", "big yike", "blud", "boujee", "boomer", "brainrot", "bro", "bruh", "bussin'", "cap", "caught in 4k", "clapback", "cook", "cooked", "cuh", "dab", "dead", "ded", "delutionship", "delulu", "drip", "era", "fire", "fit check", "finna", "gagged", "ghost", "girl boss", "glaze", "glow up", "GOAT", "hits", "ijbol", "ipad kid", "it's giving", "iykyk", "jit", "Karen", "lit", "main character", "mew", "mewing", "mogging", "NPC", "no cap", "Ohio", "oof", "owned", "pedriodt", "pluh", "queen", "ratio", "rizz", "salty", "sheesh", "shook", "sigma", "simp", "situationship", "skibidi", "slaps", "slay", "stan", "sus", "skill issue", "tea", "touch grass", "unalive", "uwu", "valid", "vibe", "vibe check", "wig", "yap", "yeet"]
const searchInput = document.getElementById("searchInput")
const searchInputPos = searchInput.getBoundingClientRect()

const searchShow = document.getElementById("search_show")
const searchShow2 = document.getElementById("search_show2")
const searchShow3 = document.getElementById("search_show3")
const searchShow4 = document.getElementById("search_show4")
const searchShow5 = document.getElementById("search_show5")

const showhref = document.getElementById("showhref")
const showhref2 = document.getElementById("showhref2")
const showhref3 = document.getElementById("showhref3")
const showhref4 = document.getElementById("showhref4")
const showhref5 = document.getElementById("showhref5")

const submit = document.getElementById("submit")

const allShows = [searchShow, searchShow2, searchShow3, searchShow4, searchShow5]
const allShowHrefs = [showhref, showhref2, showhref3, showhref4, showhref5]



//allShows set
for(var i = 0; i < 5; i++){
    allShows[i].style.left = (searchInputPos.left + 30) + 'px';
    allShows[i].style.opacity = 0
    
}






searchInput.addEventListener("keyup", () => {
   
    
    var input = searchInput.value.toLowerCase().trim() // Convert to lowercase and trim spaces
    
    var inputParts = input.split(" ")

    var matchedWords = words.filter(word => inputParts.every(part => word.includes(part)))
    

    if (input === "") {
        for (let i = 0; i < allShows.length; i++) {
            allShows[i].innerText = ""
            allShows[i].style.opacity = 0
            allShows[i].style.display = "none"
            allShows[i].setAttribute('href', "")
            submit.setAttribute('href', "")
            
        }
    } else if (matchedWords.length >= 5) {
        




        for (let i = 0; i < allShows.length; i++) {
            if (i < matchedWords.length) {
                

                allShows[i].innerText = matchedWords[i];
                allShows[i].style.color = "black"
                allShows[i].style.display = "block"
                

                if(allShows[i].innerText === "asf"){
                    allShowHrefs[i].setAttribute('href', '#af')
                } else if(allShows[i].innerText === "ded"){
                    allShowHrefs[i].setAttribute('href', '#dead')
                } else{
                    allShowHrefs[i].setAttribute('href', '#' + allShows[i].innerHTML)
                }
                



                if(allShows[0].innerText === "asf"){
                    submit.setAttribute('href', '#af')
                } else if(allShows[0].innerText === "ded"){
                    submit.setAttribute('href', '#dead')
                } else{
                    submit.setAttribute('href', '#' + allShows[0].innerHTML)
                }
                

                




            }
            allShows[i].style.opacity = 1;
        }
    
    } else if (matchedWords.length > 0 && matchedWords.length < 5) {

        


        const mustShowShows = matchedWords.length
        for (let i = 0; i < mustShowShows; i++) {
            allShows[i].style.opacity = 1;
            

            allShows[i].innerText = matchedWords[i]
            allShows[i].style.color = "black"
            allShows[i].style.display = "block"
            

            if(allShows[i].innerText === "asf"){
                allShowHrefs[i].setAttribute('href', '#af')
            } else if(allShows[i].innerText === "ded"){
                allShowHrefs[i].setAttribute('href', '#dead')
            } else{
                allShowHrefs[i].setAttribute('href', '#' + allShows[i].innerHTML)
            }

            

            if(allShows[0].innerText === "asf"){
                submit.setAttribute('href', '#af')
            } else if(allShows[0].innerText === "ded"){
                submit.setAttribute('href', '#dead')
            } else{
                submit.setAttribute('href', '#' + allShows[0].innerHTML)
            }

            

        }
    
        for (let j = mustShowShows; j < 5; j++) {
            allShows[j].innerText = "";
            allShows[j].style.opacity = 0;
            allShows[j].style.display = "none"
            allShows[j].setAttribute('href', "")
        }
        
    } else {
        for (let i = 0; i < allShows.length; i++) {
            allShows[i].innerText = ""
            allShows[i].style.opacity = 0
            allShows[i].style.display = "none"
            allShows[i].setAttribute('href', "")
            submit.setAttribute('href', '')
        }
        
    }
})


    


