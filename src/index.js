import { render } from 'react-dom'
import { Suspense } from 'react'
import './styles.css'
import { App } from './App'

render(
  <Suspense fallback={null}>
    <div className="fullscreen">
      <App />
      <Overlay />
    </div>
  </Suspense>,
  document.getElementById('root')
)

function Overlay() {
  return (
    <>
      <div style={{ color: '#808080', position: 'absolute', top: 40, left: 40, fontSize: '13px' }}>
        Motion One Scroll + React Three Fiber demo
      </div>
    </>
  )
}
