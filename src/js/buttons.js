//  Holidaze buttons
const holidazeDemoBtn = document.querySelector('#holidaze-demo-btn');
holidazeDemoBtn.addEventListener('click', () => {
    window.open('https://holidaze-98.netlify.app/?page=1', '_blank');
});
holidazeDemoBtn.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        window.open('https://holidaze-98.netlify.app/?page=1', '_blank');
    }
});
const holidazeRepoBtn = document.querySelector('#holidaze-repo-btn');
holidazeRepoBtn.addEventListener('click', () => {
    window.open('https://github.com/Tanix98/project-exam-2', '_blank');
});
holidazeRepoBtn.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        window.open('https://github.com/Tanix98/project-exam-2', '_blank');
    }
});

// Tabernia buttons
const taberniaDemoBtn = document.querySelector('#tabernia-demo-btn');
taberniaDemoBtn.addEventListener('click', () => {
    window.open('https://tabernia.netlify.app', '_blank');
});
taberniaDemoBtn.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        window.open('https://tabernia.netlify.app', '_blank');
    }
});
const taberniaRepoBtn = document.querySelector('#tabernia-repo-btn');
taberniaRepoBtn.addEventListener('click', () => {
    window.open('https://github.com/Tanix98/front-end-frameworks-ca', '_blank');
});
taberniaRepoBtn.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        window.open(
            'https://github.com/Tanix98/front-end-frameworks-ca',
            '_blank'
        );
    }
});

// Scandinavian Auction House buttons
const sahDemoBtn = document.querySelector('#sah-demo-btn');
sahDemoBtn.addEventListener('click', () => {
    window.open('https://scandinavian-auction-house.netlify.app', '_blank');
});
sahDemoBtn.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        window.open('https://scandinavian-auction-house.netlify.app', '_blank');
    }
});
const sahRepoBtn = document.querySelector('#sah-repo-btn');
sahRepoBtn.addEventListener('click', () => {
    window.open('https://github.com/Tanix98/semester-project-2', '_blank');
});
sahRepoBtn.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        window.open('https://github.com/Tanix98/semester-project-2', '_blank');
    }
});

// Snake Game buttons
const snakeDemoBtn = document.querySelector('#snake-demo-btn');
snakeDemoBtn.addEventListener('click', () => {
    window.open('https://tanix98.github.io/snake-game/', '_blank');
});
snakeDemoBtn.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        window.open('https://tanix98.github.io/snake-game/', '_blank');
    }
});
const snakeRepoBtn = document.querySelector('#snake-repo-btn');
snakeRepoBtn.addEventListener('click', () => {
    window.open('https://github.com/Tanix98/snake-game', '_blank');
});
snakeRepoBtn.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        window.open('https://github.com/Tanix98/snake-game', '_blank');
    }
});
