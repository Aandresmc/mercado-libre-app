import React from 'react'
import { Navbar } from '../navigation/navbar/Navbar'
import { SearchBarFormProps } from '@/shared/components/controls'

const Header = ({ ...props }: SearchBarFormProps) => (
	<header>
		<Navbar {...props} />
	</header>
)

export default Header
