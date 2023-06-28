import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value
      const lnf = () => (
        <div className="lside-space">
          <h1>Left Navbar Menu</h1>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
          </ul>
        </div>
      )

      const rnf = () => (
        <div className="rside-space">
          <h1>Right Navbar Menu</h1>
          <p>Ad 1</p>
          <p>Ad 2</p>
        </div>
      )

      const bodyf = () => (
        <div className="ms">
          <h1>Content</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>
      )

      return (
        <div className="ori">
          <div>{showLeftNavbar ? lnf() : null}</div>
          <div>{showContent ? bodyf() : null}</div>
          <div>{showRightNavbar ? rnf() : null}</div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
