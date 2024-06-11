import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="mx-auto h-full w-min content-center">
      <SignUp path="/sign-up" />
    </div>
  );
}
