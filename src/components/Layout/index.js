import Header from '../Header'
import Body from '../Body'
import Footer from '../Footer'
import './index.css'

const Layout = () => (
  <div className="lay">
    {/* header */}
    <Header />

    {/* body-> 1.ln 2.context 3.rn */}
    <Body />

    {/* footer */}
    <Footer />
  </div>
)

export default Layout
