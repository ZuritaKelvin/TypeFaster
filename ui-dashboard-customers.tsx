"use client";
import { useState } from "react";
import { CameraIcon, ChevronLeft, ChevronRight, Search } from "lucide-react";
import { HiOutlineDocumentAdd } from "react-icons/hi";

import { useBeautifulAiQueries } from "@/hooks/BeautifulAi/beautifulAiQueries";
import { Customers, Travels } from "@/models/BeautifulAi/types";

import "flowbite";
import { Status } from "@/types/enum/travelStatus";
export default function UIDashboardCustomers() {
  const useQuery = useBeautifulAiQueries();
  const travels = useQuery.getTravels();
  const customers: Customers[] = useQuery.getCustomers();
  const [busqueda, setBusqueda] = useState("");
  const [selectedCustomer, setSelectedCustomer] = useState<Customers | null>();
  const [selectedTravel, setSelectedTravel] = useState<Travels | undefined>();
  return (
    <div
      className={`mt-16 min-h-screen rounded-lg bg-gray-100 p-8 text-gray-700 dark:bg-gray-900 dark:text-white lg:ml-48 xl:ml-48 2xl:ml-20 2xl:w-[95%]`}
    >
      <div>{useQuery.getCurrentNotify()}</div>

      <div className={`rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800`}>
        <div className="mb-6 flex items-center justify-between">
          <div className="relative flex flex-row gap-3">
            <input
              type="text"
              placeholder="Buscar Cliente"
              className={`w-64 rounded-md bg-gray-100 py-2 pl-10 pr-0 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white`}
              onChange={(e) => setBusqueda(e.target.value)}
            />
            <Search
              className={`absolute left-3 top-2.5 text-gray-500 dark:text-gray-400`}
              size={18}
            />
          </div>
        </div>

        <table className="w-full">
          <thead>
            <tr
              className={`border-b border-gray-300 text-gray-500 dark:border-gray-700 dark:text-gray-400`}
            >
              <th className="px-1 pb-3 text-left">Id</th>
              <th className="pb-3 text-left">Cliente</th>
              <th className="pb-3 text-left">Email</th>
              <th className="pb-3 text-left">Direccion</th>
            </tr>
          </thead>
          <tbody>
            {customers
              .filter((customer) =>
                customer.name.toLowerCase().includes(busqueda.toLowerCase())
              )
              .map((customer) => (
                <tr
                  key={customer.id}
                  className={`border-gray-200'} border-b dark:border-gray-700`}
                >
                  <td className="py-4">{customer.id}</td>
                  <td className="py-4">{customer.name}</td>
                  <td className="py-4">{customer.email}</td>
                  <td className="py-4">{customer.addres}</td>
                  <td className="py-3">
                    <button
                      className="flex w-fit flex-row items-center rounded-md bg-gray-200 px-3 py-1 text-center text-gray-800 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
                      data-modal-target="crud-modal"
                      data-modal-toggle="crud-modal"
                      type="button"
                    >
                      <HiOutlineDocumentAdd className="inline-flex h-4 w-4 md:mr-2 md:h-6 md:w-6" />
                      <span className="hidden md:inline-flex">
                        Crear Factura
                      </span>
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        <div className="mt-6 flex items-center justify-between">
          <span
            className={"text-gray-500 dark:text-gray-400"}
          >{`Mostrando 1-${Math.max(
            1,
            Math.round(customers.length / 10)
          )}`}</span>
          <div className="flex space-x-2">
            <button
              className={`rounded-md bg-gray-200 p-2 text-gray-800 dark:bg-gray-700 dark:text-white`}
            >
              <ChevronLeft size={18} />
            </button>
            <button
              className={`rounded-md bg-gray-200 px-3 py-1 text-gray-800 dark:bg-gray-700 dark:text-white`}
            >
              1
            </button>
            {Math.round(customers.length / 10) > 1 && (
              <>
                {Array(Math.round(customers.length / 10)).map((i) => (
                  <button
                    key={i}
                    className={`rounded-md bg-gray-200 px-3 py-1 text-gray-800 dark:bg-gray-700 dark:text-white`}
                  >
                    {i + 1}
                  </button>
                ))}
                <span className={"text-gray-500 dark:text-gray-400"}>...</span>
                <button
                  className={`rounded-md bg-gray-200 px-3 py-1 text-gray-800 dark:bg-gray-700 dark:text-white`}
                >
                  100
                </button>
              </>
            )}
            <button
              className={`rounded-md bg-gray-200 p-2 text-gray-800 dark:bg-gray-700 dark:text-white`}
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
      <div
        id="crud-modal"
        tabIndex={-1}
        aria-hidden="true"
        className="fixed left-0 right-0 top-0 z-50 hidden h-[calc(100%-1rem)] max-h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden md:inset-0"
      >
        <div className="relative max-h-full w-full max-w-md p-4">
          <div className="relative rounded-lg bg-white shadow dark:bg-gray-700">
            <div className="flex items-center justify-between rounded-t border-b p-4 dark:border-gray-600 md:p-5">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Añadir Factura
              </h3>
              <button
                type="button"
                className="end-2.5 ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="crud-modal"
              >
                <svg
                  className="h-3 w-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <div className="p-4 md:p-5">
              <form className="space-y-4" action={useQuery.addDocument}>
                <label
                  htmlFor="client"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Cliente
                </label>
                <div className="relative mb-4 grid grid-cols-2 items-center justify-center gap-4">
                  <div className="col-span-2 sm:col-span-1">
                    <select
                      id="client"
                      className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
                      name="client"
                      {...(selectedCustomer
                        ? { value: selectedCustomer.id }
                        : {})}
                      onChange={(e) =>
                        setSelectedCustomer(
                          customers.find(
                            (customer) => customer.id === Number(e.target.value)
                          )
                        )
                      }
                    >
                      <option> Selecionar Cliente</option>=
                      {customers.map((customer) => (
                        <option key={customer.id} value={customer.id}>
                          {customer.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="relative col-span-2 sm:col-span-1">
                    <input
                      type="search"
                      placeholder="Buscar Cliente"
                      className={`flex w-full rounded-md bg-gray-100 text-center text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white `}
                      onChange={(e) => {
                        if (e.target.value.length > 0) {
                          setSelectedCustomer(
                            customers.find((customer) =>
                              customer.name
                                .toLowerCase()
                                .includes(e.target.value.toLowerCase())
                            )
                          );
                        } else {
                          setSelectedCustomer(null);
                        }
                      }}
                    />
                    <Search
                      className={`absolute left-3 top-2.5 text-gray-500 dark:text-gray-400`}
                      size={18}
                    />
                  </div>
                </div>
                <label
                  htmlFor="travel"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Viaje
                </label>
                <div className="relative mb-4 grid grid-cols-2 items-center justify-between gap-4 align-baseline">
                  <div className="col-span-2">
                    <select
                      id="travel"
                      className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
                      name="travel"
                      {...(selectedTravel ? { value: selectedTravel.id } : {})}
                      onChange={(e) =>
                        setSelectedTravel(
                          travels.find(
                            (travel) => travel.id === Number(e.target.value)
                          )
                        )
                      }
                    >
                      <option>{`${
                        selectedCustomer
                          ? travels.filter(
                              (travel) =>
                                travel.clientId === selectedCustomer?.id &&
                                travel.status !== Status.Cobrado
                            ).length > 0
                            ? "Seleccionar Viaje a facturar"
                            : "Sin viajes por facturar "
                          : "Seleccionar Viaje a facturar"
                      }`}</option>
                      =
                      {travels
                        .filter(
                          (travel) =>
                            travel.clientId === selectedCustomer?.id &&
                            travel.status !== Status.Cobrado
                        )
                        .map((travel) => (
                          <option key={travel.id} value={travel.id}>
                            {travel.clientName} - {travel.date} -{" "}
                            {travel.status}
                          </option>
                        ))}
                    </select>
                  </div>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label
                    htmlFor="price"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Precio
                  </label>
                  <div className="relative mb-4 grid grid-cols-2 items-center justify-between gap-4 align-baseline">
                    <input
                      type="number"
                      name="price"
                      id="price"
                      className="focus:ring-primary-600 focus:border-primary-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 col-span-2 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400 sm:col-span-1"
                      placeholder="$0.00"
                      required
                    />
                    <label
                      htmlFor="file-input"
                      className="relative col-span-2 flex flex-row items-center rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:col-span-1"
                    >
                      <CameraIcon
                        size={20}
                        className="absolute left-3 top-2.5"
                      />
                      <span className="w-full ">Abrir Camara</span>
                      <input
                        type="file"
                        name="file"
                        id="file-input"
                        className="hidden"
                        required
                      />
                    </label>
                  </div>
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  data-modal-toggle="crud-modal"
                >
                  <svg
                    className="-ms-1 me-1 h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  Crear factura
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
