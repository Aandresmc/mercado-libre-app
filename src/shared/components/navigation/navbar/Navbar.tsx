import React from 'react'
import styles from './navbar.module.scss'
import { NavbarBrand } from './Navbar-brand'
import { SearchBarForm, SearchBarFormProps } from '@/shared/components/controls'

export const Navbar = ({ ...props }: SearchBarFormProps) => {
	return (
		<nav className={styles.navbar}>
			<NavbarBrand />
			<SearchBarForm {...props} />
		</nav>
	)
}
