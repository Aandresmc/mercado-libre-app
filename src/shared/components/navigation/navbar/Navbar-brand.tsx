import Image from 'next/image'
import Link from 'next/link'

export const NavbarBrand = () => {
	return (
		<Link href="/">
			<Image src="/brand.png" alt="brand image" width="50" height="50" />
		</Link>
	)
}
