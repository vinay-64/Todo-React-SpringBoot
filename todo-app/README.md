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

8. We have refactored the code to put all the authentication logic into the AuthContext because the logic is duplicated.

9. Till now, If we interact with the UI, it will only show todos, welcome if you are logged in, but if you change the url it will show the todos component, eventhough if you are not loggedin. So we need to protect the routes. So In the url, if unauthenticated person visits todos, it will navigate to login. Hence now every thing is protected.

BackEnd Integration:

1. BE integration starts.
2. Basic Backend HelloWorld Rest Api is built. Now we installed and use axios for using Rest calls to the Backend. So while using axios.get().It will return a Promise. Here we are calling 8080 website from another website 3000. By default it is disabled.

3. Enabling CORS Requests for Spring Boot REST API
4. Checked whether we are getting any data from BE, and displayed in the UI.
5. component is only responsible for rendering the data in the UI, So don't write http requests code in the component. Use another module for Https work.
6. checked Path Variable get Request 'apiClient.get(`/hello-world/path-variable/${username}`)'.
7. Creating Retrieve Todos Spring Boot REST API Get Method
