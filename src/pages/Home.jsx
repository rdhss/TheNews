import React, { useEffect } from 'react'
import SportHero from '../assets/sports-widget.svg'
import LayoutNews from '../layouts/LayoutNews';
import ContainerCard from '../components/ContainerCard';
import { AlignVerticalBottom } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { fethingData } from '../redux/News/action';


const Home = () => {
  const dispatch = useDispatch()
  const DataNews = useSelector(state => state.news)
  useEffect(() => {
    dispatch(fethingData())
  },[dispatch])

  return (
    <LayoutNews>
      <img width="100%" src={SportHero} alt='hero-one' />
      <ContainerCard dataNews={DataNews} icon={<AlignVerticalBottom color='primary' />} title="Lastest Post"/>
    </LayoutNews>
  )
}

export default Home