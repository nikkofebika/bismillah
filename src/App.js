import React, { Component } from "react";
import './App.css';
import Footer from "./components/Footer";
import Header from "./components/Header";
import Image from "./components/Image";

class App extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: "Inputan 1",
      inputValue2: "Inputan 2",
      menuMakanan: [
        {
          nama: 'Sate',
          harga: 20000
        },
        {
          nama: 'Baks0',
          harga: 15000
        },
        {
          nama: 'BUrjo',
          harga: 5000
        },
        {
          nama: 'Gado-Gado',
          harga: 13000
        },
      ]
    }
  }

  componentDidMount() {
    console.log('componentDidMount dari APP')
  }

  handleInput(state, e) {
    // console.log(e.target.value)
    this.setState({
      [state]: e.target.value
    })
  }
  render() {
    console.log('Dari Render APP')
    return (
      <div className="App">
        <Header subtitle2="Ini subtitle dari Props" />
        <header className="App-header">
          <Image src="https://koran-jakarta.com/images/favicon/favicon-76x76.png" />
          <div style={{ width: '100%', display: 'flex' }}>
            <div className="box" style={{ background: 'aqua' }}>
              <h4>{this.state.inputValue}</h4>
              <input type="text" value={this.state.inputValue} onChange={(e) => this.handleInput('inputValue', e)} />
              <h4>{this.state.inputValue2}</h4>
              <input type="text" value={this.state.inputValue2} onChange={(e) => this.handleInput('inputValue2', e)} />
            </div>
            <div className="box" style={{ background: '#FFFAF0', color: '#000' }}>
              <h3>Menu Makanan</h3>
              {this.state.menuMakanan.map((val, i) => {
                return (
                  <div key={i}>
                    <p>Nama : {val.nama}</p>
                    <p>Harga : {val.harga}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </header>
        <Footer tahun="2021" />
      </div>
    );
  }
}

export default App;
