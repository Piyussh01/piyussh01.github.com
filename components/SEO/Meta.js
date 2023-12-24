import React from 'react'
import Head from 'next/head';

export default function Meta() {
    return (
        <Head>
           /* Primary Meta Tags */
            <title>Piyussh Singhal</title>
            <meta charSet="utf-8" />
            <meta name="title" content="Piyussh Singhal" />
            <meta name="description"
                content="Piyussh Singhal Portfolio Website. Made with Next.js and Tailwind CSS." />
            <meta name="author" content="Piyussh Singhal (Piyussh01)" />
            <meta name="keywords"
                content="piyussh01, piyussh singhal, piyussh singhal portfolio, Piyussh, piyush, techsavvy, piyussh techsavvy" />
            <meta name="robots" content="index, follow" />
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="language" content="English" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#E95420" />

            /* Search Engine */
            <meta name="image" content="images/logos/fevicon.png" />
            /* Schema.org for Google */
            <meta itemProp="name" content="Piyussh Singhal Portfolio Website" />
            <meta itemProp="description"
                content="Piyussh Singhal Portfolio Website. Made with Next.js and Tailwind CSS." />
            <meta itemProp="image" content="images/logos/fevicon.png" />
            /* Twitter */
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content="Piyussh Singhal Portfolio Website. Made with Next.js and Tailwind CSS." />
            <meta name="twitter:description"
                content="Piyussh Singhal Portfolio Website. Made with Next.js and Tailwind CSS." />
            <meta name="twitter:site" content="vivek9patel" />
            <meta name="twitter:creator" content="vivek9patel" />
            <meta name="twitter:image:src" content="images/logos/logo_1024.png" />
            /* Open Graph general (Facebook, Pinterest & Google+) */
            <meta name="og:title" content="Piyussh Singhal Portfolio Website" />
            <meta name="og:description"
                content="Piyussh Singhal Portfolio Website. Made with Next.js and Tailwind CSS." />
            <meta name="og:image" content="images/logos/logo_1200.png" />
            <meta name="og:url" content="http://piyussh01.github.io/" />
            <meta name="og:site_name" content="Piyussh Singhal Portfolio Website" />
            <meta name="og:locale" content="en_IN" />
            <meta name="og:type" content="website" />

            <link rel="icon" href="images/logos/fevicon.svg" />
            <link rel="apple-touch-icon" href="images/logos/logo.png" />
            <link rel="preload" href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" as="style" />
            <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" rel="stylesheet"></link>
        </Head>
    )
}
