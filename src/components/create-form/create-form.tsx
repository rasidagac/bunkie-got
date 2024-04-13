'use client';

import { InfoCircleOutlined, ReloadOutlined } from '@ant-design/icons';
import { Button, Form, FormProps, Input, Select, Typography } from 'antd';
import { useState } from 'react';
import { generateUsername } from 'unique-username-generator';

const { Title } = Typography;

interface FieldType {
  name: string;
  resetDate: string;
}

type onFinishType = FormProps<FieldType>['onFinish'];

export default function CreateHome({ onFinish }: { onFinish: onFinishType }) {
  const [form] = Form.useForm();
  const [spin, setSpin] = useState<boolean>(false);

  const handleRandomCode = () => {
    setSpin(true);
    setTimeout(() => {
      form.setFieldValue('code', generateUsername('_', 2, 10));
      form.validateFields(['code']);
      setSpin(false);
    }, 500);
  };

  return (
    <div className="mx-auto h-full max-w-xl content-center">
      <Title level={3}>Create a new Home</Title>
      <Form
        initialValues={{ resetDayOfMonth: '1' }}
        onFinish={onFinish}
        size="large"
        layout="vertical"
        form={form}
        validateMessages={{
          pattern: {
            mismatch:
              '${label} can only contain alphanumeric characters and underscores and must be between 6 and 16 characters',
          },
        }}
      >
        <Form.Item
          label="Your home name"
          name="name"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Your home code"
          name="code"
          tooltip={{
            icon: <InfoCircleOutlined />,
            title: 'Your home code must be uniqe',
          }}
          rules={[
            {
              pattern: /^(?=.{6,16}$)(?!.*_{2})[a-zA-Z0-9_]+$/,
              required: true,
              type: 'string',
            },
          ]}
        >
          <Input
            suffix={
              <ReloadOutlined
                onClick={spin ? () => null : handleRandomCode}
                spin={spin}
              />
            }
          />
        </Form.Item>
        <Form.Item
          label="Expense reset date"
          name="resetDayOfMonth"
          rules={[{ required: true }]}
        >
          <Select
            options={[
              { label: '1st day of month', value: '1' },
              { label: '5th day of month', value: '5' },
              { label: '10th day of month', value: '10' },
              { label: '15th day of month', value: '15' },
              { label: '20th day of month', value: '20' },
              { label: '25th day of month', value: '25' },
              { label: 'Last day of month', value: '31' },
            ]}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
