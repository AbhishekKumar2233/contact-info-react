import "./styles.css";
import Card from "./Components/Card";

export default function App() {
  return (
    <div className="App">
      <h2>Contact Info</h2>
      <Card
        
        name="Rohit Sharma"
        img="https://randomuser.me/api/portraits/men/10.jpg"
        contact="9532668877"
        email="Rohit45@gmail.com"
      />
      <Card
        name="Kajal"
        img="https://randomuser.me/api/portraits/women/10.jpg"
        contact="9187954639"
        email="Kajal32@gmail.com"
      />
      <Card
        name="Mahi"
        img="https://randomuser.me/api/portraits/men/12.jpg"
        contact="9187954639"
        email="Mahi07@gmail.com"
      />
      <Card
        name="Beyonce"
        img="https://randomuser.me/api/portraits/women/12.jpg"
        contact="9187954459"
        email="Beyonce457@gmail.com"
      />
    </div>
  );
}
