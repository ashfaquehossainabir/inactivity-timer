var inactivityTime = function () {
    var time;
    window.onload = resetTimer;
    // DOM Events
    document.onmousemove = resetTimer;
    document.onkeydown = resetTimer;

    function logout() {
        alert("You are now logged out.")
        // location.href = 'https://www.facebook.com';
    }

    function resetTimer() {
        clearTimeout(time);
        time = setTimeout(logout, 60000)
        // 1000 milliseconds = 1 second
    }
};

window.onload = function() {
    inactivityTime();
}