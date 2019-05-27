import React , {Component  } from "react";
import Link from "next/link";

class Home extends Component{
    render(){
        return(
            <div>
                <h1>Hello, from Home page</h1>
                <style jsx>
                    {`
                        h1{
                            color: green;
                        }
                        div{
                            background: #ccc
                        }
                    `}
                    
                </style>
                <style global jsx>
                        {`
                            body{
                                background:white
                            }
                        `}
                </style>
                <Link href="/Contact">
                    <a>Contact</a>
                </Link>
                <br/>
                <Link href="/blog">
                    <a>Blog</a>
                </Link>
            </div>
        )
    }
}

export default Home