import React, { Component } from 'react'
import MenuItem from '../menuItem/MenuItem.jsx'
import './MenuStyle.scss'
class Menu extends Component {
    state = { 
        sections:[{
            title:'Jackets',
            imageUrl:'https://images.pexels.com/photos/157675/fashion-men-s-individuality-black-and-white-157675.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=220&w=220',
            id:1
        },
        {
            title:'Trainers',
            imageUrl:'https://images.pexels.com/photos/1478442/pexels-photo-1478442.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            id:2 
        },
        {
            title:'Handbags',
            imageUrl:'https://images.pexels.com/photos/5462561/pexels-photo-5462561.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=190',
            id:3 
        },
        {
            title:'Women',
            imageUrl:'https://i.ibb.co/GCCdy8t/womens.png',
            id:4 
        },
        {
            title:'Men',
            imageUrl:'https://images.pexels.com/photos/2896840/pexels-photo-2896840.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=150&w=1260',
            id:5 
        },
    
    ]
     }
    render() { 
        return ( 
            <div className="menu">
                {
                    this.state.sections.map(({title,imageUrl,id}) =>(
                        <MenuItem key= {id} title={title} imageUrl={imageUrl}/>
                    ))
                }
            </div>
         );
    }
}
 
export default Menu;