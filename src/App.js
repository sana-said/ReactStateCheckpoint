import React from 'react';
import './App.css';
import photo from "./Stephen William.jpg";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {

  state = {
    show: true,
    counter: 0,
    person: {
      fullName: "Stephen Hawking",
      bio: "Stephen William Hawking, né le 8 janvier 1942 à Oxford et mort le 14 mars 2018 à Cambridge, est un physicien théoricien et cosmologiste britannique. Ses livres et ses apparitions publiques ont fait de ce théoricien de renommée mondiale une célébrité.Depuis l'âge d'une vingtaine d'années, Hawking souffre d'une forme rare — de début précoce et d'évolution lente — de sclérose latérale amyotrophique (SLA) ; sa maladie progresse au fil des ans au point de le laisser presque complètement paralysé. Pourtant, il est professeur de mathématiques à l'université de Cambridge de 1980 à 20091, membre du Gonville and Caius College et chercheur distingué du Perimeter Institute for Theoretical Physics. Il est connu pour ses contributions dans les domaines de la cosmologie et la gravité quantique, en particulier dans le cadre des trous noirs. Son succès est également lié à ses ouvrages de vulgarisation scientifique dans lesquels il discute de ses théories et de la cosmologie en général, en particulier Une brève histoire du temps. ",
      imgSrc: photo,
      profession: "Physicien",
    }
   
  };
  componentDidMount() {
     setInterval(() => {
      // set counter state + 1
      this.setState({ counter: this.state.counter + 1 });}, 1000);
    }
   

  render() {

    let myButton = <Button variant="outline-success" onClick={() => this.setState({ show: !this.state.show })}>Click Me</Button>
    return (
      <div className="App">
        <header className="App-header">
          {myButton}
          {this.state.show ? <div>
            <h1>{this.state.person.fullName}</h1>
            <h1>{this.state.person.profession}</h1>
            <div><img src={this.state.person.imgSrc}  alt="Stephen Hawking sur sa chaise roulante "/>
            <p>{this.state.person.bio}</p></div>
          </div>
            : null}
        </header>

      </div>
    );
  }
}

export default App;
