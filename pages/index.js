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
                <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
                {/* key property make sure that the tag is only rendered once */}
            </Head>
            <Head>
                <meta
                    name="viewport"
                    content="initial-scale=1.2, width=device-width"
                    key="viewport"
                />
            </Head>
            <Home />
        </div>
    )
}

export default IndexPage;