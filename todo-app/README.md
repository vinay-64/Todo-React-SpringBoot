1. In Single page application, we don't want the entire page to be refreshed, we only want the specific component which is changing to  
   be refreshed. So in <a> href will refresh the entire page, so we use Link which only refreshes the component from which we are moving, not the whole app.

2. Header, Footer and Logout has been added. Header and Footer will be same for all the components, and the middle one will change based on the loaded url path.

3. Installed bootstrap and imported the 'bootstrap\dist\css\bootstrap.min.css' path in the index.js file, so that all the app components can use this bootstrap.

4. Bootstrap styling has been added to header and footer.
