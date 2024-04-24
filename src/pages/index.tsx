import Head from "next/head";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import localFont from "next/font/local";
import { AspectRatio } from "~/components/ui/aspect-ratio";
import { useEffect, useState } from "react";

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
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-[1400px] flex-col items-center justify-center bg-[#EDE5D9]">
        <div className="flex w-full flex-col items-center justify-center gap-12 px-0 pt-16 ">
          <div className="align-center relative z-20 flex w-full justify-center">
            <NavBar />
          </div>

          <HeroSection />

          <div className="z-10 w-full max-w-full overflow-x-hidden bg-slate-50">
            <WhatSection />

            <HowSection />

            <WorkSection />

            <StepSection />

            <section className="z-10 w-full bg-black px-2 sm:px-12 ">
              <Footer />
            </section>
          </div>
        </div>
      </main>
    </>
  );
}

interface BlockCardProps {
  readonly className?: string;
  readonly children: React.ReactNode;
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
  readonly className?: string;
  readonly children: React.ReactNode;
}

function PillWithText({ className, children }: PillWithTextProps) {
  return (
    <div
      className={`h-[53px] content-center items-center whitespace-nowrap rounded-full border-4 border-black bg-[#EDE5D9] text-center tracking-tighter text-black md:px-8 ${className} md:text-[24px] ${nasalization.className}  w-fit `}
    >
      {children}
    </div>
  );
}

function Marquee() {
  return (
    <div
      className={`relative flex overflow-x-hidden ${nasalization.className}`}
    >
      <div className="flex animate-marquee flex-row items-center whitespace-nowrap py-1">
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

function HeroSection() {
  return (
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
                    Want to make your idea real but no idea where to start?
                  </h1>
                </CardContent>
              </Card>
            </div>
            <a
              href="#chat"
              className="
                    relative
                    mx-auto
                   flex h-[280px] max-h-full w-[280px] max-w-full flex-col items-center justify-center gap-4 place-self-center rounded-full border-4 border-black bg-white text-black hover:bg-black hover:text-[#EDE5D9] sm:mx-0"
            >
              <h1
                className={`${rocGrotesk.className} max text-[36px] font-light tracking-tight `}
              >
                Let&apos;s chat
              </h1>
              <Image width={64} height={64} src={"/svg/help.svg"} alt="chat" />
            </a>
          </div>
          <div className="flex max-w-full flex-col justify-start xl:place-self-start">
            <Card className="h-[300px] max-h-full w-[600px] max-w-full content-center items-center rounded-[48px] rounded-r-none border-4 border-black bg-transparent sm:h-[360px] md:h-[400px]">
              <CardContent className="relative left-8 mx-auto h-[300px] max-h-full w-[519px] max-w-full content-center p-0">
                <AspectRatio ratio={2 / 1.2} className="top-0 ">
                  {" "}
                  <Image
                    src={"/images/iphone_mockup.png"}
                    alt="iphone mockup"
                    sizes={
                      "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    }
                    fill
                    style={{
                      position: "absolute",
                      bottom: "50px",
                    }}
                  />
                </AspectRatio>
              </CardContent>
            </Card>
            <Card className="relative bottom-1 z-10 h-[180px] max-h-full w-[600px] max-w-full content-center items-center rounded-[48px] rounded-bl-none rounded-tr-none border-4 border-black bg-[#467EBB]">
              <CardContent className="mx-auto flex max-w-[486px] flex-row items-center justify-between p-0 px-2">
                <Image
                  width={42}
                  height={42}
                  src={"/svg/program.svg"}
                  alt="help"
                />
                <h1
                  className={`${rocGrotesk.className} text-center text-[18px]/normal font-bold tracking-normal text-[#EDE5D9] sm:text-[20px]/normal md:text-[24px]/normal`}
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
  );
}

function WhatSection() {
  return (
    <section
      id="what"
      className={`z-10 min-h-screen w-full content-center bg-[#467EBB] px-2 text-[#EDE5D9] md:px-8 lg:px-20 xl:px-0 ${rocGrotesk.className}`}
    >
      <div className="mx-auto flex min-h-[570px] max-w-[1348px] flex-col justify-between gap-4">
        <h1 className="max-w-[720px] text-[36px]/normal font-bold tracking-tight md:text-[56px]/normal ">
          Quick feedback is the pathway to success
        </h1>
        <p className="max-w-[1200px] text-[24px]/[48px] tracking-tight text-[#EDE5D9] md:text-[36px]/[56px]">
          We help you reduce the time to feedback through rapid prototyping and
          shipping. All with incredible designs and amazing engineering powering
          your MVP.
        </p>
      </div>
    </section>
  );
}

function HowSection() {
  return (
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
                className={` absolute left-80 top-[-38px] z-50 px-5 text-[#EDE5D9]`}
              >
                <p> integrated campaigns</p>
              </PillWithText>
              <PillWithText
                className={` absolute bottom-[-72px] left-[-12px] z-40 whitespace-nowrap px-5 text-[#EDE5D9]`}
              >
                <p>content production</p>
              </PillWithText>
              <PillWithText
                className={` absolute left-40 top-[-72px] z-40 px-5 text-[#EDE5D9]`}
              >
                <p>verbal identity</p>
              </PillWithText>
              <PillWithText
                className={` absolute bottom-[-44px] left-[164px] z-30 px-5 text-[#EDE5D9]`}
              >
                <p>digital experience</p>
              </PillWithText>{" "}
              <PillWithText
                className={` absolute bottom-[-14px] left-[-32px] z-20 px-5 text-[#EDE5D9]`}
              >
                <p>brand architecture</p>
              </PillWithText>
              <PillWithText
                className={` absolute bottom-[-72px] right-[220px] z-20 px-5 text-[#EDE5D9]`}
              >
                <p>go-to-market</p>
              </PillWithText>{" "}
              <PillWithText
                className={` absolute bottom-[-72px] right-[-96px] px-5 text-[#EDE5D9]`}
              >
                <p>research + strategy</p>
              </PillWithText>
              <PillWithText
                className={` absolute bottom-[-6px] right-[-36px] px-5 text-[#EDE5D9]`}
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
                <PillWithText className="border-[2px] px-5 text-[12px]">
                  <p>scope creep</p>
                </PillWithText>
                <PillWithText className="border-[2px] px-5 text-[12px]">
                  <p>long timelines</p>
                </PillWithText>
              </div>
              <div className="flex w-full max-w-[75%] flex-row justify-between gap-4 place-self-end">
                <PillWithText className="border-[2px] px-5 text-[12px]">
                  <p>high cost</p>
                </PillWithText>
                <PillWithText className="border-[2px] px-5 text-[12px]">
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
              <PillWithText className="border-[3px] px-5 text-[13px] font-light sm:text-[20px] md:px-8 md:text-[24px]">
                product
              </PillWithText>
              <PillWithText className="flex flex-row whitespace-nowrap border-[3px] px-5 text-[13px] font-light sm:text-[20px] md:px-8 md:text-[24px]">
                design <span className="hidden pl-1 sm:block"> + brand</span>
              </PillWithText>
              <PillWithText className="border-[3px] px-5 text-[13px] font-light sm:text-[20px] md:px-8 md:text-[24px]">
                engineering
              </PillWithText>
            </div>
          </BlockCard>
        </div>
      </div>
    </section>
  );
}

function WorkSection() {
  const [currentImageName, setCurrentImageName] = useState("drippi");

  type ImagePaths = {
    paths: string[];
    isHovered: boolean;
    currentIndex: number;
  };

  type ImageKeys = "drippi" | "scaler" | "roar" | "twali";
  const [allImagePaths, setAllImagePaths] = useState<
    Record<ImageKeys, ImagePaths>
  >({
    drippi: {
      paths: [
        "/images/iphone_mockup.png",
        "/images/drippiLaptop.png",
        "/images/drippiLogo.png",
      ],
      isHovered: false,
      currentIndex: 0,
    },
    scaler: {
      paths: [
        "/images/scalerLaptop1.png",
        "/images/scalerLaptop2.png",
        "/images/scalerLogo.png",
      ],
      isHovered: false,
      currentIndex: 0,
    },
    roar: {
      paths: [
        "/images/roarLaptop.png",
        "/images/roarMobile1.png",
        "/images/roarLogo.png",
      ],
      isHovered: false,
      currentIndex: 0,
    },
    twali: {
      paths: [
        "/images/twaliLaptop.png",
        "/images/twaliLaptop2.png",
        "/images/twaliLogo.png",
      ],
      isHovered: false,
      currentIndex: 0,
    },
  });
  const allImageNames = Object.keys(allImagePaths);

  useEffect(() => {
    const interval = setInterval(() => {
      // Determine the next index for the current image set
      const currentImageSet = allImagePaths[currentImageName as ImageKeys];
      const nextIndex = currentImageSet?.currentIndex === 0 ? 1 : 0;

      // Update the current image set with the next index
      allImagePaths[currentImageName as ImageKeys] = {
        ...currentImageSet,
        currentIndex: nextIndex,
      };
      setAllImagePaths({ ...allImagePaths });
      // update the current image name to the next image set
      const nextImageIndex = (allImageNames.indexOf(currentImageName) + 1) % 4;
      setCurrentImageName(allImageNames[nextImageIndex] as ImageKeys);
    }, 2000);

    return () => clearInterval(interval);
  }, [currentImageName, allImagePaths, allImageNames]);

  const handleMouseEnter = (imageName: ImageKeys) => {
    const currentImageSet = allImagePaths[imageName];

    allImagePaths[imageName] = {
      ...currentImageSet,
      currentIndex: 2,
    };
    setAllImagePaths({ ...allImagePaths });
  };

  const handleMouseLeave = (imageName: ImageKeys) => {
    const currentImageSet = allImagePaths[imageName];

    allImagePaths[imageName] = {
      ...currentImageSet,
      currentIndex: 1,
    };
    setAllImagePaths({ ...allImagePaths });
  };
  const getImageSource = (imageName: ImageKeys) => {
    return allImagePaths[imageName]?.paths[
      allImagePaths[imageName].currentIndex
    ];
  };

  return (
    <section
      id="work"
      className="px-none min-h-600px z-10 flex w-full flex-col justify-between bg-[#EDE5D9] py-10 pb-2 md:min-h-screen md:py-20"
    >
      <Marquee />

      <div className="flex flex-col items-center gap-4 px-2 sm:px-4">
        <div className="my-40 mt-20 grid grid-cols-2 gap-2 md:gap-8">
          <div className="flex flex-col items-center gap-2 md:gap-8">
            <div
              onMouseEnter={() => handleMouseEnter("drippi")}
              onMouseLeave={() => handleMouseLeave("drippi")}
              className="relative h-auto max-h-full w-[600px] max-w-full content-center rounded-[48px] rounded-tl-none border-4 border-black p-[6px] text-center hover:bg-black sm:p-2 xl:h-[425px]"
            >
              {" "}
              <div className="max-h-full p-4 md:p-8">
                <AspectRatio
                  ratio={2 / 1.25}
                  className="relative h-full max-h-[280px] w-full max-w-[465px] place-self-center"
                >
                  <Image
                    src={getImageSource("drippi") ?? "/images/drippiLaptop.png"}
                    fill
                    style={{ objectFit: "contain" }}
                    alt="drippi mockups"
                  />
                </AspectRatio>
              </div>
            </div>

            <div
              onMouseEnter={() => handleMouseEnter("roar")}
              onMouseLeave={() => handleMouseLeave("roar")}
              className="relative h-auto max-h-full w-[600px] max-w-full content-center rounded-[48px]  rounded-bl-none border-4 border-black p-[6px] text-center hover:bg-white sm:p-2 xl:h-[425px]"
            >
              <div className="max-h-full p-4 md:p-8">
                <AspectRatio
                  ratio={2 / 1.25}
                  className="relative h-full max-h-[280px] w-full max-w-[465px] place-self-center"
                >
                  <Image
                    src={getImageSource("roar") ?? "/images/roarLaptop.png"}
                    fill
                    style={{ objectFit: "contain" }}
                    alt="roar mockups"
                  />
                </AspectRatio>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-2 md:gap-8">
            <div
              onMouseEnter={() => handleMouseEnter("scaler")}
              onMouseLeave={() => handleMouseLeave("scaler")}
              className="relative h-auto max-h-full w-[600px] max-w-full content-center rounded-[48px] rounded-tr-none border-4 border-black p-[6px] text-center hover:bg-white sm:p-2 xl:h-[425px]"
            >
              {" "}
              <div className="max-h-full p-4 md:p-8">
                <AspectRatio
                  ratio={2 / 1.25}
                  className="relative h-full max-h-[280px] w-full max-w-[465px] place-self-center"
                >
                  <Image
                    src={
                      getImageSource("scaler") ?? "/images/scalerLaptop1.png"
                    }
                    fill
                    style={{ objectFit: "contain" }}
                    alt="scaler mockups"
                  />
                </AspectRatio>
              </div>
            </div>
            <div
              onMouseEnter={() => handleMouseEnter("twali")}
              onMouseLeave={() => handleMouseLeave("twali")}
              className="relative h-auto max-h-full  w-[600px] max-w-full content-center rounded-[48px] rounded-br-none border-4 border-black p-[6px] text-center hover:bg-black sm:p-2 xl:h-[425px]"
            >
              {" "}
              <div className="max-h-full p-4 md:p-8 ">
                <AspectRatio
                  ratio={2 / 1.25}
                  className="relative h-full max-h-[280px] w-full max-w-[465px] place-self-center"
                >
                  <Image
                    src={getImageSource("twali") ?? "/images/twaliLaptop.png"}
                    fill
                    style={{ objectFit: "contain" }}
                    alt="twali mockups"
                  />
                </AspectRatio>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Marquee />
    </section>
  );
}

function StepSection() {
  return (
    <section
      id="chat"
      className={`z-10 flex min-h-screen w-full flex-col justify-center gap-20 bg-black px-2 py-20 lg:px-40 ${nasalization.className}`}
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
              We chat! We learn about you, your product, goals, persona, and
              hypothesis.{" "}
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
              We present user flows, branding, and UX/UI prototypes. You provide
              feedback, we iterate.
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
              We&apos;re here to guide you through testing and collecting
              feedback with your audience for future development.
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="w-full">
        <Card className="mx-auto h-full min-h-[200px] w-full max-w-[480px] content-center rounded-[48px] border-4 border-[#EDE5D9] bg-transparent">
          <CardContent>
            <p className=" text-[20px] font-normal text-[#EDE5D9]">
              To MVP and beyond. We&apos;re still here post-MVP if you&apos;d
              like to work in a long-term capacity.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

function Footer() {
  return (
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
          <Image width={42} height={42} src={"/svg/help.svg"} alt="help" />
          <Image
            width={42}
            height={42}
            src={"/svg/program.svg"}
            alt="program"
          />
          <Image width={42} height={42} src={"/svg/scan.svg"} alt="scan" />
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
  );
}

function NavBar() {
  return (
    <nav className="auto border-t-l fixed top-0 z-50 mt-[40px] flex h-[90px] w-full max-w-[96%] items-center justify-between rounded-full rounded-bl-none rounded-tl-none border-4 border-black bg-white px-4 md:px-12 xl:max-w-[1348px] ">
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
          Work
        </a>
        <a
          href="#chat"
          className="text-[16px] tracking-tight text-black md:text-[20px] lg:text-[28px]"
        >
          Chat
        </a>
      </div>
    </nav>
  );
}
