import { AddUserModal } from "@/module/AddUserModal";
import { useAppSelector } from "@/redux/hooks";

export default function Users() {
    // const users = useAppSelector(selectUsers);
    return (
        <div>
        <div className="flex justify-between items-center p-10">
          <h1>Users</h1>
          <AddUserModal />
        </div>
        <div className="grid grid-cols-3 gap-4 p-10">
          {/* {
            users.map((user) => (
              <UserCard key={user.id} user={user} />
            ))
          } */}
        </div>
      </div>
    );
}