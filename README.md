Designed and implemented the Register and login functionality of a user.

The techologies used are Reactjs, CSS for the frontend. Nodejs, Expressjs, MongoDB for the backend.

If the user is new, he can create account by navigating to /register page.

If the user already have an account, he can log in and a JWT token will be generated and stored in the cookies.

Once user login, registers a toast comes up.

Done input validation for all the fields on the server side.

Once the user logins, he will be navigated to a /home route which is a private route.

On the /home router user can see all the remaining users who have account.

And user have the facility to logout from the page.

Once user logouts, token will be deleted from the cookies and user navigated to login page.


On the backend side, implemented routes for register, login, logout, getAllUsers.

When the user registers, hashed the password using bcrypt and stored in database.

When the user logins, generated the JWT token using jsonwebtoken and stored token in cookies.

When the user logs out, removed the JWT token from cookies.

Implemented a middleware which does authorization and gives access to the routes.


Handled all kind of erros and taken security measures.

Designed the application such that it supports small, medium, large devices.

![image](https://github.com/Vyshnavi-vk/Wanderon-Assignment/assets/116080577/ad927394-eb95-4793-9f4c-d4970a03568f)

![image](https://github.com/Vyshnavi-vk/Wanderon-Assignment/assets/116080577/1e9adbbd-7245-473e-a67b-8c7cb9f41d89)

![image](https://github.com/Vyshnavi-vk/Wanderon-Assignment/assets/116080577/9ce50271-455d-4658-b67d-8fb8bb39ca16)

![image](https://github.com/Vyshnavi-vk/Wanderon-Assignment/assets/116080577/cb2cd8b3-f7b3-4502-8119-724c2f99c26c)







