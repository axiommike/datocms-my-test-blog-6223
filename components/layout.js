import Alert from '../components/alert'
import Footer from '../components/footer'
import Header from './header'

export default function Layout({ preview, children }) {
  return (
    <>
      <div className="min-h-screen">
        <Alert preview={preview} />
        <Header/>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}
