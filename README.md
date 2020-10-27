# Steps to develop

### First step:
  - API Tests
  - Replicate the pages with static components
  - Navigate between pages (react-router-dom)
  
### Second step:
  - Split components (styled-components)
  - Integration with API (Search players)
  - Player positions sections

### Third step:
  - Drag and Drop
  - Tag Input
  - Validation (yup and @unform)
  
### Forth step:
  - Context API
  - Top5 Section
  - Most and Less Picked Players
  
### Last step:
  - Tests

# API

This is the demo version from https://www.api-football.com/
API Key is public on services/api

![image](https://user-images.githubusercontent.com/60005589/97360595-2c692900-187d-11eb-9153-4280cd16c4a9.png)

We can search for most football players

# Pages

![image](https://user-images.githubusercontent.com/60005589/97361291-114ae900-187e-11eb-87e4-c4c6b06016c4.png)

![image](https://user-images.githubusercontent.com/60005589/97361643-97672f80-187e-11eb-9a12-113a5051a68b.png)

![image](https://user-images.githubusercontent.com/60005589/97361764-ce3d4580-187e-11eb-9aca-f4c2b75604d4.png)

# Problems and Solutions

### Validation
  Using Yup and reading the documentation it was possible to validate the fields
  
### Layout of football-field
  This problem solved using a background image (with the application colors) and setting a style for every player position.
 
### Drag and Drop / TagInput
  I needed to review some concepts and see examples, solved by logic in javascript
  
### Store on state
  Solved by using API Context and useLocation when user try to edit any team
  
### Responsive layout
  Unsolved yet
