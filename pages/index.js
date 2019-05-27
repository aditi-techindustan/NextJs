import React,{Component} from "react";
import Home from './Home';
import dynamic from "next/dynamic";

const loader = dynamic(()=>import("./Home"),{
    loading: ()=> <div>loading....</div>
})

class App extends Component{
    render(){
        return(
            <div>
                <Home/>
            </div>
        )
    }
}

export default App;