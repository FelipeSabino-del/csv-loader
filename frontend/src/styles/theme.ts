import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
    useSystemColorMode : true,
    fonts: {
        heading: "Poppins",
        body: "Poppins",
    },
    styles: {
        global: {
            button: {
                _focus: {boxShadow: "none !important"}
            },
            body: {
                bg: "#F2F2F2",
                color: "gray.900"
            }
        }
    }
})