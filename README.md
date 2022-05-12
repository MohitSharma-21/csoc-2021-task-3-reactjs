# ReactJS Todo Application - CSoC Dev Web Task 3

## Introduction

In this task you will be working on a todo application made using NextJS a SSR framework for ReactJS. The main motive of this task is to make you familiar with:

- Data Fetching and Rendering
- Component Creation
- Custom Events
- Class Binding
- State Management
- Hooks in ReactJS

## Setting up the project

Follow the following steps to setup this project.

**Note** - This task requires [yarn](https://yarnpkg.com/) which is a tool similar to npm that you encountered in last task.

### Fork this repository
First of all, click on the top-right corner of this repository to fork it.

### Create a local clone of your fork
Then, clone your forked repository using this command:
```
git clone https://github.com/YOUR-USERNAME/csoc-2021-task-3-reactjs.git
```

Change your current directory to the repo's root.
```
cd csoc-2021-task-3-reactjs
```

### Run the server

Install the dependencies using
```
yarn install
```

Then you can finally run the server using this command.
```
yarn dev
```

Then you can go to `localhost:3000` in your browser.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Todo Application

There are three pages in this site.

- `/` - This is the main page where the user can create, edit or delete the tasks.
- `/login` - This is the login page.
- `/register` - This is the register page.

We have also created a backend server containing the API endpoints required for this application to function completely  - [https://todo-app-csoc.herokuapp.com/](https://todo-app-csoc.herokuapp.com/)

You are already familiar with API from last task if not find more details at [Task-2-Web](https://github.com/COPS-IITBHU/csoc-2021-task-2-web/blob/main/README.md#api-usage)

## Tasks
You would notice that the application is not functional completely. So, your task is to make it completely functional. There are several todos mentioned in the component files. You have to complete those.

In particular you have to

- **Auth middleware** - You may notice that initially you are landed on the main page even when you are not logged in. That is wrong. In [auth_required.js](./middlewares/auth_required.js) and [no_auth_required.js](./middlewares/no_auth_required.js) you have to add the logic for redirection based on he/she/them is authenticated or not.

- **Login Function** - Currently only register function works. You have to complete the [LoginForm](./components/LoginForm.js) function too present in Login.

- **Get Tasks function** - There is a function `getTasks` in [index.js](./pages/index.js). You would notice that even after logging in, you see a task *Sample Task 1*. This task was not created by you. This is a dummy task. You have to complete the `getTasks` function such that the tasks listed are the ones created by the user.

- **Add Task** - This functionality is present in [AddTask.js](./components/AddTask.js) which you have to complete by making API call and finally adding element to DOM.

- **Delete Task function** - This functions is present in the [TodoListItem.js](./components/TodoListItem.js) file. You have to complete it.

- **Update Task** - This functions is present in the [TodoListItem.js](./components/TodoListItem.js) file. To complete this you have to add in functionality `editTask` function which will render the dom for editing the list item. Finally complete the `updateTask` function.

## Points
Here is the breakdown of the points related to each task.

|**Task**|**Points**  |
|--|--|
| Auth Middleware | 10 |
| Login Function | 15 |
| Add task | 25 |
| Get tasks | 30 |
| Update Task | 40 |
| Delete Task | 20 |
| UI Improvement | 10 |
|**Total**|150|

## Judging
Judging would be done on the basis of your implementation and authenticity.

## Deadline
You'll have a week to complete this task. Hence, the deadline of this task is **28th June, 2021** i.e. till the end of this month.

## Submission
* Follow the instructions to setup this project.
* Complete the task by making the required changes in the files.
* This time, you **do not need** to put your files in a separate folder.
* When done, commit your work locally and push it to your origin (forked repository).
* Make a pull request to our repository, stating the tasks which you have completed.
* Let us review your pull request.

## Solution
https://csoc-2021-task-3-reactjs-one.vercel.app/login
