import { motion } from 'framer-motion'
import { Button } from '../Button'
import { SContainer } from './styles'

export interface IPokemonData {
    name: string
    img: string
}

export function Card(props: IPokemonData) {
    return (
        <SContainer>
            <span>{props.name}</span>
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <img src={props.img} alt='pokemons' />
            </motion.button>
            <Button />
        </SContainer>
    )
}
