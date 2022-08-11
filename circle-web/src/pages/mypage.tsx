import { userinfo } from "../application/auth";

const Mypage = () => {
  return (
    <div>
      {userinfo().user_name}
    </div>
  )
}

export default Mypage;