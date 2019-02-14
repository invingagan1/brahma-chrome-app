chrome.app.runtime.onLaunched.addListener(() => {
    chrome.app.window.create('../app/main.html', {
        'outerBounds': {
            width: 500,
            height: 500
        }
    })
});