import React from 'react'
import './CardView.css'
import {Header} from '../../../shared/header/header'




import Card from '../tarjetas/Card'


import Card1 from '../tarjetas/Card1'
import Card2 from '../tarjetas/Card2'
import Card3 from '../tarjetas/Card3'
import Card4 from '../tarjetas/Card4'
import Card5 from '../tarjetas/Card5'
import Card6 from '../tarjetas/Card6'
import Card7 from '../tarjetas/Card7'
import Card8 from '../tarjetas/Card8'
import Card9 from '../tarjetas/Card9'
import Card10 from '../tarjetas/Card10'




export default function Cards() {
    return (
        <>
        <Header></Header>
        {/* <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Card1 text = 'Lorem ipsum dolor sit amet. Sed dicta quo rerum quam et maiores voluptas et distinctio porro ut fuga mollitia vel voluptatem laboriosam eum odit vitae. Quo repellendus adipisci a modi soluta eos ipsum aut rerum blanditiis nam quia dolores eum modi beatae. Ut reiciendis quia est quaerat officiis sed aliquid delectus et dicta magnam. Id dicta quibusdam ut delectus ipsum et laudantium amet ad architecto dicta sit sint qui dolorem ipsam id assumenda tempore. Lorem ipsum dolor sit amet. Sed dicta quo rerum quam et maiores voluptas et distinctio porro ut fuga mollitia vel voluptatem laboriosam eum odit vitae. Quo repellendus adipisci a modi soluta eos ipsum aut rerum blanditiis nam quia dolores eum modi beatae. Ut reiciendis quia est quaerat officiis sed aliquid delectus et dicta magnam. Id dicta quibusdam ut delectus ipsum et laudantium amet ad architecto dicta sit sint qui dolorem ipsam id assumenda tempore. '></Card1>
        <br />
        <Card2></Card2>
        <br />
        <Card3></Card3>
        <br />
        <Card4></Card4>
        <br />
        <Card5></Card5>
        <br />
        <Card6></Card6>
        <br />
        <Card7></Card7>
        <br />
        <Card8></Card8>
        <br />
        <Card9></Card9>
        <br />
        <Card10></Card10>
        <br /> */}
        <div className="grid-container">
          <div className="item1"><Card1></Card1></div>
          <div className="item2"><Card2></Card2></div>
          <div className="item3"><Card3></Card3></div>  
          <div className="item4"><Card4></Card4></div>
          <div className="item5"><Card5></Card5></div>
          <div className="item6"><Card6></Card6></div>
          <div className="item7"><Card7></Card7></div>
          <div className="item8"><Card8></Card8></div>
          <div className="item9"><Card9></Card9></div>
          <div className="item10"><Card10></Card10></div>
        </div>
        </>
    )
}
