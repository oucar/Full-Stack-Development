// --------------------------- API, ASYNC ---------------------------

// fetch live data from api
const fetchLive = async (delay) => {
    const res = await axios.get('https://api.cryptonator.com/api/ticker/btc-usd');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
                let currPrice = Math.round(res.data.ticker.price*100)/100;
                let today = new Date().toLocaleDateString();                     // 03/27/2000 format
                let time = new Date().toLocaleTimeString();                      // 11:18:48 PM
    
                console.log(today, time, currPrice);
                addData(myChart, time, currPrice);
                resolve();
        }, delay)
    }) // end Promise
} // end fetchLive()

// init fetching operation and fetch every ${delay} seconds
const init = async () => {
    try {
        await fetchLive(0);
        while(true){
            console.log("...");
            await fetchLive(5*60000);                                               // ! every 5 minutes
        } // end while
    } catch (error) {
        console.error(`Something went wrong with the API --> ${error} `);        
    } // end try catch
} // end init

// --------------------------- CHART RELATED ---------------------------

// adding data to the table
const addData = (chart, label, data) => {
    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
    });
    chart.update();
} // end addData()

// chart specs
let time = [];
let price = [];

let ctx = document.querySelector("#myChart");
let myChart = new Chart(ctx, {
    type: 'line',
    color: "rgba(220,220,220,0.5)",
    data: {
        labels: time,
        datasets: [{
            label: 'Bitcoin Price',
            backgroundColor: 'rgb(63, 127, 191)',
            borderColor: 'rgb(63, 127, 191)',
            data: price
        }]
    }
});


init();




