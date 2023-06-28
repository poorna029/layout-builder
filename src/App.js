import {Component} from 'react'

import ConfigurationController from './components/ConfigurationController'

import Layout from './components/Layout'

import ConfigurationContext from './context/ConfigurationContext'

import './App.css'

class App extends Component {
  state = {showContent: true, showLeftNavbar: true, showRightNavbar: true}

  changeLN = () => {
    this.setState(p => ({
      showLeftNavbar: !p.showLeftNavbar,
    }))
  }

  changeRN = () => {
    this.setState(p => ({
      showRightNavbar: !p.showRightNavbar,
    }))
  }

  changeBODY = () => {
    this.setState(p => ({
      showContent: !p.showContent,
    }))
  }

  render() {
    const {showContent, showLeftNavbar, showRightNavbar} = this.state
    return (
      <div className="ce">
        <ConfigurationContext.Provider
          value={{
            showContent,
            showLeftNavbar,
            showRightNavbar,
            onToggleShowContent: this.changeBODY,
            onToggleShowLeftNavbar: this.changeLN,
            onToggleShowRightNavbar: this.changeRN,
          }}
        >
          <ConfigurationController />
          <Layout />
        </ConfigurationContext.Provider>
      </div>
    )
  }
}

export default App
