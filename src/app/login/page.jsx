'use client'

// pages/login.js
import { useState } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
// Importe o hook `useContext` para acessar o contexto de autenticação
import { useContext } from 'react';
// Importe o contexto de autenticação
import { AuthContext } from '@/app/Context/nextauth'; // Verifique o caminho do seu arquivo AuthProvider

export default function Login() {
  const { signIn } = useContext(AuthContext); // Obtenha a função signIn do contexto de autenticação
  const [loading, setLoading] = useState(false);
  

  const onFinish = async (values) => {
    //console.log('Received values:', values);
    // Aqui você pode adicionar a lógica de autenticação
    // Após a autenticação, redirecione o usuário para outra página
    setLoading(true); // Ative o estado de loading, se necessário
    try {
      await signIn(values.username, values.password); // Chame a função signIn passando o email e a senha
    } catch (error) {
      // Trate erros de autenticação, se necessário
      console.error('Erro ao autenticar:', error);
    }
    setTimeout(() => {
      setLoading(false); // Desative o estado de loading após um tempo de simulação
      
    }, 2000); // Tempo de simulação de autenticação
  };


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md">
        <Form
          name="normal_login"
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <div className="mb-4">
            <Form.Item
              name="username"
              rules={[{ required: true, message: 'Por favor, insira seu usuário!' }]}
            >
              <Input prefix={<UserOutlined />} placeholder="Usuário" />
            </Form.Item>
          </div>
          <div className="mb-4">
            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Por favor, insira sua senha!' }]}
            >
              <Input
                prefix={<LockOutlined />}
                type="password"
                placeholder="Senha"
              />
            </Form.Item>
          </div>
          <div className="mb-4">
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Lembrar-me</Checkbox>
              </Form.Item>
            </Form.Item>
          </div>
          <div className="mb-4">
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="w-full"
                loading={loading}
              >
                Entrar
              </Button>
            </Form.Item>
          </div>
        </Form>
      </div>
    </div>
  );
}
