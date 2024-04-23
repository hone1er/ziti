// import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import localFont from "next/font/local";
import { AspectRatio } from "~/components/ui/aspect-ratio";
import { useEffect } from "react";

const rocGrotesk = localFont({
  src: "../../public/fonts/rocGrotesk.otf",
});

const nasalization = localFont({
  src: "../../public/fonts/nasalization-rg.otf",
});

export default function Home() {
  useEffect(() => {
    const handleSmoothScroll = (e: MouseEvent) => {
      e.preventDefault();
      const targetId = (e.target as HTMLAnchorElement)
        .getAttribute("href")
        ?.substring(1);
      const targetElement = document.getElementById(targetId ?? "");
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    const links = document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]');
    links.forEach((link) => {
      link.addEventListener("click", handleSmoothScroll);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleSmoothScroll);
      });
    };
  }, []);
  return (
    <>
      <Head>
        <title>Ziti</title>
        <meta name="description" content="Prototypes built quick" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <main className="flex min-h-[1400px] flex-col items-center justify-center bg-[#EDE5D9]">
        <div className="flex w-full flex-col items-center justify-center gap-12 px-0 pt-16 ">
          <header className="align-center relative z-20 flex w-full justify-center">
            {/* add a thick black border */}
            <nav className="auto border-t-l fixed top-0 z-50 mt-[40px] flex h-[90px] w-full max-w-[1348px] items-center justify-between rounded-full rounded-bl-none rounded-tl-none border-4 border-black bg-white px-4 md:px-12 ">
              <div className="flex w-auto items-center gap-4 pr-4 sm:w-full">
                <div className="flex w-20 max-w-[100px] flex-row justify-between sm:w-full md:max-w-[158px] ">
                  <div className="relative flex h-[42px] w-[48px] max-w-full sm:w-[95px]">
                    <Image fill src={"/svg/navLogo.svg"} alt="ziti logo" />
                  </div>
                </div>
              </div>
              <div
                className={`${rocGrotesk.className} flex  w-full max-w-full items-center justify-end gap-4 sm:justify-between  lg:max-w-[50%]`}
              >
                <a
                  className="text-[16px] tracking-tight text-black md:text-[20px] lg:text-[28px]"
                  href="#what"
                >
                  What
                </a>
                <a
                  href="#how"
                  className="text-[16px] tracking-tight text-black md:text-[20px] lg:text-[28px]"
                >
                  How
                </a>
                <a
                  href="#work"
                  className="text-[16px] tracking-tight text-black md:text-[20px] lg:text-[28px]"
                >
                  Our Work
                </a>
                <a
                  href="#chat"
                  className="text-[16px] tracking-tight text-black md:text-[20px] lg:text-[28px]"
                >
                  Let&apos;s chat
                </a>
              </div>
            </nav>
          </header>

          <section className="my-auto mt-8 min-h-[85vh] w-full max-w-[1348px] overflow-x-hidden bg-[#EDE5D9] px-2 sm:top-[140px] md:px-8 xl:sticky xl:px-0">
            <div className="flex flex-col items-center gap-4">
              <div className="flex w-full flex-col-reverse items-center justify-between gap-8 xl:flex-row">
                <div className="flex max-w-full flex-col justify-center gap-8 xl:min-h-[70vh]">
                  <div className="relative min-h-full rounded-full">
                    <Card className="relative z-10 h-[180px] max-h-full w-[600px] max-w-full content-center items-center rounded-[48px] border-4 border-black bg-[#F48019]">
                      <CardContent className="p-0">
                        <h1
                          className={`${nasalization.className} text-center text-[36px]/normal font-bold tracking-normal text-[#EDE5D9] md:text-[56px]/normal`}
                        >
                          Product studio
                        </h1>
                      </CardContent>
                    </Card>
                    <Card className="relative bottom-1 z-10 h-[200px] max-h-full w-[600px] max-w-full content-center items-center rounded-[48px] rounded-b-none border-4 border-black bg-[#805533]">
                      <CardContent className="p-0">
                        <h1
                          className={`${nasalization.className} text-center text-[22px]/normal font-bold tracking-normal text-[#EDE5D9] md:text-[26px]/normal`}
                        >
                          Want to make your idea real but no idea where to
                          start?
                        </h1>
                      </CardContent>
                    </Card>
                  </div>
                  <a
                    href="#chat"
                    className="
                    relative
                   mx-auto flex h-[280px] max-h-full w-[280px] max-w-full flex-col items-center justify-center gap-4 rounded-full border-4 border-black bg-white sm:mx-0"
                  >
                    <h1
                      className={`${rocGrotesk.className} max text-[36px] font-light tracking-tight text-black`}
                    >
                      Let&apos;s chat
                    </h1>
                    <Image
                      width={64}
                      height={64}
                      src={"/svg/help.svg"}
                      alt="chat"
                    />
                  </a>
                </div>
                <div className="flex max-w-full flex-col justify-start xl:place-self-start">
                  <Card className="h-[400px] max-h-full w-[600px] max-w-full content-center items-center rounded-[48px] rounded-r-none border-4 border-black bg-transparent">
                    <CardContent className="relative left-8 mx-auto h-[300px] max-h-full w-[519px] max-w-full p-0">
                      <Image
                        src={"/images/iphone_mockup.png"}
                        alt="iphone mockup"
                        sizes={
                          "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        }
                        fill
                      />
                    </CardContent>
                  </Card>
                  <Card className="relative bottom-1 z-10 h-[180px] max-h-full w-[600px] max-w-full content-center items-center rounded-[48px] rounded-bl-none rounded-tr-none border-4 border-black bg-[#467EBB]">
                    <CardContent className="mx-auto flex max-w-[486px] flex-row items-center justify-between p-0">
                      <Image
                        width={42}
                        height={42}
                        src={"/svg/program.svg"}
                        alt="help"
                      />
                      <h1
                        className={`${rocGrotesk.className} text-center text-[20px]/normal font-bold tracking-normal text-[#EDE5D9] md:text-[24px]/normal`}
                      >
                        TO MVP AND BEYOND
                      </h1>
                      <Image
                        width={42}
                        height={42}
                        src={"/svg/scan.svg"}
                        alt="help"
                      />
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          <div className="z-10 w-full max-w-full overflow-x-hidden bg-slate-50">
            <section
              id="what"
              className={`z-10 min-h-screen w-full content-center bg-[#467EBB] px-2 text-[#EDE5D9] md:px-8 lg:px-20 xl:px-0 ${rocGrotesk.className}`}
            >
              <div className="mx-auto flex min-h-[570px] max-w-[1348px] flex-col justify-between gap-4">
                <h1 className="max-w-[720px] text-[36px]/normal font-bold tracking-tight md:text-[56px]/normal ">
                  Quick feedback is the pathway to success
                </h1>
                <p className="max-w-[1200px] text-[24px]/[48px] tracking-tight text-[#EDE5D9] md:text-[36px]/[56px]">
                  We help you reduce the time to feedback through rapid
                  prototyping and shipping. All with incredible designs and
                  amazing engineering powering your MVP.
                </p>
              </div>
            </section>

            <section
              id="how"
              className="flex min-h-full items-center justify-center bg-black px-2 py-48 text-[#EDE5D9] md:px-8 xl:px-0"
            >
              <div className="flex w-full max-w-[1348px] flex-col gap-36 text-center">
                <div className="flex max-w-full flex-col place-self-start">
                  <BlockCard>
                    <h1
                      className={`${rocGrotesk.className} text-[23px] text-[#EDE5D9] sm:text-[30px] md:text-[40px] `}
                    >
                      Agencies do too much.
                    </h1>
                  </BlockCard>
                  <BlockCard className="overflow-hidden rounded-b-none bg-[#E30B17]">
                    <div className="relative flex items-center gap-4">
                      <PillWithText
                        className={` absolute left-80 top-[-38px] z-50 text-[#EDE5D9]`}
                      >
                        <p> integrated campaigns</p>
                      </PillWithText>
                      <PillWithText
                        className={` absolute bottom-[-72px] left-[-12px] z-40 whitespace-nowrap text-[#EDE5D9]`}
                      >
                        <p>content production</p>
                      </PillWithText>
                      <PillWithText
                        className={` absolute left-40 top-[-72px] z-40 text-[#EDE5D9]`}
                      >
                        <p>verbal identity</p>
                      </PillWithText>
                      <PillWithText
                        className={` absolute bottom-[-44px] left-[164px] z-30 text-[#EDE5D9]`}
                      >
                        <p>digital experience</p>
                      </PillWithText>{" "}
                      <PillWithText
                        className={` absolute bottom-[-14px] left-[-32px] z-20 text-[#EDE5D9]`}
                      >
                        <p>brand architecture</p>
                      </PillWithText>
                      <PillWithText
                        className={` absolute bottom-[-72px] right-[188px] z-20 text-[#EDE5D9]`}
                      >
                        <p>go-to-market</p>
                      </PillWithText>{" "}
                      <PillWithText
                        className={` absolute bottom-[-72px] right-[-140px] text-[#EDE5D9]`}
                      >
                        <p>research + strategy</p>
                      </PillWithText>
                      <PillWithText
                        className={` absolute bottom-[-6px] right-[-36px] text-[#EDE5D9]`}
                      >
                        <p>content production</p>
                      </PillWithText>
                    </div>
                  </BlockCard>
                </div>
                <div className="flex max-w-full flex-col place-self-end">
                  <BlockCard>
                    <h1
                      className={`${rocGrotesk.className} text-[23px] text-[#EDE5D9] sm:text-[30px] md:text-[40px] `}
                    >
                      Dev shops do too little.
                    </h1>
                  </BlockCard>
                  <BlockCard className="max-w-full overflow-hidden rounded-b-none bg-[#F48019]">
                    <div className="relative flex max-w-full flex-col gap-4 p-8">
                      <div className="flex w-full max-w-[75%] flex-row justify-between gap-4 place-self-start">
                        <PillWithText className="border-[2px] text-[12px]">
                          <p>scope creep</p>
                        </PillWithText>
                        <PillWithText className="border-[2px] text-[12px]">
                          <p>long timelines</p>
                        </PillWithText>
                      </div>
                      <div className="flex w-full max-w-[75%] flex-row justify-between gap-4 place-self-end">
                        <PillWithText className="border-[2px] text-[12px]">
                          <p>high cost</p>
                        </PillWithText>
                        <PillWithText className="border-[2px] text-[12px]">
                          <p>limited adaptability</p>
                        </PillWithText>
                      </div>
                    </div>
                  </BlockCard>
                </div>{" "}
                <div className="flex max-w-full flex-col place-self-start">
                  <BlockCard>
                    <h1
                      className={`${rocGrotesk.className} text-[23px] text-[#EDE5D9] sm:text-[30px] md:text-[40px] `}
                    >
                      Ziti&apos;s al dente.
                    </h1>
                  </BlockCard>
                  <BlockCard className="overflow-hidden rounded-b-none bg-[#467EBB]">
                    <div className="relative flex flex-row items-center justify-between gap-2 px-6">
                      <PillWithText className="border-[2px] px-5 text-[13px] font-light md:px-8 md:text-[24px]">
                        product
                      </PillWithText>
                      <PillWithText className="border-[2px] px-5 text-[13px] font-light md:px-8 md:text-[24px]">
                        design
                      </PillWithText>
                      <PillWithText className="border-[2px] px-5 text-[13px] font-light md:px-8 md:text-[24px]">
                        engineering
                      </PillWithText>
                    </div>
                  </BlockCard>
                </div>
              </div>
            </section>

            <section
              id="work"
              className="px-none z-10 flex min-h-screen w-full flex-col justify-between bg-[#EDE5D9] py-10 pb-2 md:py-20"
            >
              <Marquee />

              <div className="flex flex-col items-center gap-4 px-2 sm:px-4">
                {/* various images placed in a grid with 2 columns. The first column has two rows and the second has 3. use a placeholder image for now  */}
                <div className="my-40 mt-20 grid grid-cols-2 gap-2 md:gap-12">
                  <div className="flex flex-col items-center gap-2 md:gap-12">
                    <div className="relative h-auto max-h-full w-[600px] max-w-full content-center overflow-hidden rounded-[24px] p-[6px] text-center sm:p-2 lg:p-8 xl:h-[425px]">
                      {" "}
                      <div className="border-4 border-black p-8">
                        <AspectRatio
                          ratio={10 / 7.25}
                          className="relative h-full w-full "
                        >
                          <Image
                            src="/images/twaliLaptop.png"
                            fill
                            alt="twali laptop"
                          />
                        </AspectRatio>
                      </div>
                    </div>

                    <div className="relative h-auto max-h-full w-[600px] max-w-full content-center overflow-hidden rounded-[24px] p-[6px] text-center sm:p-2 lg:p-8 xl:h-[425px]">
                      {" "}
                      <div className="border-4 border-black p-8">
                        <AspectRatio
                          ratio={10 / 7.25}
                          className="relative h-full w-full "
                        >
                          <Image
                            src="/images/twaliLaptop.png"
                            fill
                            alt="twali laptop"
                          />
                        </AspectRatio>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-2 md:gap-12">
                    <div className="relative h-auto max-h-full w-[600px] max-w-full content-center overflow-hidden rounded-[24px] p-[6px] text-center sm:p-2 lg:p-8 xl:h-[425px]">
                      {" "}
                      <div className="border-4 border-black p-8">
                        <AspectRatio
                          ratio={10 / 7.25}
                          className="relative h-full w-full "
                        >
                          <Image
                            src="/images/twaliLaptop.png"
                            fill
                            alt="twali laptop"
                          />
                        </AspectRatio>
                      </div>
                    </div>
                    <div className="relative h-auto max-h-full w-[600px] max-w-full content-center overflow-hidden rounded-[24px] p-[6px] text-center sm:p-2 lg:p-8 xl:h-[425px]">
                      {" "}
                      <div className="border-4 border-black p-8">
                        <AspectRatio
                          ratio={10 / 7.25}
                          className="relative h-full w-full "
                        >
                          <Image
                            src="/images/twaliLaptop.png"
                            fill
                            alt="twali laptop"
                          />
                        </AspectRatio>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Marquee />
            </section>

            <section
              id="chat"
              className={`z-10 flex min-h-screen w-full flex-col justify-center gap-20 bg-black py-20 lg:px-40 ${nasalization.className}`}
            >
              <div className="0 w-full">
                <Card className="mx-auto w-full max-w-[480px] rounded-[48px] rounded-bl-none rounded-tr-none border-4 border-[#467EBB] bg-transparent">
                  <CardHeader>
                    <CardTitle className="text-[28px] font-normal text-[#467EBB]">
                      Step 1
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className=" text-[20px] font-normal text-[#EDE5D9]">
                      We chat! We learn about you, your product, goals, persona,
                      and hypothesis.{" "}
                    </p>
                  </CardContent>
                </Card>
                <Card className="relative bottom-1 z-30 mx-auto w-full max-w-[480px] rounded-[48px] rounded-br-none rounded-tl-none border-4 border-[#F48019]  bg-transparent">
                  <CardHeader>
                    <CardTitle className="text-[28px] font-normal text-[#F48019]">
                      Step 2
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className=" text-[20px] font-normal text-[#EDE5D9]">
                      We present user flows, branding, and UX/UI prototypes. You
                      provide feedback, we iterate.
                    </p>
                  </CardContent>
                </Card>
                <Card className="relative bottom-2 mx-auto w-full max-w-[480px] rounded-[48px] rounded-bl-none rounded-tr-none border-4 border-[#805533] bg-transparent">
                  <CardHeader>
                    <CardTitle className="text-[28px] font-normal text-[#805533]">
                      Step 3
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className=" text-[20px] font-normal text-[#EDE5D9]">
                      We hand off a high-fidelity, functioning prototype to you.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bottm relative bottom-3 mx-auto w-full max-w-[480px] rounded-[48px] rounded-br-none rounded-tl-none border-4 border-[#E30B17] bg-transparent ">
                  <CardHeader>
                    <CardTitle className="text-[28px] font-normal text-[#E30B17]">
                      Step 4
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className=" text-[20px] font-normal text-[#EDE5D9]">
                      We&apos;re here to guide you through testing and
                      collecting feedback with your audience for future
                      development.
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div className="w-full">
                <Card className="mx-auto h-full min-h-[200px] w-full max-w-[480px] content-center rounded-[48px] border-4 border-[#EDE5D9] bg-transparent">
                  <CardContent>
                    <p className=" text-[20px] font-normal text-[#EDE5D9]">
                      To MVP and beyond. We&apos;re still here post-MVP if
                      you&apos;d like to work in a long-term capacity.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section className="z-10 w-full bg-black px-12 ">
              <footer
                className={`z-10 flex min-h-[180px] w-full items-center justify-between self-center rounded-t-[48px] bg-[#EDE5D9] px-4 ${nasalization.className}`}
              >
                <div className=" flex w-full flex-col items-center justify-between gap-8 rounded-t-[48px] bg-[#EDE5D9] px-12 py-8 text-center md:flex-row md:text-left">
                  <div className="relative w-20 md:w-60">
                    <AspectRatio ratio={12 / 5}>
                      <Image
                        fill
                        sizes="
                    (max-width: 768px) 60px,
                    240px
                    "
                        src={"/images/ziti.png"}
                        alt="zitiFooter"
                      />
                    </AspectRatio>
                  </div>

                  <div className="flex w-full max-w-[158px] flex-row justify-between ">
                    <Image
                      width={42}
                      height={42}
                      src={"/svg/help.svg"}
                      alt="help"
                    />
                    <Image
                      width={42}
                      height={42}
                      src={"/svg/program.svg"}
                      alt="program"
                    />
                    <Image
                      width={42}
                      height={42}
                      src={"/svg/scan.svg"}
                      alt="scan"
                    />
                  </div>
                  <p className="text-[14px] font-bold tracking-tight lg:text-[24px] ">
                    134 N 4th Street
                    <br /> Brooklyn, New York 11211
                  </p>
                  <p className="text-[14px] font-bold tracking-tight lg:text-[24px] ">
                    Wanna chat? hello@ziti.studio
                  </p>
                </div>
              </footer>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}

// function AuthShowcase() {
//   const { data: sessionData } = useSession();

//   const { data: secretMessage } = api.post.getSecretMessage.useQuery(
//     undefined, // no input
//     { enabled: sessionData?.user !== undefined },
//   );

//   return (
//     <div className="flex flex-col items-center justify-center gap-4">
//       <p className="text-center text-2xl text-white">
//         {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
//         {secretMessage && <span> - {secretMessage}</span>}
//       </p>
//       <button
//         className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
//         onClick={sessionData ? () => void signOut() : () => void signIn()}
//       >
//         {sessionData ? "Sign out" : "Sign in"}
//       </button>
//     </div>
//   );
// }
interface BlockCardProps {
  className?: string;
  children: React.ReactNode;
}

function BlockCard({ className, children }: BlockCardProps) {
  return (
    <Card
      className={`h-[160px] max-h-full w-[720px] max-w-full content-center items-center rounded-[48px] border-4 border-white bg-transparent ${className}`}
    >
      <CardContent className="p-0">{children}</CardContent>
    </Card>
  );
}
interface PillWithTextProps {
  className?: string;
  children: React.ReactNode;
}

function PillWithText({ className, children }: PillWithTextProps) {
  return (
    <div
      className={`h-[53px] content-center items-center whitespace-nowrap rounded-full border-4 border-black bg-[#EDE5D9] px-8 text-center text-[24px] tracking-tighter text-black ${nasalization.className} ${className} w-fit`}
    >
      {children}
    </div>
  );
}

function Marquee({}) {
  return (
    <div
      className={`relative flex overflow-x-hidden ${nasalization.className}`}
    >
      <div className="animate-marquee flex flex-row items-center whitespace-nowrap py-1">
        <span className="mx-8 text-4xl">OUR WORK</span>
        <svg className="h-6 w-6" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="12" fill="#F90515" />
        </svg>
        <span className="mx-8 text-4xl">OUR WORK</span>
        <svg className="h-6 w-6" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="12" fill="#F48019" />
        </svg>
        <span className="mx-8 text-4xl">OUR WORK</span>
        <svg className="h-6 w-6" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="12" fill="#805533" />
        </svg>
        <span className="mx-8 text-4xl">OUR WORK</span>
        <svg className="h-6 w-6" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="12" fill="#467EBB" />
        </svg>
        <span className="mx-8 text-4xl">OUR WORK</span>
        <svg className="h-6 w-6" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="12" fill="#F90515" />
        </svg>
        <span className="mx-8 text-4xl">OUR WORK</span>
        <svg className="h-6 w-6" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="12" fill="#F48019" />
        </svg>
        <span className="mx-8 text-4xl">OUR WORK</span>
        <svg className="h-6 w-6" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="12" fill="#805533" />
        </svg>
        <span className="mx-8 text-4xl">OUR WORK</span>
        <svg className="h-6 w-6" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="12" fill="#467EBB" />
        </svg>
        <span className="mx-8 text-4xl">OUR WORK</span>
        <svg className="h-6 w-6" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="12" fill="#F90515" />
        </svg>
        <span className="mx-8 text-4xl">OUR WORK</span>
        <svg className="h-6 w-6" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="12" fill="#F48019" />
        </svg>
        <span className="mx-8 text-4xl">OUR WORK</span>
        <svg className="h-6 w-6" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="12" fill="#805533" />
        </svg>
        <span className="mx-8 text-4xl">OUR WORK</span>
        <svg className="h-6 w-6" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="12" fill="#467EBB" />
        </svg>{" "}
        <span className="mx-8 text-4xl">OUR WORK</span>
        <svg className="h-6 w-6" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="12" fill="#F90515" />
        </svg>
        <span className="mx-8 text-4xl">OUR WORK</span>
        <svg className="h-6 w-6" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="12" fill="#F48019" />
        </svg>
        <span className="mx-8 text-4xl">OUR WORK</span>
        <svg className="h-6 w-6" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="12" fill="#805533" />
        </svg>
        <span className="mx-8 text-4xl">OUR WORK</span>
        <svg className="h-6 w-6" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="12" fill="#467EBB" />
        </svg>
        <span className="mx-8 text-4xl">OUR WORK</span>
        <svg className="h-6 w-6" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="12" fill="#F90515" />
        </svg>
        <span className="mx-8 text-4xl">OUR WORK</span>
        <svg className="h-6 w-6" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="12" fill="#F48019" />
        </svg>
        <span className="mx-8 text-4xl">OUR WORK</span>
        <svg className="h-6 w-6" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="12" fill="#805533" />
        </svg>
        <span className="mx-8 text-4xl">OUR WORK</span>
        <svg className="h-6 w-6" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="12" fill="#467EBB" />
        </svg>
        <span className="mx-8 text-4xl">OUR WORK</span>
        <svg className="h-6 w-6" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="12" fill="#F90515" />
        </svg>
        <span className="mx-8 text-4xl">OUR WORK</span>
        <svg className="h-6 w-6" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="12" fill="#F48019" />
        </svg>
        <span className="mx-8 text-4xl">OUR WORK</span>
        <svg className="h-6 w-6" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="12" fill="#805533" />
        </svg>
        <span className="mx-8 text-4xl">OUR WORK</span>
        <svg className="h-6 w-6" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="12" fill="#467EBB" />
        </svg>
        <span className="mx-8 text-4xl">OUR WORK</span>
        <svg className="h-6 w-6" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="12" fill="#F90515" />
        </svg>
        <span className="mx-8 text-4xl">OUR WORK</span>
        <svg className="h-6 w-6" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="12" fill="#F48019" />
        </svg>
        <span className="mx-8 text-4xl">OUR WORK</span>
        <svg className="h-6 w-6" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="12" fill="#805533" />
        </svg>
        <span className="mx-8 text-4xl">OUR WORK</span>
        <svg className="h-6 w-6" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="12" fill="#467EBB" />
        </svg>{" "}
        <span className="mx-8 text-4xl">OUR WORK</span>
        <svg className="h-6 w-6" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="12" fill="#F90515" />
        </svg>
        <span className="mx-8 text-4xl">OUR WORK</span>
        <svg className="h-6 w-6" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="12" fill="#F48019" />
        </svg>
        <span className="mx-8 text-4xl">OUR WORK</span>
        <svg className="h-6 w-6" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="12" fill="#805533" />
        </svg>
        <span className="mx-8 text-4xl">OUR WORK</span>
        <svg className="h-6 w-6" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="12" fill="#467EBB" />
        </svg>
      </div>
    </div>
  );
}
