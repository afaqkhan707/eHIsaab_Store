import SignupForm from '@/app/components/signup';
import { AuthLayout } from '@/app/layouts/AuthLayout';

export default function SignUP() {
  return <AuthLayout child={<SignupForm />} />;
}
