module.exports = {
    proxy: "localhost:3000",  // The Express server is running on this address
    files: ["public/**/*.*"],  // Watch for changes in the "public" directory
    port: 3001,                // BrowserSync server running on this port
    open: false,               // Don't automatically open a browser window
    notify: false              // Don't show BrowserSync notifications
};
