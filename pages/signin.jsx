import SigninForm from '@/app/components/signin';
import { AuthLayout } from '@/app/layouts/AuthLayout';

export default function SignIn() {
  return <AuthLayout child={<SigninForm />} />;
}
