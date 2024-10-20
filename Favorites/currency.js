async function convertCurrency(){

    const amount = document.getElementById('amount').value;
    const fromcurrency = document.getElementById('from-currency').value;
    const tocurrency = document.getElementById('to-currency').value;

    const apikey = 'a6cb101ce9115d93f582a638';
    const url = `https://v6.exchangerate-api.com/v6/a6cb101ce9115d93f582a638/latest/USD${fromcurrency}`;

    const response = await fetch(url);
    const data = await response.json();

    const rate = data.rates[tocurrency];

    const convertedAmount = (amount * rate).toFixed(2);

    document.getElementById('result').innerText = `${amount} ${fromcurrency}` = `${convertedAmount} ${tocurrency}`;

    document.getElementById('result-box').classList.remove('hidden');
    document.getElementById('result-box').classList.add('visible');

}