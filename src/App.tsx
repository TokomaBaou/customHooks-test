import "./styles.css";
import { UserCard } from "./compnents/UserCard";

const user = {
  id: 1,
  name: "マドカダイゴ",
  email: "1234@gmail.com",
  address: "CHIBA"
};

export default function App() {
  return (
    <div className="App">
      <UserCard user={user} />
    </div>
  );
}
