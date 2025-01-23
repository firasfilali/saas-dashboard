import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
const PageHeader = () => {
  return (
    <header>
      <div  className="w-full max-w-screen-xl px-2.5 lg:px-20 relative mx-auto">
          <div className="flex justify-between items-center h-14">
            <h1>LOGO</h1>
            <div>
              <SignedOut>
                <SignInButton />
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
          </div>
      </div>
    </header>
  );
};

export default PageHeader;
