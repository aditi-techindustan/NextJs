import React, { Component } from "react";
import Home from './Home';
import dynamic from "next/dynamic";
import Head from "next/head"

const loader = dynamic(() => import("./Home"), {
    loading: () => <div>loading....</div>
})

function IndexPage() {
    return (
        <div>
            <Head>
                <title>Next Js App</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"  />
                <link
                    rel="stylesheet"
                    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                    crossorigin="anonymous"
                />
            </Head>
            <Home />
        </div>
    )
}

export default IndexPage;