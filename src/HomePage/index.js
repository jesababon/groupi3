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
  <option value="rnb">RnB</option>
  <option value="altRock">Alternative Rock</option>
  <option value="metal">Metal</option>
  </select>
  <select class="locationSelect">
  <option value="nyc">New York City</option>
  <option value="sanfran">San Francisco</option>
  <option value="atlanta">Atlanta</option>
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
