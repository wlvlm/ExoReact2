import logo from './logo.svg';
import './App.css';

function Header(){
    return(
       <header className="App-header">
            <img src={logo} alt="logo" className="App-logo"></img>
            <ul>
            <li><a href="#" class="App-link">Nous trouver
                </a></li>
            <li><a href="#" class="App-link">Nous contacter
                </a></li>
            <li><a href="#" class="App-link">Nous suivre
                </a></li>
            </ul>
        </header> 
    )
}
    

export default Header;