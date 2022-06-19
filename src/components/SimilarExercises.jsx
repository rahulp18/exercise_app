import React from 'react'
import { Typography,Box, Stack } from '@mui/material'

import HorizontalScrollbar from './HorizontalScrollbar'
import Loader from './Loader'
const SimilarExercises = ({targetMuscleExercises,equimentExercises}) => {
  //  console.log(targetMuscleExercises);
  //  console.log(equimentExercises);
  return (
   <Box sx={{mt:{lg:'100px',xs:'0px'}}}>
    <Typography sx={{fontSize:{lg:'44px',sx:'25px'},ml:'20px'}} fontWeight={700} color='#000' mb='33px'>
      Similar <span style={{color:'#FF2625',textTransform:'capitalize'}}>Target Muscle</span> exercises
    </Typography>
  <Stack direction='row' sx={{p:2,position:'relative'}}>
    {targetMuscleExercises.length!==0 ?<HorizontalScrollbar data={targetMuscleExercises} />:<Loader/>}
  </Stack>
  <Typography sx={{fontSize:{lg:'44px',sx:'25px'},ml:"20px",mt:{lg:'100px',xs:'60px'}}} fontWeight={700} color='#000' mb='33px'>
  Similar <span style={{color:'#FF2625',textTransform:'capitalize'}}>Equipmwnt</span> exercises
  </Typography> 
  <Stack direction='row' sx={{p:2,position:'relative'}}>
    {equimentExercises.length!==0 ?<HorizontalScrollbar data={equimentExercises} />:<Loader/>}
  </Stack>
   </Box>
  )
}

export default SimilarExercises