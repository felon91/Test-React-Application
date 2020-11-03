import React, {useState} from "react";
import TableContent from "./components/TableContent";
import {Layout, Typography} from "antd";
import 'antd/dist/antd.css';
import ModalForm from "./components/ModalForm";
import {AddNote} from "./components/AddNote";

const {Content} = Layout;
const {Title} = Typography;

function App() {
  const [isVisibleModal, setIsVisibleModal] = useState({
    showModal: false,
    options: {
      title: 'Добавить запись',
      btnText: 'Добавить',
    }
  });

  return (
    <Layout className='container'>
      <Title>Test React Application</Title>
      <AddNote showModal={isVisibleModal} setShowModal={setIsVisibleModal} />
      <Content>
        <TableContent />
      </Content>
      <ModalForm
        showModal={isVisibleModal}
        setShowModal={setIsVisibleModal}
      />
    </Layout>
  );
}

export default App;
