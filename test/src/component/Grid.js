import React, {useState} from 'react';
import {Card, Col, Row} from 'react-bootstrap';
import InfiniteScroll from 'react-infinite-scroll-component';

const Grid = ({data}) => {
    const [hasMore, setHasMore] = useState(true);

    const fetchMoreData = () => {

    };

    return(
        <InfiniteScroll 
            dataLength={data.length}
            next={fetchMoreData}
            hasMore={hasMore}
            loader={<h4>Loading...</h4>}
        >
            <Row>
                {data.map((item) => (
                    <Col md={4} sm={6} key={item.id}>
                        <Card>
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text>{item.description}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </InfiniteScroll>
    )
}

export default Grid;