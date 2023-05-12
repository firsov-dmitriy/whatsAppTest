import {createTheme} from "@mui/material"

export const mainTheme = createTheme({
    components: {
       MuiAppBar: {
        'styleOverrides': {
            "colorPrimary": {
                "backgroundColor": "#00a884"
            }
        }
       }
        
    }
})