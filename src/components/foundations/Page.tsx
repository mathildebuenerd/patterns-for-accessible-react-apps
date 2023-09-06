import { PropsWithChildren } from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import { AriaLiveRegion } from "./AriaLiveRegion/AriaLiveRegion";

interface Props extends PropsWithChildren {
  title: string;
}

export default function Page({ title, children }: Props) {
  return (
    <>
      <Header />
      <AriaLiveRegion role="status" />
      <main>
        <h1>{title}</h1>
        {children}
      </main>
      <Footer />
    </>
  );
}
