import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Dashboard } from './components/Dashboard'

export const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Dashboard} />
            </Switch>
        </BrowserRouter>
    )
}
