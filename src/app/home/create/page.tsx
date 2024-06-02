import { CreateHome } from "@/components/create-form";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default function Page() {
  async function submitData(formData: any) {
    "use server";

    const user = await currentUser();

    const response = await fetch("/api/home/create", {
      body: JSON.stringify({ ...formData, user }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const home = await response.json();

    redirect(`./${home.code}`);
  }

  return <CreateHome onFinish={submitData} />;
}
