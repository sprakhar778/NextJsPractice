import UserList from "@/components/user-list";
type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
};

export default async function UserClient() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  const users: User[] = await response.json();

  return (
    <div>
      <UserList users={users} />
    </div>
  );
}
