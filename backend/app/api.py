from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from .schemas import Info, User, Results, FullResponse
import pymongo

app = FastAPI()

#defining allowed origins
origins = [
    "http://localhost:3000",
    "localhost:3000"
]

#add middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)


#defining the database interactions
client = pymongo.MongoClient(
    "mongodb+srv://edson23:IeatPie321now@amberapistoragecluster.rij9j.mongodb.net/User_Info?retryWrites=true&w=majority")
user_DB = client.User_Info
user_data = user_DB.user_data
results_info = user_DB.info


@app.get("/data", response_model=FullResponse)
async def get_all_data():
    # get data from the db
    results = list(user_data.find({}))
    info = results_info.find_one({'seed': '934a8f5063e7b2ec'})

    # drop IDs
    for result in results:
        del result['_id']

    return {'results': results, 'info': info}


@app.get("/user/{email}", response_model=User)
async def get_user_data(email):
    user = user_data.find_one({'email': email})

    del user['_id']

    return user


@app.get("/info", response_model=Info)
async def get_results_info():
    info = results_info.find_one({'seed': '934a8f5063e7b2ec'})

    del info['_id']

    return info


@app.get("/results", response_model=Results)
async def get_results():
    results = list(user_data.find({}))
    # drop IDs
    for result in results:
        del result['_id']
    return {'results': results}

@app.post("/createUser")
async def create_user(user: User):
    use = dict(user)
    use['name'] = dict(use['name'])
    use['location'] = dict(use['location'])
    use['location']['street'] = dict(use['location']['street'])
    use['location']['coordinates'] = dict(use['location']['coordinates'])
    use['location']['timezone'] = dict(use['location']['timezone'])
    use['login'] = dict(use['login'])
    use['dob'] = dict(use['dob'])
    use['registered'] = dict(use['registered'])
    use['id'] = dict(use['id'])
    use['picture'] = dict(use['picture'])
    print(use)
    if(user_data.find_one({'email':user.email})):
        raise HTTPException(status_code=403, detail='User Already Exists')
    user_data.insert_one(use)

    results_info.find_one_and_update(
        {'seed': '934a8f5063e7b2ec'},
        {'$inc': {'results':1, 'page':1}}
    )

    return user



@app.get('/items/{item_id}')
async def read_item(item_id: int):
    return {"item_id": item_id}
