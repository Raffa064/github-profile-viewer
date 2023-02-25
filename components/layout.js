import classNames from 'class-names'
import styles from './layout.module.css'

export default function Layout({ type, orientation, children, className }) {
    return (
        <div className={classNames(styles.layout, className, styles[type || "montain"], styles[orientation || "vertical"])}>
            {children}
        </div>
    )
}