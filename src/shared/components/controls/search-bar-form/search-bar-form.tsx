import React from 'react'
import styles from './search-bar-form.module.scss'
import { Error } from '@/shared/components/error/error'
import { SearchBarFormProps } from './props'

export const SearchBarForm = ({ onSubmit, query, onChange, errorText }: SearchBarFormProps) => {
	return (
		<form className={styles.container} onSubmit={onSubmit}>
			<div className={'input-group'}>
				<input
					type="text"
					className={'form-control'}
					name={'search'}
					placeholder={'Nunca dejes de buscar'}
					value={query}
					onChange={onChange}
					required={true}
					alt="search product"
				/>
				<div className={'input-group-append'}>
					<button className={'btn btn-secondary'} type="submit">
						<i className={'bi bi-search'}></i>
					</button>
				</div>
			</div>
			<Error error={errorText} />
		</form>
	)
}
