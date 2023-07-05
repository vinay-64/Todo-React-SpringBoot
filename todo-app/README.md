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
8. Displaying Todos from Spring Boot REST API in React App
9. Creating Retrieve Todo and Delete Todo Spring Boot REST API Methods
10. Adding Delete Feature to React Frontend
11. Setting Username into React Auth Context
12. Creating Todo React Component to display Todo Page on update button click for specific todo.
13. Adding Formik and Moment Libraries to Display Todo React Component
14. Adding Validation to Todo React Component using Formik
15. Adding Update Todo and Create Todo REST API to Spring Boot Backend API
16. Adding Update Feature to React Frontend
17. Adding Create New Todo Feature to React Frontend.

Spring Security :

18. Securing spring Boot Rest API with Spring Security. So If we add security dependenty and try to access any api, it shows 401 unauthorized. We disabled CSRF and implemented all filter chain in Sprin boot.s
19. From React app, while we are doing http requests, we are getting "Access to XMLHttpRequest at 'http://localhost:8080/hello-world-bean' from origin 'http://localhost:3000' has been blocked by CORS policy:", because we have added authentication to the RESP API in Backend. When we enter in url, we will type credentials and we can see data. But here the React App is trying to request Backend, which is authenticated.

So in the react app, for the http requests we need to set the Authorization Headers eg : 'Basic dmluYXk6a3VtYXI=' which is an encoded form of username and password.

After setting Authorization header we are getting another error "Access to XMLHttpRequest at 'Access to XMLHttpRequest at "http://localhost:8080/hello-world/path-variable/VINAY' from origin 'http://localhost:3000' has been blocked by CORS policy: Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource."

How to get this header ?
We should not hard-code this in the header. We must retrieve it when we are logging in and then use it in the subsequent calls. So while login, we will send a request to the BE and get the token and put it in the context to use.

20. We have enabled access to preflight request by permitting HttpMethod Options for all requests and we also created a test url for basicAuth.

21. Two problems:
    . We need to get token some how on login.
    . we need to send this token to every request.
    In this step we added the feature to our app to be able to find out the username and password combination in right or not.
