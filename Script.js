const dictionary = async(word) => {
    const url = 'https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=' + word;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key':'c9478df75dmsh920bb4f3ab4164dp1a31d7jsn92c7eebe7a76',
		'x-rapidapi-host': 'dictionary-by-api-ninjas.p.rapidapi.com'
        }
    };

    try {
         await fetch(url, options)
        .then(response => response.json())
        .then((response) => {
    
            wordMain.innerHTML = "Meaning of : " + response.word;
            define.innerHTML = response.definition;
            defination.innerHTML = response.defination.replace("2.", "<br>2.").replace("3.", "<br>3.").replace("4.", "<br>4.");
        });
    }catch (error) {
        console.log('Error:', error);
    }
};

searchbtn.addEventListener('click', (e) => {
    e.preventDefault(); 
    dictionary(searchInput.value);
 });

