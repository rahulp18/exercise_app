import React,{useEffect,useState} from 'react'
import {Box,Button,Stack,TextField,Typography} from '@mui/material'
import HorizontalScrollbar from './HorizontalScrollbar'
import { fetchData,exerciseOptions } from '../utils/fetchData';
const SearchExercises = ({setExercises,bodyPart,setBodyPart}) => {

  const [search,setSearch]=useState('');
  const [bodyParts,setBodyParts]=useState([]);
 
useEffect(()=>{
  const fetchExerciseData=async ()=>{
    const bodyPartsData=await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions)
    setBodyParts(['all',...bodyPartsData]);
   
  }

  fetchExerciseData();
},[]);

const handleSearch=async ()=>{
  if(search){
    const exercisesData=await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions)
    const searchedExercises=exercisesData.filter(
         (item)=>item.name.toLowerCase().includes(search)
         || item.target.toLowerCase().includes(search)
         || item.equipment.toLowerCase().includes(search)
         || item.bodyPart.toLowerCase().includes(search)
    );
    window.scrollTo({top:1800,left:100,behavior:'smooth'})

    setSearch('');
    setExercises(searchedExercises);
  }
}
 
  return (
     <Stack alignItems='center' mt='37px' justifyContent='center' p='20px'>
<Typography fontWeight={700} sx={{fontSize:{lg:'44px',xs:'25px'}}} mb='49px' textAlign='center'>
  Awesome Exerxises You <br/> Should Know
</Typography>
<Box position='relative' mb='72px'>
  <TextField 
  height='76px'
  sx={{input:{fontWeight:'700px',border:'none',borderRadious:'4px'},width:{lg:'1170px',xs:'350px'},backgroundColor:'#fff',borderRadius:'40px'}}
  value={search}
  placeholder='Search Exercises'
  type='text'
  onChange={(e)=>setSearch(e.target.value)}
  />
  <Button className='search-btn' onClick={handleSearch} sx={{bgcolor:'#FF2625',color:'#fff',textTransform:'none',height:'56px',position:'absolute',right:'0px',fontSize:{lg:'20px',xs:'14px'}}}>
    Search
  </Button>
</Box>
<Box sx={{position:'relative',width:'100%',p:'20px'}}>
  <HorizontalScrollbar data={bodyParts} bodyParts setBodyPart={setBodyPart} bodyPart={bodyPart} />
</Box>


     </Stack>

  )
}

export default SearchExercises