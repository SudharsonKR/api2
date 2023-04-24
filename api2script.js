async function api2fetchdata(){
    try{
    const response1= await fetch("https://api-thirukkural.vercel.app/api?num=1")
    const data1 = await response1.json()
    const response2= await fetch("https://api-thirukkural.vercel.app/api?num=2")
    const data2 = await response2.json()
    const response3= await fetch("https://api-thirukkural.vercel.app/api?num=3")
    const data3 = await response3.json()
    const response4= await fetch("https://api-thirukkural.vercel.app/api?num=4")
    const data4 = await response4.json()
    const response5= await fetch("https://api-thirukkural.vercel.app/api?num=5")
    const data5 = await response5.json()
    const response10= await fetch("https://api-thirukkural.vercel.app/api?num=10")
    const data10 = await response10.json()
    const arrays =[data1, data2, data3, data4, data5, data10]
    console.log(response10)
    console.log(data10)
    console.log(arrays)
    arrays.forEach(ele=>{
        const kural={
            
            Firstline : ele.line1,
            Secondline : ele.line2,
            Explanation : ele.tam_exp
        }
        Thirukural(kural)
    })
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
