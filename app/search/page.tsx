import getAddressesByTitle from "@/actions/getAddressesByTitle";
import Header from "@/components/Header";
import SearchInput from "@/components/SearchInput";
import React from "react";
import SearchContent from "./components/SearchContent";

interface SearchProps {
  searchParams: { title: string };
}
export const revalidate = 0;

const Search = async ({ searchParams }: SearchProps) => {
  const addresses = await getAddressesByTitle(searchParams.title);
  return (
    <div
      className="
        bg-neutral-900
        rounded-lg
        h-full
        w-full
        overflow-hidden
        overflow-y-auto
      "
    >
      <Header
        className="
          from-bg-neutral-900
        "
      >
        <div
          className="
            mb-2
            flex
            flex-col
            gap-y-6
          "
        >
          <h1 className="text-white text-2xl font-semibold">Adresų paieška</h1>
          <SearchInput />
        </div>
      </Header>
      <SearchContent addresses={addresses} />
    </div>
  );
};

export default Search;
