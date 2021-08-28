import { SContainer } from './styles'
import Modal from 'react-modal'
import { useState } from 'react'
import { data } from '../Dashboard/data'

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
}

export function Button(props: any) {
    const [modalIsOpen, setIsOpen] = useState(false)
    const [activeItemName, setActiveItemName] = useState('')
    const [activeItemId, setActiveItemId] = useState(null)

    function openModal(item: any) {
        setIsOpen(true)
        setActiveItemName(props.item.name)
        setActiveItemId(props.item.id)
    }

    function closeModal() {
        setIsOpen(false)
    }

    return (
        <SContainer>
            <span onClick={openModal}>More info</span>
            {data.map((item, index: number) => (
                <Modal
                    style={customStyles}
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    itemName={activeItemName}
                    itemId={activeItemId}
                    key={index}
                >
                    <h2>{item.name}</h2>
                    <div>{item.img}</div>
                </Modal>
            ))}
        </SContainer>
    )
}
