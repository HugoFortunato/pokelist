import { Card, IPokemonData } from '../Card'
import { Header } from '../Header'
import { SContainer } from './styles'
import { data } from './data'

export function Dashboard() {
    // Metas:

    // Quando API estiver ok:

    // [] Utilizar axios ao invés do fetch;
    // [] Isolar requests num saga ou contexto;

    // const [pokemons, setPokemons] = useState<any>(null)

    // useEffect(() => {
    //     fetch('https://pokeapi.co/api/v2/pokemon')
    //         .then((r) => r.json())
    //         .then((json) => {
    //             setPokemons(json.results)
    //         })
    // }, [])

    if (!data) {
        return null
    }

    return (
        <>
            <SContainer>
                <Header />
                {data.map(({ name, img }: IPokemonData) => (
                    <Card key={name} name={name} img={img} />
                ))}
            </SContainer>
        </>
    )
}
