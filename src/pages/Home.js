import { Col, Row } from "reactstrap";
import CarouselInicio from "../componentes/CarouselInicio";
import ItemCardapio from "../componentes/ItemCardapio";


function Home(){
    return(
       <div>
        <Row>
            <Col>
            {/* Aqui vai o Carousel */}
            <CarouselInicio />
            
            </Col>
        </Row>
        <Row>
            <Col className="text-center my-3">
            <h1>Mais pedidos</h1>
            </Col>
        </Row>
        <Row>
            <Col>
            <ItemCardapio />
            
            </Col>
            <Col>
            <ItemCardapio />
            
            </Col>
            <Col>
            <ItemCardapio />
            
            </Col>
            <Col>
            <ItemCardapio />
            
            </Col>
        </Row>
       </div>
    )
}
export default Home;