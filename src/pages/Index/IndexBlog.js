import React, {useContext} from 'react';
import Header from "../../components/Header";
import {Redirect, Route, Switch} from "react-router-dom";
import {HotPost} from "../../components/HotPost";
import AppliedRoute from "../../components/AppliedRoute/AppliedRoute";
import FrontEnd from "../FrontEnd";
import {Login} from "../Login";
import {LogoutHandler} from "../Logout/Logout";
import ArticlePost from "../../components/ArticlePost/ArticlePost";
import Contact from "../../components/Contact";
import {Article} from "../Article";
import {NotFound} from "../NotFound";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";
import Context, {UserLoginContext} from "../../Context";
import {useReducer} from "reinspect";
import reducer, {initialState} from "../../reducers/reducer";

const IndexBlog = () => {
    let { isAuthenticated,setAuthenticated } = useContext(Context);
    const useUserState = useReducer(reducer, initialState);
    const {UserLogin} = useContext(UserLoginContext);
    return(
        <div className={'wrapper--IndexBlog'}>
            <div className="App">
                <Header UserLogin={UserLogin} appProps={{isAuthenticated,setAuthenticated }}/>
            </div>
            <Route exact path="/">
                <HotPost/>
            </Route>
            <div className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <Switch>
                                <AppliedRoute exact path="/" children={props => {  return isAuthenticated ? <FrontEnd/> : <Redirect to={'/login'}/>   }} appProps={{isAuthenticated,setAuthenticated }} />
                                <AppliedRoute exact path="/login" component={Login} />
                                <AppliedRoute exact path="/logout" component={LogoutHandler} appProps={{isAuthenticated,setAuthenticated }}/>
                                <AppliedRoute exact path="/post" component={ArticlePost} appProps={{isAuthenticated,setAuthenticated }}/>
                                <AppliedRoute exact path="/contact" component={Contact} appProps={{isAuthenticated,setAuthenticated }}/>
                                <AppliedRoute exact path='/test' component={Article} appProps={{isAuthenticated,setAuthenticated }}/>
                                <AppliedRoute path='/:slug' children={(props) =>  { return <Article {...props} />  }} appProps={{isAuthenticated,setAuthenticated }}/>
                                {/*<Route component={NotFound}/>*/}
                                {/*return props.match.isExact ? <Article {...props} /> : <NotFound/>*/}
                            </Switch>
                        </div>
                        <div className="col-md-4">
                            <Sidebar/>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default IndexBlog;