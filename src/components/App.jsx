import React from 'react';
import Header from './Header';
//import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import bootstrap from "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Cards from './Cards';


/*
  import { Link } from 'react-router-dom';
  <Link to="/">Home</Link> | <Link to="/newticket">Create Ticket</Link>
*/

const instaData = [
  {
    name: "melyasuda",
    photo: "https://i.pinimg.com/originals/72/99/23/72992365037c4192ff8290c6529438ed.png",
    location: "Seattle",
    likes: 50,
    comment: ["Awesome photo!","I like it!"]
  },
  {
    name: "ryanbrokenjesus",
    photo: "http://www.cinejosh.com/gallereys/movies/normal/mr_pellikoduku_movie_stills_2812120321/mr_pellikoduku_movie_stills_2812120321_03.jpg",
    location: "Portland",
    likes: 1,
    comment: ["meh","it's ok"]
  },
  {
    name: "hyewon",
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8J6PcP8Lz_-l-PAATx4OnUiVmAoAuINQ4bTyLWFJjQVQOBD6Q",
    location: "Lake City, Seattle",
    likes: 60,
    comment: ["I love it","it's a great photo!"]
  }]

function App(){
  var styles = {
  };
  return (
    <div className='container' style={{ borderBottom: '1px solid black' }}>
      <style jsx>{`
        font-family: Helvetica;
      `}</style>
        <Header />
      <Switch>
      <Route
          exact
          path="/"
          render={props => (
            <Cards {...props} instaData={instaData} />
          )}
        />
      </Switch>
    </div>
  );
}

//App.propTypes = {
//};

export default App;
