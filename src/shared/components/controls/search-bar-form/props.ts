export interface SearchBarFormProps {
    onSubmit: (event: any) => void
    query: string
    onChange: (event: any) => void
    errorText: string
}