'use strict'
/**
 * Created by weiChow on 2020/06/30.
 * @author weiChow
 * 首页
 * export default Index;
 */

import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import './Index.less'
import { getOrgInfoByOrgCode } from '@/services/global'

function Index(props) {
  useEffect(() => {
    getOrgInfoByOrgCode().then(response => {
      console.log(response)
      props.dispatch({
        type: 'global/setSystemReady',
        payload: true
      })
    })
  }, [])

  return (
    <main className="main">
      <h1 className="animate__animated animate__fadeIn">welcome Raper Cli ！</h1>
    </main>
  )
}

Index.propTypes = {
  dispatch: PropTypes.func
}

export default connect()(Index)