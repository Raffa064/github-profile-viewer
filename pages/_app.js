import "@/styles/globals.css"
import Head from "next/head"

export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <script
                    defer
                    type="module"
                    src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
                ></script>
                <script
                    defer
                    nomodule
                    src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
                ></script>
            </Head>
            <Component {...pageProps} />
        </>
    )
}