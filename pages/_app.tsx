// import ErrorBoundary from "@/Components/Error"
import "@/styles/globals.css"
import type { AppProps } from "next/app"
import localFont from "next/font/local"

const myFont = localFont({
  src: "../public/fonts/strawford-regular-webfont.woff2",
})
export default function App({ Component, pageProps }: AppProps) {
  return (
    // <ErrorBoundary>
    <main className={myFont.className}>
      <Component {...pageProps} />
    </main>
    // </ErrorBoundary>
  )
}
