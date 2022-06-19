import React from 'react'
import { Stack } from '@mui/material'
import { Audio} from 'react-loader-spinner'
const Loader = () => {
  return (
    <Stack
    direction='row' justifyContent='center' width="100%"
    >
<Audio
    height="100"
    width="100"
    color='grey'
    ariaLabel='loading'
  />
    </Stack>
   
  )
}

export default Loader