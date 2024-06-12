import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="-ml-6 flex h-full w-[calc(100%+3rem)] justify-center [&_.cl-cardBox]:border-[1px] [&_.cl-cardBox]:shadow-none">
      <SignUp />
    </div>
  );
}
