import React from 'react'
import {
    Box, List, ListItem, ListIcon, Divider, Center, LinkBox, LinkOverlay
} from '@chakra-ui/layout'

import {MdHome, MdSearch, MdLibraryMusic, MdPlaylistAdd, MdFavorite } from 'react-icons/md'
import Image from 'next/image'
import NextLink from 'next/link'

const navMenu = [
    {
      name: 'Home',
      icon: MdHome,
      route: '/',
    },
    {
      name: 'Search',
      icon: MdSearch,
      route: '/search',
    },
    {
      name: 'Your Library',
      icon: MdLibraryMusic,
      route: '/library',
    },
  ]
  
  const musicMenu = [
    {
      name: 'Create Playlist',
      icon: MdPlaylistAdd,
      route: '/',
    },
    {
      name: 'Favorites',
      icon: MdFavorite,
      route: '/favorites',
    },
  ]

const playlists = new Array(30).fill(1).map((_,i) => `Playlist ${i + 1}`)
  
const Sidebar = () => {
  return (
    <Box 
    width='100%'
    height="calc(100vh - 100px)"
    bg='black' 
    px='5px' 
    color='gray'
    >
        <Box py='20px' height="100%">
            <Box width='120px' mb='20px' px="20px" >
                <Image src='/../public/undraw_happy_music_g6wc.png' height={60} width={120} />
            </Box>
            <Box mb='20px'>
                <List spacing={2}>
                    {navMenu.map(menu => (
                        <ListItem px='20px' fontSize='16px' key={menu.name}>
                            <LinkBox>
                                <NextLink href={menu.route} passHref>
                                    <LinkOverlay>
                                        <ListIcon as={menu.icon} color='white' mr='20px'/>{menu.name}
                                    </LinkOverlay>
                                </NextLink>
                            </LinkBox>
                        </ListItem>
                    ))}
                </List>
                <Box mt="20px">
                    <List>
                        {musicMenu.map(menu => (
                            <ListItem px="20px" fontSize="16px" key={menu.name}>
                                <LinkBox>
                                    <NextLink href={menu.route} passHref >
                                        <LinkOverlay>
                                            <ListIcon as={menu.icon} color="white" mr='20px' />
                                            {menu.name}
                                        </LinkOverlay>
                                    </NextLink>
                                </LinkBox>
                            </ListItem>
                        ))}
                    </List>
                </Box>
                <Divider bg="gray" my="10px"/>
                <Box height="66%" overflowY="auto" paddingY="20px">
                    <List spacing={2}>
                        {playlists.map((playlist) => (
                        <ListItem paddingX="20px" key={playlist}>
                            <LinkBox>
                            <NextLink
                                href="/"
                                passHref
                            >
                                <LinkOverlay>{playlist}</LinkOverlay>
                            </NextLink>
                            </LinkBox>
                        </ListItem>
                        ))}
                    </List>
                </Box>
            </Box>
        </Box>
    </Box>
  )
}

export default Sidebar