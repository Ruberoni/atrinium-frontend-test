"use client";

import pokeapi from "@/src/services/pokeapi";
import PokemonCard from "../components/cards/PokemonCard";
import ReactPaginate from "react-paginate";
import { useEffect, useState } from "react";

export default function PokemonsList() {
  const limit = 15;
  const paginationLinkClassName =
    "min-w-[30px] h-[30px] p-2 flex items-center justify-center bg-primary-100 text-primary-900 hover:bg-primary-200 transition duration-300";

  const [currentPage, setcurrentPage] = useState(0);

  const { data, isLoading, error } = pokeapi.usePokemonsSummaryListQuery({
    offset: currentPage * limit,
    limit,
  });

  const pokemonsList = data?.pokemonsList;
  const pageCount = data ? Math.floor(data.count / limit) : 0;

  function handlePageClick(selectedItem: { selected: number }) {
    console.log(
      "🚀 ~ file: PokemonsList.tsx:15 ~ handleClick ~ e:",
      selectedItem,
    );
    setcurrentPage(selectedItem.selected);
  }

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [currentPage]);

  if (error) {
    console.error(error);
    return (
      <section className="container pt-primary">
        <h1 className="text-center text-2xl">Ha ocurrido un error</h1>
      </section>
    );
  }

  if (!isLoading && !pokemonsList?.length) {
    return (
      <section className="container pt-primary">
        <h1 className="text-center text-2xl">No hay resultados</h1>
      </section>
    );
  }

  return (
    <section className="container p-primary">
      <ul className="flex flex-wrap justify-center gap-x-9 gap-y-8">
        {isLoading
          ? Array(15)
              .fill(1)
              .map((item, i) => (
                <li key={i} className="skeleton h-[268px] w-[180px]"></li>
              ))
          : pokemonsList?.map((pokemon) => (
              <li key={pokemon.id}>
                <PokemonCard {...pokemon} />
              </li>
            ))}
      </ul>
      {!isLoading && (
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          previousLabel="<"
          onPageChange={handlePageClick}
          pageRangeDisplayed={2}
          marginPagesDisplayed={1}
          pageCount={pageCount}
          renderOnZeroPageCount={null}
          className="mt-10 flex justify-center"
          breakLinkClassName={paginationLinkClassName}
          previousLinkClassName={paginationLinkClassName}
          nextLinkClassName={paginationLinkClassName}
          pageLinkClassName={paginationLinkClassName}
          disabledLinkClassName="opacity-50 hover:bg-primary-100"
          activeLinkClassName="bg-primary-400 hover:bg-primary-400"
        />
      )}
    </section>
  );
}
