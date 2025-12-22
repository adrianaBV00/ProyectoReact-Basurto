import Container from 'react-bootstrap/Container';

const ItemListContainer = ({titulo, subtitulo})=>{

    return(
        <>
            <Container fluid>
                <h1>{titulo}</h1>
                <br />
                <h5>{subtitulo}</h5>

            </Container>
            
        </>
    )
}

export default ItemListContainer