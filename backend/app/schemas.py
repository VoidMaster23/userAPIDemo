from typing import List

from pydantic import BaseModel, EmailStr, HttpUrl


class Name(BaseModel):
    title: str
    first: str
    last: str

    class Config:
        orm_mode = True


class Street(BaseModel):
    number: int
    name: str

    class Config:
        orm_mode = True


class Coordinates(BaseModel):
    latitude: str
    longitude: str

    class Config:
        orm_mode = True


class Timezone(BaseModel):
    offset: str
    description: str

    class Config:
        orm_mode = True


class Location(BaseModel):
    city: str
    state: str
    country: str
    postcode: int
    street: Street
    coordinates: Coordinates
    timezone: Timezone

    class Config:
        orm_mode = True


class Login(BaseModel):
    username: str
    uuid: str
    password: str
    salt: str
    md5: str
    sha1: str
    sha256: str

    class Config:
        orm_mode = True


class DOB(BaseModel):
    date: str
    age: int

    class Config:
        orm_mode = True


class Registered(BaseModel):
    date: str
    age: int

    class Config:
        orm_mode = True


class ID(BaseModel):
    name: str
    value: str

    class Config:
        orm_mode = True


class Picture(BaseModel):
    large: HttpUrl
    medium: HttpUrl
    thumbnail: HttpUrl

    class Config:
        orm_mode = True


class User(BaseModel):
    gender: str
    email: EmailStr
    phone: str
    cell: str
    nat: str
    name: Name
    location: Location
    login: Login
    dob: DOB
    registered: Registered
    id: ID
    picture: Picture

    class Config:
        orm_mode = True


class Info(BaseModel):
    seed: str
    results: int
    page: int
    version: str


class Results(BaseModel):
    results: List[User]
    class Config:
        orm_mode = True


class FullResponse(BaseModel):
    results:List[User]
    info: Info
    class Config:
        orm_mode = True