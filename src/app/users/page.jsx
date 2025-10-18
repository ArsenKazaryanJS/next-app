import UserItem from "@/components/UserItem";
import getUsers from "@/services/getUsers";

const UsersPage = async () => {
  const users = await getUsers();

  return (
    <section className="content">
      <h2 className="section-title">Users</h2>
      <div className="users-list">
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    </section>
  );
};

export default UsersPage;
