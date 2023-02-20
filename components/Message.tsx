import styles from "./Message.module.css"

type Props = {
  body: string;
}

const Message = (props: Props) => {
  return(
    <>
      <li className={styles.body}>
        <div>{props.body}</div>
      </li>
    </>
  )

}

export default Message
