import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>
                <title>Rocketflix</title>
            </Head>
            <body className="bg-gradient-to-r from-[#1E46A3] via-black to-[#C12A23]">
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}