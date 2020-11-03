import {Button, Modal} from "antd";
import React from "react";

export const ModalConfirm = ({showModal, setShowModal, deletePost}) => {
  return (
    <Modal
      title="Вы действительно хотите удалить запись ?"
      visible={showModal.showModal}
      footer={[
        <Button
          key="success"
          type="primary"
          htmlType="submit"
          onClick={() => {
              setShowModal({...showModal, showModal: false});
              deletePost(showModal.idPost);
            }
          }>
          Да
        </Button>,
        <Button key="cancel" htmlType="button" onClick={() => setShowModal({...showModal, showModal: false})}>
          Нет
        </Button>,
      ]}
      onCancel={() => setShowModal(false)}
    >
    </Modal>
  )
}