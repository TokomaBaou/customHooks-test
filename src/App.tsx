import "./styles.css";
import { UserCard } from "./compnents/UserCard";
import { useAllUsers } from "./hooks/useAllUsers";

export default function App() {
  const { getUsers, userProfiles, loding, error } = useAllUsers();

  const onClickFechUser = () => getUsers();

  return (
    <div className="App">
      <button onClick={onClickFechUser}>データ取得</button>
      <br />
      {error ? (
        <p style={{ color: "red" }}>データの取得に失敗しました</p>
      ) : loding ? (
        <p>Loding...</p>
      ) : (
        <>
          {userProfiles.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </>
      )}
    </div>
  );
}
