import * as React from 'react'
import {withRouter} from 'react-router-dom'
import Header from 'mods/header'
import MdReader from 'mods/md-reader'

// 样式
import 'common/flexbox.css'
import 'common/common.styl'

const Content = ({children}) => {
  return <>
    <Header />

    <div 
      className="content pt16"
      style={{
        width: '80%',
        margin: '0 auto',
      }}
    >
      {children}
    </div>
  </>
}

export default withRouter(Content)
