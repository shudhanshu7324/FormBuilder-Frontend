import styles from './FormBotLogo.module.css'

const FormBotLogo = () => {
  return (
    <div className={styles.logo_div}>
      <img src="formbot.png" alt="logo" />
      <span className={styles.span}>FormBot</span>
    </div>
  )
}

export default FormBotLogo
