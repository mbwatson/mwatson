import styles from './drawer.module.css'
import { Icon } from './icon'

const DRAWER_WIDTH = `400px`

export const Drawer = ({ open, closeHandler, children }) => {
  return (
    <div
      className={ styles.drawer }
      style={{
        minWidth: open ? DRAWER_WIDTH : '0',
        maxWidth: open ? DRAWER_WIDTH : '0',
      }}
    >
      { children }
      <button className={ styles.toggler } onClick={ closeHandler }>
        <Icon icon="close" fill="#fff" />
      </button>
    </div>
  )
}
