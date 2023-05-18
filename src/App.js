import './App.css';

import Header from './Components/Header.jsx';
import Card from './Components/Card.jsx';
import Footer from './Components/Footer.jsx';


function App() {

  const data = [  
    {
      title: 'Golondrina',
      desc: 'Acuarela de 24x32 cm. Vendida.',
      photo: require('./Assets/Imgs/Screenshot_20230517_195723_Instagram (1).jpg')
    },
    {
      title: 'Martin pescador',
      desc: 'Acuarela de 24x32 cm. Disponible.',
      photo: require('./Assets/Imgs/Screenshot_20230517_195749_Instagram (1).jpg')
    },
    {
      title: 'Chucao',
      desc: 'Acuarela de 24x32 cm. Vendida.',
      photo: require('./Assets/Imgs/Screenshot_20230517_195844_Instagram.jpg')
    },
  ];

  return (
    <>
      <div className="App container">
        <div>
          <Header 
            title="Galeria de imagenes con react" 
          />
        <hr></hr>
        {data.map((item) => (
          <div className="boxes">
            <div className="col-12">
              <Card 
                title={item.title} 
                desc={item.desc}
                photo={item.photo} 
              />
            </div>
          </div>
        ))}
        <hr></hr>
        </div>
      </div>
      <Footer>
        
      </Footer>
    </>
  );
};

export default App;
