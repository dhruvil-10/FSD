let vote = {
    Javascript: 0,
    Python: 0,
    Java: 0
};

function votes(language){
    vote[language]++;
    updatevotes();
    animateButton(language);
}

function updatevotes(){
    // Update vote counts
    document.getElementById("jsvotes").innerHTML = vote.Javascript;
    document.getElementById("pyvotes").innerHTML = vote.Python;
    document.getElementById("jvotes").innerHTML = vote.Java;
    
    // Update progress bars
    updateProgressBars();
}

function updateProgressBars() {
    const totalVotes = vote.Javascript + vote.Python + vote.Java;
    
    if (totalVotes > 0) {
        const jsPercent = (vote.Javascript / totalVotes) * 100;
        const pyPercent = (vote.Python / totalVotes) * 100;
        const javaPercent = (vote.Java / totalVotes) * 100;
        
        document.getElementById("js-progress").style.width = jsPercent + "%";
        document.getElementById("py-progress").style.width = pyPercent + "%";
        document.getElementById("java-progress").style.width = javaPercent + "%";
    }
}

function animateButton(language) {
    const buttons = {
        'Javascript': document.querySelector('.javascript-btn'),
        'Python': document.querySelector('.python-btn'),
        'Java': document.querySelector('.java-btn')
    };
    
    const button = buttons[language];
    if (button) {
        button.style.transform = 'scale(0.95)';
        setTimeout(() => {
            button.style.transform = 'translateY(-2px)';
        }, 150);
    }
}

// Simulate random votes for demo purposes
setInterval(()=> {
    const langs = Object.keys(vote);
    const randomVote = langs[Math.floor(Math.random()*langs.length)];
    vote[randomVote]++;
    updatevotes();
}, 3000);

// Initialize progress bars on page load
window.addEventListener('load', () => {
    updateProgressBars();
});