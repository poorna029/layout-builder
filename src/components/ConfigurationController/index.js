import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value
      const content = e => onToggleShowContent(e.target.value)

      const lnf = e => onToggleShowLeftNavbar(e.target.value)

      const rnf = e => onToggleShowRightNavbar(e.target.value)

      return (
        <div className="cc">
          <h1>Layout</h1>
          <div className="check">
            <input type="checkbox" id="c" onChange={content} />
            <label htmlFor="c">Content</label>
            <br />
          </div>
          <div className="check">
            <input type="checkbox" id="ln" onChange={lnf} />
            <label htmlFor="ln">Left Navbar</label>
            <br />
          </div>

          <div className="check">
            <input type="checkbox" id="rn" onChange={rnf} />
            <label htmlFor="rn">Right Navbar</label>
            <br />
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
