import React, { useEffect } from 'react'
import LayoutNews from '../layouts/LayoutNews';
import ContainerCard from '../components/ContainerCard';
import { SearchRounded } from '@mui/icons-material';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { SearchingData } from '../redux/News/action';

const SearchNews = () => {
  const router = useParams()
  const dispatch = useDispatch()
  const DataNews = useSelector(state => state.news)
  
  // eslint-disable-next-line
    useEffect(() => {
      dispatch(SearchingData(router.id))
    },[dispatch])

  return (
    <LayoutNews>
      <ContainerCard dataNews={DataNews} icon={<SearchRounded color='primary'/>} title={`Results News : '${router.id}'`}/>
    </LayoutNews>
  )
}

export default SearchNews