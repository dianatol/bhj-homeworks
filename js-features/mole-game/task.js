(() => {
    let playing = true,
    activeHole = 1,
    deadCount = 0,
    lostCount = 0;

  const stop = () => playing = false,
    getHole = index => document.getElementById(`hole${index}`),
    deactivateHole = index =>
      getHole( index ).className = 'hole',
    activateHole = index =>
      getHole( index ).className = 'hole hole_has-mole',
    next = () => setTimeout(() => {
      if ( !playing ) {
        return;
      }
      deactivateHole( activeHole );
      activeHole = Math.floor( 1 + Math.random() * 9 );
      activateHole( activeHole );
      next();
    }, 800 ),
    checkGameOver = () => {
      if (deadCount >= 10) {
        stop();
        alert('Победа! Вы убили 10 кротов!');
        deadCount = 0;
        lostCount = 0;
        document.getElementById('dead').textContent = deadCount;
        document.getElementById('lost').textContent = lostCount;
        playing = true;
        next();
      } else if (lostCount >= 5) {
        stop();
        alert('Поражение! Слишком много промахов.');
        deadCount = 0;
        lostCount = 0;
        document.getElementById('dead').textContent = deadCount;
        document.getElementById('lost').textContent = lostCount;
        playing = true;
        next();
      }
    },
    handleHoleClick = (event) => {
      if (!playing) return;
      const hole = event.target;
      if (hole.className.includes('hole_has-mole')) {
        deadCount++;
        document.getElementById('dead').textContent = deadCount;
        deactivateHole(activeHole);
      } else {
        lostCount++;
        document.getElementById('lost').textContent = lostCount;
      }
      checkGameOver();
    };

  for (let i = 1; i <= 9; i++) {
    getHole(i).addEventListener('click', handleHoleClick);
  }

  next();
})();
