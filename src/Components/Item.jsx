import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Item = ({ id, title, price, image }) => {
  const navigate = useNavigate();

  const handleViewDetail = () => {
    navigate(`/item/${id}`);
  };

  return (
    <div className="inline-block">
      <Card
        className="animate__animated animate__fadeIn rounded-md border-2 border-blue-300"
        style={{ width: '16rem', margin: '10px', padding: '15px' }}
      >
        <Card.Img variant="top" src={image} className="mx-auto" style={{ maxHeight: '150px' }} />
        <Card.Header>
          <Card.Title className="fw-bold">{title}</Card.Title>
        </Card.Header>
        <Card.Body>
          <Card.Text className="font-italic" style={{ fontSize: '1.5rem' }}>
            {price} €
          </Card.Text>
          <div className="d-grid gap-2">
            <Button
              variant="primary"
              size="sm"
              className="bg-blue-300 hover:bg-yellow-200"
              style={{ padding: '10px' }}
              onClick={handleViewDetail}
            >
              + info
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Item;
