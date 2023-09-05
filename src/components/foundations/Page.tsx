import { PropsWithChildren } from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import SearchBar from "../../component_library/SearchBar";

interface Props extends PropsWithChildren {
  title: string;
}

export default function Page({ title, children }: Props) {
  return (
    <>
      <Header />
      <SearchBar />
      <main>
        <h1>{title}</h1>
        {children}
      </main>
      <Footer />
    </>
  );
}
