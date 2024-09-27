document.getElementById('loadGame').addEventListener('click', function() {
    const url ='https://launch.spribegaming.com/aviator?currency=BDT&lang=en&user=17s171619041&operator=tcgbdt&token=f2-99cb5ba5a54b-af19-37b4-c235-94c09788';

    // Create an iframe to load the game
    const gameContent = document.getElementById('gameContent');
    gameContent.innerHTML = `<iframe src="${url}" width="100%" height="600px" frameborder="0"></iframe>`;
});
