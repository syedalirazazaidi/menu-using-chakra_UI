import { Box } from '@chakra-ui/react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from './header'

export default function Home() {
  return (
    <Box bg="#571F9C">
      <Header />
    </Box>
  )
}
