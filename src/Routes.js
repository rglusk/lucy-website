import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Cover from './components/Cover';
import Overview from './components/Overview';
import Info from './components/Info';
import NavigationBar from './components/NavigationBar';
import CollectionBrowser from './components/CollectionBrowser';
import ArtDirection from './components/ArtDirection';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const Routes = () => {
    return (
        <Router>
            <Route
                render={({ location }) => (
                    <TransitionGroup>
                        <CSSTransition
                            key={location.pathname === '/' ? '/' : '/*'}
                            timeout={500}
                            classNames="fade"
                            mountOnEnter={true}
                            unmountOnExit={true}
                        >
                            <Switch location={location}>
                                <Route path="/" exact component={Cover} />
                                <Route
                                    path="/*"
                                    render={() => (
                                        <div className="overview-container">
                                            <NavigationBar />
                                            <Route path="/overview" component={Overview} />
                                            <Route path="/info" component={Info} />
                                            <Route path="/collections" component={CollectionBrowser} />
                                            <Route path="/art-direction" component={ArtDirection} />
                                        </div>
                                    )}
                                />
                            </Switch>
                        </CSSTransition>
                    </TransitionGroup>
                )}
            />
        </Router>
    );
};

export default Routes;
