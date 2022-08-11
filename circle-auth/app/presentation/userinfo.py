from typing import Optional

from fastapi import APIRouter, Header
from fastapi.responses import JSONResponse

from infrastructure.appid import AppID
from domain.userinfo import Userinfo

router = APIRouter()


@router.get("/userinfo", responses={
    200: {"model": Userinfo},
    403: {"description": "forbidden"}
})
async def userinfo(authorization: Optional[str] = Header(default=None)):
    if authorization:
        userinfo = AppID().get_userinfo(authorization)
        if userinfo:
            return JSONResponse(userinfo, 200)

    return JSONResponse({}, 403)
