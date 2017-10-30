import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'
import Cover from './Cover'
import Overview from './Overview'
import AboutMe from './AboutMe'
import CollectionBrowser from './CollectionBrowser'
import ArtDirection from './ArtDirection'

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Cover} />
                <Route path="/overview" component={Overview} />
                <Route path="/info" component={AboutMe} />
                <Route path="/collections" component={CollectionBrowser} />
                <Route path="/art-direction" component={ArtDirection} />
            </Switch>
        </Router>
    );
}

export default Routes;