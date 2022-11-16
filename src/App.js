import "./App.css";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
// import TodoList from "./Pages/Home";
import { Navigates } from "./Navigate";
import { Route, Routes, Navigate } from "react-router-dom";
import Profile from "./Pages/Profile";
import TodoBody from "./Components/TodoBody/TodoBody";
import ProtectRoutes from "./API/ProtectRoutes";
// import Todo from "./Pages/todo";
import TodoList from "./Pages/Home/index";
import { Burgermenu } from "./Navigate";

function App() {
  return (
    <div className="App">
      <Navigates />
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectRoutes />}>
          <Route path="/home" element={<TodoList />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="*" element={<Navigate to={"/register"} replace />} />
      </Routes>
    </div>
  );
}

export default App;
