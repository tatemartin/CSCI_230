document.addEventListener('keydown', function(e) {
    if (e.code === 'KeyY' && e.altKey && e.shiftKey) {
        document.getElementById('container').style.display = 'block';
        document.getElementById('riddle').style.display = 'none';
    }
})

function handleLogin(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === 'agentX' && password === 'secret') {
        document.getElementById('login').classList.add('hidden');
        document.getElementById('image').classList.remove('hidden');
    } else {
        alert('Incorrect username or password');
    }
}