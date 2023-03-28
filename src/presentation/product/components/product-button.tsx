import styles from './product.module.scss'
export const ProductButton = () => {
	return (
		<button data-testid="btn-buy"  className={styles.btn} type="button">
			<span>Comprar</span>
		</button>
	)
}
