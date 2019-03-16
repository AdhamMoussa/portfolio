import React from "react"

import { StaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"

const Seo = () => {
    return (
        <StaticQuery
            query={graphql`
                {
                    site {
                        siteMetadata {
                            title
                            description
                        }
                    }
                }
            `}
            render={data => (
                <Helmet>
                    <meta charset="UTF-8" />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1.0"
                    />
                    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
                    <link
                        rel="stylesheet"
                        href="https://use.fontawesome.com/releases/v5.7.2/css/all.css"
                        integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr"
                        crossorigin="anonymous"
                    />
                    <link
                        href="https://fonts.googleapis.com/css?family=Josefin+Sans:300,400,400i,600,700"
                        rel="stylesheet"
                    />
                    <link
                        rel="shortcut icon"
                        href="/assets/images/logo.png"
                        type="image/x-icon"
                    />
                    <title>{data.site.siteMetadata.title}</title>
                </Helmet>
            )}
        />
    )
}

export default Seo
