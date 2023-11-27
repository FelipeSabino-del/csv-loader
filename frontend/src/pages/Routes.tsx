import { Route, Switch } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import FileUploader from "./FileUploader";
import SearchScreen from "./SearchScreen";

export function Routes() {
    return(
        <Box px={[0, 2, 4, 6]}>
            <Switch>
                <Route path="/" exact component={FileUploader} />
                <Route path="/search" exact component={SearchScreen} />
                <Route path="*">
                    <h1>Seems this route does not exist!</h1>
                </Route>
            </Switch>
        </Box>
    )
}