import React from 'react'
import {Box} from '@chakra-ui/layout'
import Sidebar from './Sidebar'
const Layout = ({children}) => {
  return (
    <Box width='100vw' height='100vh'>
      <Box position='absolute' top='0' width='250px' left='0'>
        <Sidebar />
      </Box>
      <Box marginLeft='250px' marginBottom='100px'>
      {children}
      home
      </Box>
      <Box position='absolute' left='0' bottom='0' >
        Footer
      </Box>
      
      </Box>
  )
}

export default Layout