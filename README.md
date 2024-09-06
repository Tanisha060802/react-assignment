# React Assignment

In this assignment, you have to create a react application which provides following functionalities:

- list users in a table
- search for a user
- sort columns of table
- pagination of users list
- detail page for each user on a separate route

_Attention to detail and meeting all requirements is important in the project. Completing it in less time will not give you any preference._

## **Task Overview**

App functions:

- **Table:** The main screen should list all users in the table
  - columns to show: `first_name`, `last_name`, `age`, `web` and `email`
  - clicking on first name should open `Details` page on a separate route
  - website links (`web`) should open in a new browser tab
- **Search**: Allow to **search** using first_name or last_name
- **Pagination**: Data should be paginated
- **Sort**: All columns should be sortable in both ascending and descending order
- **Detail**: Detail page should show all fields of user
  - Clicking on **back** navigates back to Users table page
- **Routing**: Table and Detail pages should be on their respective routes:
  - Route for Table page should be `/users`
  - Route for Detail page should `/users/<id>` (e.g: _/users/2_, if id of user is 2)

## API endpoint:

_[User Data](https://d2k-static-assets.s3.ap-south-1.amazonaws.com/assignment-files/python-backend-assignment/users.json)_

The user model has following fields:

```tsx
User -
  id -
  first_name -
  last_name -
  age -
  email -
  web -
  company_name -
  city -
  state -
  zip;
```

