'use client';

import { Input, Form, Select, Upload, Button, InputNumber } from 'antd';
import { FiUpload } from 'react-icons/fi';

const { Option } = Select;
interface InputFormProps {
  name: string;
  placeholder: string;
  type?:
    | 'string'
    | 'array'
    | 'number'
    | 'boolean'
    | 'object'
    | 'date'
    | 'email';

  config?: { [key: string]: any };
  select?: boolean;
  textarea?: boolean;
  required?: boolean;
  upload?: boolean;
  options?: { value: string; text: string }[];
}
export default function InputForm({
  name,
  placeholder,
  type,
  config,
  required,
  select,
  options,
  textarea,
  upload,
}: InputFormProps) {
  return (
    <Form.Item
      label={placeholder}
      name={name}
      rules={[
        {
          required: required ?? false,
          type: type ?? (!upload ? 'string' : 'object'),
        },
      ]}
    >
      {type === 'number' && (
        <InputNumber style={{ width: '100%' }} {...config} name={name} />
      )}
      {!select && !textarea && !upload && type !== 'number' && (
        <Input {...config} type={type ?? 'text'} name={name} />
      )}
      {textarea && <Input.TextArea {...config} name={name} />}
      {upload && (
        <>
          <Upload
            {...config}
            name={name}
            accept=".pdf,image/*"
            multiple={false}
            maxCount={1}
          >
            <Button icon={<FiUpload />}>{placeholder}</Button>
          </Upload>
        </>
      )}
      {select && (
        <Select placeholder={placeholder} {...config} allowClear>
          {options?.map(option => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      )}
    </Form.Item>
  );
}
