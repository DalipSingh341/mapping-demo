import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import {DataUtility} from "../components/DataUtility"
const MapCard = () => {
  return (
    <div>
          <Container>
              <Row>
                  {DataUtility.map((data) => {
                      return (
                        <Col key={data.id[0]} md={6} lg={4} className="pt-4">
                          <div className="map_box">
                            <div>
                              <img className="w-100" src={data.img} alt="" />
                              <div>{ data.svgImg}</div>
                            </div>

                            <div>
                              <h2>{data.heading}</h2>
                            </div>
                            <div>
                              <p>{data.paragraph}</p>
                            </div>
                          </div>
                        </Col>
                      );
                  })}
              </Row>
      </Container>
    </div>
  )
}

export default MapCard
