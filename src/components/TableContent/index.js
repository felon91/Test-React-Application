import {Table, Space} from "antd";
import React, {useState} from "react";
import {connect} from "react-redux";
import {deletePost} from "../../redux/actions/deletePost";
import {ModalConfirm} from "../ModalConfirm";
import ModalForm from "../ModalForm";

const TableContent = ({posts, deletePost}) => {
  const [showModalConfirm, setShowModalConfirm] = useState({
    showModal: false,
    idPost: null
  });
  const [showModal, setShowModal] = useState({
    showModal: false,
    options: {
      title: 'Редактировать запись',
      btnText: 'Редактировать',
    }
  });
  const columns = [
    {
      title: 'Заголовок',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Сообщение',
      dataIndex: 'message',
      key: 'message',
    },
    {
      title: 'Действие',
      key: 'action',
      align: 'right',
      render: (posts) => {
        return (
          <Space size="middle">
            <a
              key={posts.id}
              onClick={() => {
                setShowModal({
                  showModal: true,
                  edit: true,
                  options: {
                    title: 'Редактировать запись',
                    btnText: 'Редактировать',
                    postData: posts,
                    values: {
                      title: posts.title,
                      message: posts.message
                    }
                  }
                });
              }}
            >Редактировать</a>
            <a
              key={posts.id}
               onClick={
                 () => {
                  setShowModalConfirm({
                    showModal: true,
                    idPost: posts.id
                  })
                 }
               }>Удалить</a>
          </Space>
        )
      }
    },
  ];

  return (
    <>
      <Table dataSource={posts} columns={columns} />
      <ModalConfirm
        showModal={showModalConfirm}
        setShowModal={setShowModalConfirm}
        deletePost={deletePost}
      />
      <ModalForm
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </>
  )
}

const mapDispatchToProps = {
  deletePost
}

const mapStateToProps = state => {
  return {
    posts: state.posts.posts
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TableContent);

