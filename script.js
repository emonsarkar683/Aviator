document.getElementById('loadGame').addEventListener('click', function() {
    const url = 'https://cdnet-launch.apac.spribegaming.com/aviator?currency=BDT&lang=en&user=0vt160817457&operator=tcgf2c3ebb969896-55c8-8d64-4498-3b38430a';

    // Create an iframe to load the game
    const gameContent = document.getElementById('gameContent');
    gameContent.innerHTML = `<iframe src="${url}" width="100%" height="600px" frameborder="0"></iframe>`;
});