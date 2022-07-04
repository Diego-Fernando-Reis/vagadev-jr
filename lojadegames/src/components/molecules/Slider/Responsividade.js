import {Component} from 'react';
import Carousel from 'react-elastic-carousel';
import Card from '../Card';
import Outriders from '../../../assets/product-outriders.png'
import Cyberpunk from '../../../assets/product-cyberpunk2077.png'
import Donkey from '../../../assets/product-donkey-kong-country-tropical-freeze.png'

import Item from '../Slider/Item'


class Homes extends Component {
  constructor(props) {
    super(props)
    this.breakPoints = [
      { width: 400, itemsToShow: 1 },
      { width: 600, itemsToShow: 2, itemsToScroll: 1, pagination: false },
      { width: 800, itemsToShow: 3 }
    ]
  }
  render(){
    return(
      <Carousel itemsToScroll={1} itemsToShow={3} breakPoints={this.breakPoints}>
        <Item><Card enderecocard={Outriders} nameCard='Outriders' precoCard='R$ 200,00' click={this.props.click}/></Item>
        <Item><Card enderecocard={Cyberpunk} nameCard='Cyberpunk 2077' precoCard='R$ 200,00' click={this.props.click}/></Item>
        <Item><Card enderecocard={Donkey} nameCard='Donkey Kong' precoCard='R$ 200,00' click={this.props.click}/></Item>
        <Item><Card enderecocard={Outriders} nameCard='Outriders' precoCard='R$ 200,00' click={this.props.click}/></Item>
        <Item><Card enderecocard={Cyberpunk} nameCard='Cyberpunk 2077' precoCard='R$ 200,00' click={this.props.click}/></Item>
        <Item><Card enderecocard={Donkey} nameCard='Donkey Kong' precoCard='R$ 200,00' click={this.props.click}/></Item>
      </Carousel>
    )
  }}
 
  export default Homes