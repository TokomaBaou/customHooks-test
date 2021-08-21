import "./styles.css";
import { UserCard } from "./compnents/UserCard";
import axios from "axios";

const user = {
  id: 1,
  name: "マドカダイゴ",
  email: "1234@gmail.com",
  address: "CHIBA"
};

export default function App() {
  const onClickFechUser = () => {
    axios.get("https://jsonplaceholder.typicode.com/users");
  };

  return (
    <div className="App">
      <button onClick={onClickFechUser}>データ取得</button>
      <UserCard user={user} />
    </div>
  );
}
