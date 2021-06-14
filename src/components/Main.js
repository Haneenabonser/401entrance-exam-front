import React from 'react';
import axios from 'axios';
import Digimon from './Digimon';



class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      root: process.env.REACT_APP_HOST,
      showData: false,
      digimonData: [],
    }
  }

  componentDidMount = async () => {
    const digimons = await axios.get(`${this.state.root}/digimons`);
    this.setState({
      showData: true,
      digimonData: digimons.data,
    })

  }

  addToFav = async(digimon)=>{
    await axios.post(`${this.state.root}/addToFav`,digimon);
  }




  render() {
    return (
      <>
        <h1>Home Page</h1>
        {this.state.showData &&
          this.state.digimonData.map((item, idx) => {
            return <Digimon
              digimon={item}
              index={idx}
              addToFav={this.addToFav}
            />
          }

          )}

      </>
    )
  }
}

export default Main;
