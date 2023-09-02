import {useEffect} from "react";
import {useParams} from "react-router-dom"

const UserEdit = () => {
  const {userId} = useParams();
  useEffect(() => {
    console.log("test")
  }, [userId]);

  return (
    <div>
      USER EDIT
    </div>
  )
}

export default UserEdit
