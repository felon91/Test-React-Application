import {Button, Form, Input, Modal} from "antd";
import React, {useEffect, useRef} from "react";
import {createPost} from "../../redux/actions/createPost";
import {changePost} from "../../redux/actions/changePost";
import {connect} from "react-redux";

const ModalForm = ({showModal, setShowModal, createPost, changePost}) => {
  const layout = {
    labelCol: {
      span: 6,
    },
    wrapperCol: {
      span: 18,
    },
  };

  const tailLayout = {
    wrapperCol: {
      span: 18,
      offset: 6,
    },
  };

  const [form] = Form.useForm();

  useEffect(() => {
    if (showModal.showModal) {
      form.setFieldsValue({
        title: showModal.options.values ? showModal.options.values.title : '',
        message: showModal.options.values ? showModal.options.values.message : ''
      });
    }
  }, [showModal.showModal]);

  function changeData(change, post, values) {
    if (change) {
      const updatePost = {
        ...post,
        ...values
      }
      changePost(updatePost);
      form.resetFields();
      setShowModal({
        ...showModal,
        showModal: false
      });
    } else {
      const newPost = {
        id: Date.now().toString(),
        key: Date.now().toString(),
        ...values
      }
      createPost(newPost);
      form.resetFields();
      setShowModal({
        ...showModal,
        showModal: false
      });
    }
  }

  function closeModal() {
    setShowModal({
      ...showModal,
      showModal: false,
    });
  }

  return (
    <Modal
      title={showModal.options.title}
      visible={showModal.showModal}
      footer={null}
      onCancel={closeModal}
      forceRender
    >
      <Form
        form={form}
        name="basic"
        {...layout}
        onFinish={(values) => {
          changeData(showModal.edit, showModal.options.postData, values);
        }}
      >
        <Form.Item
          label="Заголовок"
          name="title"
          rules={[
            {
              required: true,
              message: 'Заголовок не может быть пустым',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Сообщение"
          name="message"
          rules={[
            {
              required: true,
              message: 'Сообщение не может быть пустым',
            },
          ]}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            {showModal.options.btnText}
          </Button>
          <Button
            htmlType="button"
            onClick={closeModal}
            style={{
              margin: '0 0 0 8px',
            }}
          >
            Отмена
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  )
}

const mapDispatchToProps = {
  createPost,
  changePost,
}
export default connect(null, mapDispatchToProps)(ModalForm);