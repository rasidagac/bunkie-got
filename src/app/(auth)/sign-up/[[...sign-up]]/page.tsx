import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="[&_.cl-cardBox]:border-[1px] [&_.cl-cardBox]:shadow-none">
      <SignUp />
    </div>
  );
}
