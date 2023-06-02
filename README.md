# Plannerable

Plannerable is a planner, which allow the user to add and plan their task.<br>
This repository contain backend and frontend for Plannarable website.

## Stack Technology

| Frontend | Backend | Database |
|----------|:-------:|:---------:|
| <img src="https://github.com/ARNE-08/Plannerable/assets/85389813/c2a0dada-bd94-459b-8635-a9f7f3b23886" width="200px"> | <img src="https://github.com/ARNE-08/Plannerable/assets/85389813/9c85557f-67a5-4dd2-a77b-0f3c5a3aae65" width="200px"> | <img src="https://github.com/ARNE-08/Plannerable/assets/85389813/2f5080da-52e9-426c-b1bf-899767c6c285" width="200px"> |
| | <img src="https://github.com/ARNE-08/Plannerable/assets/85389813/f6794638-1eb3-4558-9eab-758ae45547dc" width="200px"> | |

## Functions
- Create / Read / Update / Delete user's to-do list

## Database schema
![Database schema](https://github.com/ARNE-08/Plannerable/assets/85389813/d88a1c66-6dbf-4ea1-a1ac-0f8a46ae52da)

## To run the frontend and backend in developing mode 
cd to Backend and Plannerable (for frontend) then run.
```
    npm run dev
```

## API endpoints

### All of the responses will be wrapped with this data before sending
| Parameter | Type | Description |
|-----|:----:|:-----|
| success| boolean | the status of request|
| msg | string | message for each request |
| data | JSON | the actual data |

#### URL
<!-- Method /endpoint -->
`POST /login`

<!-- change to Request <TYPE> If you use parameters or query -->
#### Request Body 
| Parameter | Type | Description |
|----------|:-------------:|:------|
|username|String|username
|password|String| password|


Example
```
   {
     "username" : "user1",
     "password" : "1234"
   }


```

<!-- The response if success -->
#### Success
Response

<!--Status code (normally 200) -->
###### Status Code
<!-- STATUS BEHEAVIOR -->
` 200`  success

| Parameter | Type | Description |
|----------|:-------------:|:------|
|id|String| user id
|username|String| username|
|email|String| user email

Example
```
{
        "id": 8,
        "username": "user1",
        "email": "user1@gmail.com",
}

```
<!-- This is the special action of your end point (for example, sending the token) -->
**noted: If success, the Response will be sent with cookie named user**

#### URL
<!-- Method /endpoint -->
`POST /regis`

<!-- change to Request <TYPE> If you use parameters or query -->
#### Request Body 
| Parameter | Type | Description |
|----------|:-------------:|:------|
|username|String|username
|email|String| email|
|password|String|password


Example
```
   {
     "username" : "user1",
     "email" : "user1@gmail.com"
     "password" : "1234"
   }


```

<!-- The response if success -->
#### Success
Response

<!--Status code (normally 200) -->
###### Status Code
<!-- STATUS BEHEAVIOR -->
` 200`  success<br>
no response body

## CRUD operations
### Get all Todos
#### URL
`GET /getAllTodos`

#### Request Body 
No Request Body

#### Success

###### Status Code
` 200` success

Response

| Parameter | Type | Description |
|----------|:-------------:|:------|
| no parameter | Array of todo | all todos related to user |

#### todo
the todo object
| Parameter | Type | Description |
|----------|:-------------:|:------|
| id | string | id of todo |
| user_id | string | user id |
| name | string | todo name |
| deadline | date | todo deadline |
| time | time | todo deadline time |
| description | string | todo description |
| status | string | todo status |

Example
```
[
    {
        "id": 4,
        "user_id": 9,
        "name": "Todo1",
        "deadline": "2566-05-17",
        "time": "21:16:35",
        "description": null,
        "status": "not complete"
    }
]

```

### Create Todo
#### URL
`POST /addTodo`

#### Request Body 
| Parameter | Type | Description |
|----------|:-------------:|:------|
|name|String|name
|deadline|date| deadline|
|time|time|time
|description|String| description (can be null)|

#### Success

###### Status Code
` 200`  success

Response

| Parameter | Type | Description |
|----------|:-------------:|:------|
|id|String| id of Todo|
|name|String|name
|deadline|date| deadline|
|time|time|time
|description|String| description (can be null)|
|status|String|todo status

Example
```
[
    {
        "id": 4,
        "user_id": 9,
        "name": "Todo1",
        "deadline": "2566-05-17",
        "time": "21:16:35",
        "description": null,
        "status": "not complete"
    }
]

```

### Edit Todo
#### URL
`PATCH /editTodo`

#### Request Body 
| Parameter | Type | Description |
|----------|:-------------:|:------|
|name|String|name
|deadline|date| deadline|
|time|time|time
|description|String| description (can be null)|
|id|String|id of todo

#### Success

###### Status Code
` 200`  success

Response

| Parameter | Type | Description |
|----------|:-------------:|:------|
|id|String| id of Todo|
|name|String|name
|deadline|date| deadline|
|time|time|time
|description|String| description (can be null)|
|status|String|todo status

Example
```
[
    {
        "id": 4,
        "user_id": 9,
        "name": "Todo1",
        "deadline": "2566-05-17",
        "time": "21:16:35",
        "description": null,
        "status": "not complete"
    }
]

```
### Delete Todo
#### URL
`DELETE /deleteTodo`

#### Request Body 
| Parameter | Type | Description |
|----------|:-------------:|:------|
| id | String | id of todo |

#### Success

###### Status Code
` 200`  success<br>

no response body


### Delete all Todos
#### URL
`DELETE /deleteAll`

#### Request Body 
| Parameter | Type | Description |
|----------|:-------------:|:------|
| no parameter | Array of todo | all todos related to user |

#### Success

###### Status Code
` 200`  success<br>

no response body


### Complete Todo
#### URL
`PATCH /completeTodo`

#### Request Body 
| Parameter | Type | Description |
|----------|:-------------:|:------|
|id|String|id of todo

#### Success

###### Status Code
` 200`  success

Response

| Parameter | Type | Description |
|----------|:-------------:|:------|
|id|String| id of Todo|
|name|String|name
|deadline|date| deadline|
|time|time|time
|description|String| description (can be null)|
|status|String|todo status

Example
```
[
    {
        "id": 4,
        "user_id": 9,
        "name": "Todo1",
        "deadline": "2566-05-17",
        "time": "21:16:35",
        "description": null,
        "status": "completed"
    }
]

```

### Complete All Todos
#### URL
`PATCH /completeAll`

#### Request Body 
| Parameter | Type | Description |
|----------|:-------------:|:------|
| no parameter | Array of todo | all todos related to user |

#### Success

###### Status Code
` 200`  success

Response

| Parameter | Type | Description |
|----------|:-------------:|:------|
|id|String| id of Todo|
|name|String|name
|deadline|date| deadline|
|time|time|time
|description|String| description (can be null)|
|status|String|todo status

Example
```
[
    {
        "id": 4,
        "user_id": 9,
        "name": "Todo1",
        "deadline": "2566-05-17",
        "time": "21:16:35",
        "description": null,
        "status": "completed"
    }
]

```

### Get user
#### URL
`GET /getUser`

#### Request Body 
No Request Body

#### Success

###### Status Code
` 200`  success

Response

| Parameter | Type | Description |
|----------|:-------------:|:------|
| no parameter | Array of user | information related to user |

#### profileUser
the profileUser object
| Parameter | Type | Description |
|----------|:-------------:|:------|
| username | String | user username |
| email | String | user username 

Example
```
[
    {
        "username": "user1",
        "email": "user1@gmail.com",
    }
]

```

### Get profile picture
#### URL
`GET /getProfilePic`

#### Request Body 
No Request Body

#### Success

###### Status Code
` 200`  success

Response

| Parameter | Type | Description |
|----------|:-------------:|:------|
|profile_picture|String| url of user profile picture|

Example
```
[
    {
        "profile_picture": "https://t4.ftcdn.net/jpg/04/10/43/77/360_F_410437733_hdq4Q3QOH9uwh0mcqAhRFzOKfrCR24Ta.jpg",
    }
]

```

### Edit profile picture
#### URL
`PATCH /changeProfilePic`

#### Request Body 
| Parameter | Type | Description |
|----------|:-------------:|:------|
|profile_picture|String| url of user profile picture|

#### Success

###### Status Code
` 200`  success

Response

| Parameter | Type | Description |
|----------|:-------------:|:------|
|profile_picture|String| url of user profile picture|

Example
```
[
    {
        "profile_picture": "https://t4.ftcdn.net/jpg/04/10/43/77/360_F_410437733_hdq4Q3QOH9uwh0mcqAhRFzOKfrCR24Ta.jpg",
    }
]

```


### Get user's note
#### URL
`GET /getNote`

#### Request Body 
No Request Body

#### Success

###### Status Code
` 200`  success

Response

| Parameter | Type | Description |
|----------|:-------------:|:------|
|user_note|String| user's note|

Example
```
[
    {
        "user_note": "This is note",
    }
]

```


### Edit note
#### URL
`PATCH /editNote`

#### Request Body 
| Parameter | Type | Description |
|----------|:-------------:|:------|
|user_note|String| user's note|

#### Success

###### Status Code
` 200`  success<br>
no response body

### Get today todo
get to-do list than is not pass deadline
#### URL
`GET /getTodayTodo`

#### Request Body 
| Parameter | Type | Description |
|----------|:-------------:|:------|
|today|Date| today date|

#### Success

###### Status Code
` 200`  success

Response

| Parameter | Type | Description |
|----------|:-------------:|:------|
| no parameter | Array of todayTodo | all todos related to user that is not pass deadline |

#### todayTodo
the todayTodo object
| Parameter | Type | Description |
|----------|:-------------:|:------|
| id | string | id of todo |
| user_id | string | user id |
| name | string | todo name |
| deadline | date | todo deadline |
| time | time | todo deadline time |
| description | string | todo description |
| status | string | todo status |

Example
```
[
    {
        "id": 4,
        "user_id": 9,
        "name": "Todo1",
        "deadline": "2566-05-17",
        "time": "21:16:35",
        "description": null,
        "status": "not complete"
    }
]

```


### Get is login
check whether the user already logged in (check cookies)
#### URL
`GET /isLogin`

#### Request Body 
No Request Body

#### Success

###### Status Code
` 200`  success<br>
no response body

