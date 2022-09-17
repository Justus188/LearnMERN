import React from "react"
import {Routes, Route, Link} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"

import AddReview from "./components/add_review"
import Restaurant from "./components/restaurant"
import RestaurantList from "./components/restaurant_list"
import Login from "./components/login"

function App() {
  const [user, setUser] = React.useState(null)

  async function login(user = null) {setUser(user)}
  async function logout() {setUser(null)}

  return (
    <div className="App">
      Hello World
    </div>
  );
}

export default App;
