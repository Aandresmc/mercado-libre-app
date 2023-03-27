import styles from './product.module.scss'
export const ProductButton = () => {
	return (
		<button className={styles.btn} type="button">
			<span>Comprar</span>
		</button>
	)
}
