import React from 'react'
import { Image } from 'semantic-ui-react'
const Image1 = React.memo(() => (
  <Image src={require("./deakin.png")} loading="lazy" />
))
export default Image1