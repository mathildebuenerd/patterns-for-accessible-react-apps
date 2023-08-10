import { PropsWithChildren } from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";

interface Props extends PropsWithChildren {
  title: string;
}

export default function Page({ title, children }: Props) {
  return (
    <>
      <Header />
      <main>
        <h1>{title}</h1>
        {children}
      </main>
      <Footer />
    </>
  );
}
