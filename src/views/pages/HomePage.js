import React, { Component } from 'react'
import SliderHome from '../../components/animations/SliderHome';
import BannerHome from '../../components/home/BannerHome';
import OurProduct from '../../components/home/OurProduct';
import BannerVideoHome from '../../components/home/BannerVideoHome';
import InstragramShipping from '../../components/home/InstragramShipping';

export default class HomePage extends Component {
  render() {
    return (
      <div>
            <SliderHome />
            <BannerHome />
            <OurProduct />
            <BannerVideoHome />
            <InstragramShipping />
      </div>
    )
  }
}
