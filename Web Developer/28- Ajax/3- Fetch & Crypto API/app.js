// fetch('https://api.cryptonator.com/api/ticker/btc-usd')          // fetch returns a promise!
//     .then(res => {                                               // result
//         console.log("RESPONSE, WAITING TO PARSE...", res)
//         return res.json()
//     })
//     .then(data => {
//         console.log("DATA PARSED...")
//         console.log(data.ticker.price)
//     })
//     .catch(e => {
//         console.log("OH NO! ERROR!", e)
//     })


const fetchBitcoinPrice = async () => {

    try {
        const res = await fetch('https://api.cryptoasdnator.com/api/ticker/btc-usd');                 // returns a promise
        //console.log(res);                                                                        // testing
    
        const data = await res.json();
        console.log(`Current price of bitcoin is: ${data.ticker.price}`)
    } catch (err) {
        console.log(`Something went wrong ${err}`)
    } // end try catch
} // end fetchBitcoinPrice()

fetchBitcoinPrice();