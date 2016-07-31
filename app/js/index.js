const {ipcRenderer} = require('electron');

var closeEl = document.querySelector('#quit');

closeEl.addEventListener('click', () => {
	ipcRenderer.send('close-main-window');
});