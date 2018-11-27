import React from "react";
import Header from "./Header";
//import PropTypes from 'prop-types';
import { Switch, Route } from "react-router-dom";
import bootstrap from "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Cards from "./Cards";
import { v4 } from 'uuid';

/*
  import { Link } from 'react-router-dom';
  <Link to="/">Home</Link> | <Link to="/newticket">Create Ticket</Link>
*/


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      instaData: [
        {
          name: "melyasuda",
          photo:
            "https://i.pinimg.com/originals/72/99/23/72992365037c4192ff8290c6529438ed.png",
          location: "Seattle",
          likes: 50,
          comment: ["Awesome photo!", "I like it!"],
          id: v4()
        },
        {
          name: "melyasuda",
          photo:
            "https://i.pinimg.com/originals/72/99/23/72992365037c4192ff8290c6529438ed.png",
          location: "Seattle",
          likes: 50,
          comment: ["Awesome photo!", "I like it!"],
          id: v4()
        },
        {
          name: "ryanbrokenjesus",
          photo:
            "http://www.cinejosh.com/gallereys/movies/normal/mr_pellikoduku_movie_stills_2812120321/mr_pellikoduku_movie_stills_2812120321_03.jpg",
          location: "Portland",
          likes: 1,
          comment: ["meh", "it's ok"],
          id: v4()
        },
        {
          name: "hyewon",
          photo:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8J6PcP8Lz_-l-PAATx4OnUiVmAoAuINQ4bTyLWFJjQVQOBD6Q",
          location: "Lake City, Seattle",
          likes: 60,
          comment: ["I love it", "it's a great photo!"],
          id: v4()
        },
        {
          name: "ryanbrokenjesus",
          photo:
            "http://www.cinejosh.com/gallereys/movies/normal/mr_pellikoduku_movie_stills_2812120321/mr_pellikoduku_movie_stills_2812120321_03.jpg",
          location: "Portland",
          likes: 1,
          comment: ["meh", "it's ok"],
          id: v4()
        },
        {
          name: "ryanbrokenjesus",
          photo:
            "http://www.cinejosh.com/gallereys/movies/normal/mr_pellikoduku_movie_stills_2812120321/mr_pellikoduku_movie_stills_2812120321_03.jpg",
          location: "Portland",
          likes: 1,
          comment: ["meh", "it's ok"],
          id: v4()
        }
      ]
    };
    this.handleLikeButton = this.handleLikeButton.bind(this);
  }

  handleLikeButton(id){
    let cards = this.state.instaData.slice();
    cards[id].likes++;
    this.setState({instaData:cards});
  }

  // this.state.instaData.likes

  render() {
    return (
      <div className="container">
        <style jsx>{`
          font-family: Helvetica;
        `}</style>
        <Header />
        <Switch>
          <Route
            exact
            path="/"
            render={props => <Cards {...props} instaData={this.state.instaData} onLikeButton={this.handleLikeButton} />}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
