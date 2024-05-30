import { SignIn } from '@clerk/nextjs';

export default function Page() {
  return (
    <div className="mx-auto h-full w-min content-center">
      <SignIn path="/sign-in" />
    </div>
  );
}
