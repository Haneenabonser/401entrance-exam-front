import React from 'react';
import axios from 'axios';
import FavDigimon from './FavDigimon';
import Update from './Update';



class FavoriteDigimons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      root: process.env.REACT_APP_HOST,
      showFavorite: false,
      favData: [],
      showForm: false,
      index: 0,
      name: '',
      img: '',
      level: '',
    }
  }

  componentDidMount = async () => {
    const favDigimons = await axios.get(`${this.state.root}/getFav`);
    this.setState({
      showFavorite: true,
      favData: favDigimons.data,
    })

  }

  deleteFav = async (index) => {
    const id = this.state.favData[index]._id;
    const newData = await axios.delete(`${this.state.root}/delete/${id}`);
    this.setState({
      favData: newData.data,
    })
  }


  showForm = (index) => {
    const digimon = this.state.favData[index];
    this.setState({
      showForm: true,
      name: digimon.name,
      img: digimon.img,
      level: digimon.level,
    })
  };


  nameHandler = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  imgHandler = (e) => {
    this.setState({
      img: e.target.value
    })
  }

  levelHandler = (e) => {
    this.setState({
      level: e.target.value
    })
  }



  updateForm = async (e) => {
    e.preventDefault();
    const newDigimon = {
      name: this.state.name,
      img: this.state.img,
      level: this.state.level,
    }
    const data = await axios.put(`${this.state.root}/update/${this.state.index}`, newDigimon);
    this.setState({
      favData: data.data,
    });
  };



  render() {
    return (
      <>

        <h1>Favorite Page</h1>

        {this.state.showForm &&
          <Update
            name={this.state.name}
            img={this.state.img}
            level={this.state.level}
            nameHandler={this.nameHandler}
            imgHandler={this.imgHandler}
            levelHandler={this.levelHandler}
            updateForm={this.updateForm}
          />
        }


        {this.state.showFavorite &&
          this.state.favData.map((item, idx) => {
            return <FavDigimon
              digimon={item}
              index={idx}
              deleteFav={this.deleteFav}
              showForm={this.showForm}
            />
          }

          )}

      </>
    )
  }
}

export default FavoriteDigimons;
