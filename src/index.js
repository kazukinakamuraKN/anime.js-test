import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import anime from 'animejs'
import Anime from 'react-anime'

class Game extends React.Component {

  render() {
    return (
      <Anime easing="easeOutElastic"
         duration={2000}
         direction="alternate"
         loop={true}
         delay={(el, index) => index * 240}
         translateX='0rem'
         translateY='0rem'
         rotate='1turn'
         scale={[.75, .9]}
         backgroundColor='#FF0'
         border-radius='50%'>
      <div className="blue">
      <Anime easing="easeOutElastic"
         duration={1300}
         direction="alternate"
         loop={true}
         delay={(el, index) => index * 10}
         translateX='0rem'
         translateY='0rem'
         rotate='1turn'
         scale={[.75, .9]}
         backgroundColor='#FFF'
         border-radius='50%'>
        <div className="green">
          
         <div className="red">
         </div>
         
        </div>
        </Anime>
      </div>
      </Anime>
    )
  }
}

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);