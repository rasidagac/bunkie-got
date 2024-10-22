import { SignIn } from "@clerk/nextjs";

export default async function Page() {
  return (
    <div className="[&_.cl-cardBox]:border-[1px] [&_.cl-cardBox]:shadow-none">
      <SignIn fallbackRedirectUrl="/" />
    </div>
  );
}
// "use client";
//
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Icons } from "@/components/ui/icons";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import * as Clerk from "@clerk/elements/common";
// import * as SignIn from "@clerk/elements/sign-in";
// import Link from "next/link";
//
// export default function SignInPage() {
//   return (
//     <div className="grid w-full grow items-center px-4 sm:justify-center">
//       <SignIn.Root>
//         <Clerk.Loading>
//           {(isGlobalLoading) => (
//             <>
//               <SignIn.Step name="start">
//                 <Card className="w-full sm:w-96">
//                   <CardHeader>
//                     <CardTitle>Sign in to Acme Co</CardTitle>
//                     <CardDescription>
//                       Welcome back! Please sign in to continue
//                     </CardDescription>
//                   </CardHeader>
//                   <CardContent className="grid gap-y-4">
//                     <div className="grid">
//                       <Clerk.Connection asChild name="github">
//                         <Button
//                           disabled={isGlobalLoading}
//                           size="sm"
//                           type="button"
//                           variant="outline"
//                         >
//                           <Clerk.Loading scope="provider:github">
//                             {(isLoading) =>
//                               isLoading ? (
//                                 <Icons.spinner className="size-4 animate-spin" />
//                               ) : (
//                                 <>
//                                   <Icons.gitHub className="mr-2 size-4" />
//                                   GitHub
//                                 </>
//                               )
//                             }
//                           </Clerk.Loading>
//                         </Button>
//                       </Clerk.Connection>
//                     </div>
//                     <p className="flex items-center gap-x-3 text-sm text-muted-foreground before:h-px before:flex-1 before:bg-border after:h-px after:flex-1 after:bg-border">
//                       or
//                     </p>
//                     <Clerk.Field className="space-y-2" name="identifier">
//                       <Clerk.Label asChild>
//                         <Label>Email address</Label>
//                       </Clerk.Label>
//                       <Clerk.Input asChild required type="email">
//                         <Input />
//                       </Clerk.Input>
//                       <Clerk.FieldError className="block text-sm text-destructive" />
//                     </Clerk.Field>
//                   </CardContent>
//                   <CardFooter>
//                     <div className="grid w-full gap-y-4">
//                       <SignIn.Action asChild submit>
//                         <Button disabled={isGlobalLoading}>
//                           <Clerk.Loading>
//                             {(isLoading) => {
//                               return isLoading ? (
//                                 <Icons.spinner className="size-4 animate-spin" />
//                               ) : (
//                                 "Continue"
//                               );
//                             }}
//                           </Clerk.Loading>
//                         </Button>
//                       </SignIn.Action>
//
//                       <Button asChild size="sm" variant="link">
//                         <Link href="/sign-up">
//                           Don&apos;t have an account? Sign up
//                         </Link>
//                       </Button>
//                     </div>
//                   </CardFooter>
//                 </Card>
//               </SignIn.Step>
//
//               <SignIn.Step name="choose-strategy">
//                 <Card className="w-full sm:w-96">
//                   <CardHeader>
//                     <CardTitle>Use another method</CardTitle>
//                     <CardDescription>
//                       Facing issues? You can use any of these methods to sign
//                       in.
//                     </CardDescription>
//                   </CardHeader>
//                   <CardContent className="grid gap-y-4">
//                     <SignIn.SupportedStrategy asChild name="email_code">
//                       <Button
//                         disabled={isGlobalLoading}
//                         type="button"
//                         variant="link"
//                       >
//                         Email code
//                       </Button>
//                     </SignIn.SupportedStrategy>
//                     <SignIn.SupportedStrategy asChild name="password">
//                       <Button
//                         disabled={isGlobalLoading}
//                         type="button"
//                         variant="link"
//                       >
//                         Password
//                       </Button>
//                     </SignIn.SupportedStrategy>
//                   </CardContent>
//                   <CardFooter>
//                     <div className="grid w-full gap-y-4">
//                       <SignIn.Action asChild navigate="previous">
//                         <Button disabled={isGlobalLoading}>
//                           <Clerk.Loading>
//                             {(isLoading) => {
//                               return isLoading ? (
//                                 <Icons.spinner className="size-4 animate-spin" />
//                               ) : (
//                                 "Go back"
//                               );
//                             }}
//                           </Clerk.Loading>
//                         </Button>
//                       </SignIn.Action>
//                     </div>
//                   </CardFooter>
//                 </Card>
//               </SignIn.Step>
//
//               <SignIn.Step name="verifications">
//                 <SignIn.Strategy name="password">
//                   <Card className="w-full sm:w-96">
//                     <CardHeader>
//                       <CardTitle>Check your email</CardTitle>
//                       <CardDescription>
//                         Enter the verification code sent to your email
//                       </CardDescription>
//                       <p className="text-sm text-muted-foreground">
//                         Welcome back <SignIn.SafeIdentifier />
//                       </p>
//                     </CardHeader>
//                     <CardContent className="grid gap-y-4">
//                       <Clerk.Field className="space-y-2" name="password">
//                         <Clerk.Label asChild>
//                           <Label>Password</Label>
//                         </Clerk.Label>
//                         <Clerk.Input asChild type="password">
//                           <Input />
//                         </Clerk.Input>
//                         <Clerk.FieldError className="block text-sm text-destructive" />
//                       </Clerk.Field>
//                     </CardContent>
//                     <CardFooter>
//                       <div className="grid w-full gap-y-4">
//                         <SignIn.Action asChild submit>
//                           <Button disabled={isGlobalLoading}>
//                             <Clerk.Loading>
//                               {(isLoading) => {
//                                 return isLoading ? (
//                                   <Icons.spinner className="size-4 animate-spin" />
//                                 ) : (
//                                   "Continue"
//                                 );
//                               }}
//                             </Clerk.Loading>
//                           </Button>
//                         </SignIn.Action>
//                         <SignIn.Action asChild navigate="choose-strategy">
//                           <Button size="sm" type="button" variant="link">
//                             Use another method
//                           </Button>
//                         </SignIn.Action>
//                       </div>
//                     </CardFooter>
//                   </Card>
//                 </SignIn.Strategy>
//
//                 <SignIn.Strategy name="email_code">
//                   <Card className="w-full sm:w-96">
//                     <CardHeader>
//                       <CardTitle>Check your email</CardTitle>
//                       <CardDescription>
//                         Enter the verification code sent to your email
//                       </CardDescription>
//                       <p className="text-sm text-muted-foreground">
//                         Welcome back <SignIn.SafeIdentifier />
//                       </p>
//                     </CardHeader>
//                     <CardContent className="grid gap-y-4">
//                       <Clerk.Field name="code">
//                         <Clerk.Label className="sr-only">
//                           Email verification code
//                         </Clerk.Label>
//                         <div className="grid items-center justify-center gap-y-2">
//                           <div className="flex justify-center text-center">
//                             <Clerk.Input
//                               autoSubmit
//                               className="flex justify-center has-[:disabled]:opacity-50"
//                               render={({ status, value }) => {
//                                 return (
//                                   <div
//                                     className="relative flex h-9 w-9 items-center justify-center border-y border-r border-input text-sm shadow-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md data-[status=cursor]:ring-1 data-[status=selected]:ring-1 data-[status=cursor]:ring-ring data-[status=selected]:ring-ring"
//                                     data-status={status}
//                                   >
//                                     {value}
//                                   </div>
//                                 );
//                               }}
//                               type="otp"
//                             />
//                           </div>
//                           <Clerk.FieldError className="block text-center text-sm text-destructive" />
//                           <SignIn.Action
//                             asChild
//                             className="text-muted-foreground"
//                             fallback={({ resendableAfter }) => (
//                               <Button disabled size="sm" variant="link">
//                                 Didn&apos;t recieve a code? Resend (
//                                 <span className="tabular-nums">
//                                   {resendableAfter}
//                                 </span>
//                                 )
//                               </Button>
//                             )}
//                             resend
//                           >
//                             <Button size="sm" variant="link">
//                               Didn&apos;t recieve a code? Resend
//                             </Button>
//                           </SignIn.Action>
//                         </div>
//                       </Clerk.Field>
//                     </CardContent>
//                     <CardFooter>
//                       <div className="grid w-full gap-y-4">
//                         <SignIn.Action asChild submit>
//                           <Button disabled={isGlobalLoading}>
//                             <Clerk.Loading>
//                               {(isLoading) => {
//                                 return isLoading ? (
//                                   <Icons.spinner className="size-4 animate-spin" />
//                                 ) : (
//                                   "Continue"
//                                 );
//                               }}
//                             </Clerk.Loading>
//                           </Button>
//                         </SignIn.Action>
//                         <SignIn.Action asChild navigate="choose-strategy">
//                           <Button size="sm" variant="link">
//                             Use another method
//                           </Button>
//                         </SignIn.Action>
//                       </div>
//                     </CardFooter>
//                   </Card>
//                 </SignIn.Strategy>
//               </SignIn.Step>
//             </>
//           )}
//         </Clerk.Loading>
//       </SignIn.Root>
//     </div>
//   );
// }
