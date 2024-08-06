import { SignIn } from "@clerk/nextjs";

export default async function Page() {
  return (
    <div className="[&_.cl-cardBox]:border-[1px] [&_.cl-cardBox]:shadow-none">
      <SignIn fallbackRedirectUrl="/" />
    </div>
  );
}
