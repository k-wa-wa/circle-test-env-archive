from fastapi import FastAPI

from presentation import userinfo

app = FastAPI()

app.include_router(
    userinfo.router,
    prefix="/api"
)
