import {Button, Col, Row} from "antd";
import React from "react";

export const AddNote = ({showModal, setShowModal}) => {
  return (
    <Row gutter={[16, 16]}>
      <Col xs={12} sm={10} md={8} lg={6} xl={4}>
        <Button
          block
          size='large'
          type='primary'
          onClick={() => setShowModal({
            ...showModal,
            showModal: true,
          })}
        >Добавить</Button>
      </Col>
    </Row>
  )
}