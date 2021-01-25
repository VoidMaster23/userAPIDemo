# userAPIDemo

API for Amber Software Coding Interview

## Stack Used

* Database - MongoDB Atlas
* API - Python FastAPI
* Frontend  - ReactJS 

### Motivation for using this stack 

FastAPI implements the OpenAPI standard for APIs and being a Python framework, it was easy to learn and develop for. A database was used to add more functionality to the api (I.e create user). The use of a NoSQL database eased development since there was no need to define relational schema - pydantic models were sufficient. React was chosen for this design because it would allow interactivity with relative ease as I am already familiar with it.

## Getting Started

1. Switch to the backend folder and create python virtual environment. Then run `pip install > requirements.txt` from your terminal
2. run `python main.py` or,`python3 main.py` to start the server
3. In a new terminal, enter the frontend folder and run `npm install` to install the necessary packages
4. run `npm run start` to run the frontend

At this stage you should be able to go to the page via localhost:3000. There, you will be able view existing user data and create new users.

## Notes

- [x] Create new user
- [x] View Existing user Data
- [ ] Validation for inputs (Only one input is properly validated and that is in email search)
- [ ] Testing (outside of manual tests)
