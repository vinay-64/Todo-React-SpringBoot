1. In Single page application, we don't want the entire page to be refreshed, we only want the specific component which is changing to  
   be refreshed. So in <a> href will refresh the entire page, so we use Link which only refreshes the component from which we are moving, not the whole app.

2. Header, Footer and Logout has been added. Header and Footer will be same for all the components, and the middle one will change based on the loaded url path.

3. Installed bootstrap and imported the 'bootstrap\dist\css\bootstrap.min.css' path in the index.js file, so that all the app components can use this bootstrap.

4. Bootstrap styling has been added to header and footer.

5. Every Component has been moved to a it's own separate file.

6. Whatever you are setting into state, typically is only available for the duration of that specific component.
   Eg: As soon as we submit login, we move to another component, and that old state will disappear. The state of login component will no longer exist.
   However if you want to retain the fact that the user is logged in, and you want to use that in the header component. So, whenever user is logged in, we want the state user logged in. same for logout.
   And we want to share that state across different components. So we can create context and we can share this context across different components.

7. We have created a AuthContext with {isAuthenticated, setAuthenticated} , and all the child components, whichever needs this, will call useContext() and use that context. So lets say, if one component changes isAuthenticated using setAuthenticated, the other components which are using this context will re-rendet the changes in the UI.
