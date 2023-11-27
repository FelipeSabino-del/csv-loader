import {
  ChakraProvider,
  Box,
  Grid,
  theme,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "../components/ColorModeSwitcher"
import { Routes } from "./Routes"
import { BrowserRouter } from "react-router-dom"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <BrowserRouter>
          <Routes/>
        </BrowserRouter>
      </Grid>
    </Box>
  </ChakraProvider>
)
