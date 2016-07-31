const http = require('http');
const server = http.Server();

const {app, BrowserWindow, ipcMain} = require('electron');

let win;

function createWindow () {
  win = new BrowserWindow({
    width: 250, height: 80,
    frame: false,
    resizable: false
  });

  win.loadURL(`file://${__dirname}/app/index.html`)

  win.on('closed', () => { 
    win = null
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  app.quit()
});

ipcMain.on('close-main-window', () => {
  win.close();
});