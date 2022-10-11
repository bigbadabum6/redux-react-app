import React from 'react'
import { connect } from 'react-redux'

function ThemeSwitcher (props) {
  const { isLight, setTheme } = props

  return (
    <>
      <div>Switched to {isLight ? 'Light' : 'Dark'}</div>
      <button
        onClick={() => {
          setTheme(isLight)
        }}
      >
        Switched {isLight ? 'Dark' : 'Light'}
      </button>
    </>
  )
}

const mapStateToProps = state => {
  return { isLight: state.isLight }
}

const mapDispatchToProps = dispatch => {
  return {
    setTheme: isLight => {
      dispatch({ type: 'setTheme', newTheme: !isLight })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ThemeSwitcher)
