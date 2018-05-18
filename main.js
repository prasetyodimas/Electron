// Module to control application life.
const electron = require('electron');
const path     = require('path');
const url      = require('url');

// Module to create native browser window.
const {app, BrowserWindow, Menu } = electron;

//AUTHOR BY DIMAS PRASETYO => dimasprasetyo485@gmail.com
//Configure ENV NODE
// process.env.NODE_ENV = 'production';

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow
let mainMenu

// Open the DevTools.
// mainWindow.webContents.openDevTools()

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', function(){
    // Create the browser window.
    // mainWindow = new BrowserWindow({width: 900, height: 600})
    mainWindow = new BrowserWindow({})
    // and load the index.html of the app.
    mainWindow.loadURL(url.format({
      pathname: path.join(__dirname, 'index.html'),
      protocol: 'file:',
      slashes: true
    }));

    //create main menu
    mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
    //inserting menu
    Menu.setApplicationMenu(mainMenu);
});

//Handle this window pop up
function createWindowRM(){
   mainWindow = new BrowserWindow({
     width  : 400,
     height : 400,
     title  : 'Cari Nomer Rekam Medis',
   })
   mainWindow.show();

   // and load the index.html of the app.
   mainWindow.loadURL(url.format({
     pathname : path.join(__dirname, './menu/modal_rm.html'),
     protocol : 'file:',
     slashes  : true
   }));
}

function createWindowVersion(){
  mainWindow = new BrowserWindow({
    width  : 400,
    height : 400,
    title  : 'Cari Nomer Rekam Medis',
  })
  mainWindow.show();
  // and load the index.html of the app.
  mainWindow.loadURL(url.format({
    pathname : path.join(__dirname, './menu/version.html'),
    protocol : 'file:',
    slashes  : true
  }));
}

//create menu template
const mainMenuTemplate = [
  {
    label   : 'File',
    submenu : [
      {
        label : 'Keluar',
        accelerator : process.platform == 'darwin' ? 'comand+Q' : 'Ctrl+Q',
        click(){
          app.quit();
        }

      }
    ]
  },
  {
    label : 'Master Pasien',
    submenu : [
      {
        label : 'Cari Nomer Rekam Medis',
        accelerator : process.platform == 'darwin' ? 'comand+F' : 'Ctrl+F',
        click(){
          createWindowRM();
        }
      }
    ]
  },
  {
    label : ' Pusat Bantuan',
    submenu : [
      {
        label :'Version',
        click(){
          createWindowVersion();
        }
      },
      {
        label :'License / Hak Cipta',
        click(){
          require('electron').shell.openExternal('https://electronjs.org');
        }
      }
    ]
  }
];


if (process.env.NODE_ENV !== 'production') {
    mainMenuTemplate.push({
      label : 'Developer Tools',
      submenu :[
        {
          label :'Toogle Default',
          accelerator : process.platform == 'darwin' ? 'Ctrl+Shift+I' : 'Ctrl+Shift+I',
          click(item, focusedWindow){
            focusedWindow.toggleDevTools();
          }
        },
        {
          role:'reload'
        }
      ]
    });
}

// Emitted when the window is closed.
// mainWindow.on('closed', function () {
//   // Dereference the window object, usually you would store windows
//   // in an array if your app supports multi windows, this is the time
//   // when you should delete the corresponding element.
//   mainWindow = null
// })

// // Quit when all windows are closed.
// app.on('window-all-closed', function () {
//   // On OS X it is common for applications and their menu bar
//   // to stay active until the user quits explicitly with Cmd + Q
//   if (process.platform !== 'darwin') {
//     app.quit()
//   }
//

//
// })
//
// app.on('activate', function () {
//   // On OS X it's common to re-create a window in the app when the
//   // dock icon is clicked and there are no other windows open.
//   if (mainWindow === null) {
//     createWindow()
//   }
// })

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
