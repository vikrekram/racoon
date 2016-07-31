const {app, BrowserWindow} = require('electron');

let win;

function createWindow () {
  win = new BrowserWindow({width: 600, height: 450})
  win.loadURL(`file://${__dirname}/app/index.html`)

  win.on('closed', () => { 
    win = null
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  app.quit()
});