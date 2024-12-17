import { createSystem, defaultConfig } from "@chakra-ui/react";

const defaultTheme = createSystem(defaultConfig, {
    theme: {
        tokens: {
            fonts: {
                body: {value: `'Montserrat', sans-serif`}
            }
        }
    }
})


export default defaultTheme