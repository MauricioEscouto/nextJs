import NextLink from '../src/components/faq/index'

export default function HomePage() {
    return (
        <div>
            <h1>Alura Cases</h1>
            <NextLink href="/faq">
                Ir para a página FAQ
            </NextLink>
        </div>
    )
}