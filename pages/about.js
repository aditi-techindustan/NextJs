import React , { Component } from "react";
import Router from "next/router";

class about extends Component{
    render(){
        const handler = ()=>{
            Router.push({
                pathname:'/blog',
                query:{name:'abc'}
            })
        }

        const handleRouteChange  = (url)=>{
            console.log('App is changing to :', url )
        }//fires when a route starts to change

        Router.events.on('routeChangeStart',handleRouteChange)

        Router.events.off('routeChangeStart',handleRouteChange)//to unsubscribe on method

        Router.events.on('routeChangeError',(err,url)=>{
            if(err.cancelled){
                console.log(`Route to ${url} was cancelled`)
            }
        })
        Router.events.on('beforeHistoryChange',handleRouteChange)
        Router.events.off('beforeHistoryChange',handleRouteChange)

        return(
            <React.Fragment>
                <h2>Here is About page!</h2>
                <div>
                    Click <span onClick={handler} style={{cursor:'pointer',textDecoration:'underline'}}>here</span> to read more!
                </div>
            </React.Fragment>
        )
    }
}

export default about;