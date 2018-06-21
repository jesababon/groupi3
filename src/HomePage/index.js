import React, { Component } from "react";
import "./style.css";

class HomePage extends Component {
  render() {
  return (
  <div className="container">
  <header>Groupi3</header>
  <nav>Username Password Register LogIn</nav>
  <div className="landingBody">
  <form action="submit" method="get">
  <select class="genreSelect">
  <option value="rnb">Rock</option>
  <option value="altRock">Pop</option>
  <option value="metal">EDM</option>
  <option value="metal">Rap</option>
  </select>
  <input type="submit" value="Find Event" />
  </form>
  </div>
  <footer>Copyright Group3</footer>
  </div>
);
  }
}

export default HomePage;
