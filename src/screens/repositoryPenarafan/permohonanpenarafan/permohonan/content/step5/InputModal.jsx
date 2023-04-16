import React, { useState } from "react";
import { Form, Modal, Input, Button } from "antd";
function InputModal({ inputModal, setInputModal, data, setData }) {
  const [form] = Form.useForm();
  const handleOk = () => {};
  const handleCancel = () => {
    setInputModal(false);
  };
  const onFinish = async (values) => {
    let id = data.length + 1;
    setData([...data, { id, ...values }]);
    form.resetFields();
    setInputModal(false);
  };
  const onFinishFailed = () => {};
  return (
    <>
      <Modal
        title="Tambah Perkhidmatan Atas Talian"
        open={inputModal}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          // autoComplete="off"
        >
          <Form.Item
            label="Pekhidmatan"
            name="pekhidmatan"
            rules={[
              {
                required: true,
                message: "Maklumat wajib diisi.",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Pautan"
            name="pautan"
            rules={[
              {
                required: true,
                message: "Maklumat wajib diisi.",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Tambah
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

export default InputModal;
