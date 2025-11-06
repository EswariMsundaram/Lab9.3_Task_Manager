import UserProfileCard from "./UserProfileCard";

export interface User{
    id:number;
    name:string;
    email:string;
}
const users:User[]= [
  {
    "id": 0,
    "email": "john@gmail.com",
    "name": "john",
  },
  {
    "id": 1,
    "email": "User1@gmail.com",
    "name": "user1",
  },
  {
    "id": 2,
    "email": "User2@gmail.com",
    "name": "user2",
  },
  {
    "id": 3,
    "email": "User3@gmail.com",
    "name": "user3",
  },
  {
    "id": 4,
    "email": "User4@gmail.com",
    "name": "user4",
  },
  
]

function UserList(){
    return(
        <div>
            <h3> User List</h3>

            {users.map(user=>(
                <UserProfileCard user={user} key={user.id}/>
            ))}
        </div>
    )
}
export default UserList;