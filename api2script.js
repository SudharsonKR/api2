async function api2fetchdata(){
    try{
    const response= await fetch("https://api-thirukkural.vercel.app/api?num=10")
    const data = await response.json()
    console.log(response)
    console.log(data)
        const kural={
            
            Firstline : data.line1,
            Secondline : data.line2,
            Explanation : data.tam_exp
        }
        Thirukural(kural)
        
    }
    catch (error)
    {
        console.log("Note Error:", error)
    }   

    
}

function Thirukural(elements){
    document.body.innerHTML += `
    <div class="container">
    <div class="info">
    <h3>திருக்குறள்:</h3>
    <h4>${elements.Firstline}<br>
    ${elements.Secondline}</h4>
    <h3>பொருள்:</h3>
    <h4> ${elements.Explanation}</h4>
    </div>
    </div>
    `
    
}
api2fetchdata()