import React, { useState, useEffect } from 'react';
import { getItemById } from '../functions/items';
import { Container, Row, Col } from 'react-bootstrap';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import SideMenu from './SideMenu'

const ItemInfo = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getItemById(id, setProduct);
    console.log('useEffect');
  }, [id]);

  return (
    <>
      <div class="flex flex-wrap justify-between  w-full h-full">
        <div class="w-2/12 bg-white rounded pl-3">
          <SideMenu />
        </div>
        <div class="ml-2 w-9/12">
          <Container>

            <Row>
              <Col xs={12}>
                <ItemDetail product={product} />
              </Col>
            </Row>
          </Container>
        </div>

      </div>
    </>



  );
};

export default ItemInfo;
