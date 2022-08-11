from typing import Optional
import requests

from domain.userinfo import Userinfo
from constants import APP_ID_API_URL


class AppID():
    def get_userinfo(self, authorization: str) -> Optional[Userinfo]:
        headers = {
            "Accept": "application/json",
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": authorization
        }
        res = requests.get(
            f"{APP_ID_API_URL}/userinfo",
            headers=headers
        )
        if res.status_code == 200:
            data = res.json()
            return Userinfo(
                user_id=data["sub"],
                user_name=data["name"],
                email=data["email"],
                picture=data["picture"],
                locale=data["locale"]
            )

        return None
