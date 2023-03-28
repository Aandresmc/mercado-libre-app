export interface SearchBarFormProps {
	onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
	query: string
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
	errorText: string
}
