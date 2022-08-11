from pydantic import BaseModel


class Userinfo(BaseModel):
    user_id: str
    user_name: str
    email: str
    picture: str
    locale: str
