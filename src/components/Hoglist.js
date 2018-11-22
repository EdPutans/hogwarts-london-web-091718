import React from 'react'
import hogs from './porkers_data'
import Hog from './Hog'
// import { Card, Menu } from 'semantic-ui-react'


export default class Hoglist extends React.Component{


render(){
 return <div>
     
    { hogs.map(hog => < Hog hog={hog} />) }
  
 </div>

}

}