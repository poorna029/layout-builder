import React from 'react'

const Context = React.createContext({
  ln: false,
  rn: false,
  body: false,
  changeLN: () => {},
  changeRN: () => {},
  changeBODY: () => {},
})

export default Context
