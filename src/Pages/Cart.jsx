import React, { useEffect, useState } from "react";
import { products } from "../Data/Data/Products";
import { Link } from "react-router-dom";
import { FaPlusCircle } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";

export default function Cart() {
  const [data, setData] = useState([]);

  const handleRemoveCart = (id) => {
    const newCart = data.filter((item) => item.id !== id);
    setData(newCart);
    const newCartIds = newCart.map((item) => item.id);
    localStorage.setItem("cart", JSON.stringify(newCartIds));
  };

  useEffect(() => {
    const cartIds = JSON.parse(localStorage.getItem("cart")) || [];
    const cartProducts = products.filter((product) =>
      cartIds.includes(product.id)
    );
    setData(cartProducts);
  }, []);
  return (
    <div>
      <section class=" py-8 antialiased  md:py-16">
        <div class="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <ol class="items-center flex w-full max-w-2xl text-center text-sm font-medium text-gray-500 text-gray-400 sm:text-base">
            <li class="after:border-1 flex items-center text-[#2abf2a] after:mx-6 after:hidden after:h-1 after:w-full after:border-b after:border-gray-200  after:border-gray-700 sm:after:inline-block sm:after:content-[''] md:w-full xl:after:mx-10">
              <span class="flex items-center after:mx-2 after:text-gray-200 after:content-['/'] after:text-gray-500 sm:after:hidden">
                <svg
                  class="me-2 h-4 w-4 sm:h-5 sm:w-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                Cart
              </span>
            </li>

            <li class="after:border-1 flex items-center text-primary-700 after:mx-6 after:hidden after:h-1 after:w-full after:border-b after:border-gray-200 text-primary-500 after:border-gray-700 sm:after:inline-block sm:after:content-[''] md:w-full xl:after:mx-10">
              <span class="flex items-center after:mx-2 after:text-gray-200 after:content-['/'] after:text-gray-500 sm:after:hidden">
                <svg
                  class="me-2 h-4 w-4 sm:h-5 sm:w-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                Checkout
              </span>
            </li>

            <li class="flex shrink-0 items-center">
              <svg
                class="me-2 h-4 w-4 sm:h-5 sm:w-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              Order summary
            </li>
          </ol>

          <div class="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
            <div class="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
              <div class="space-y-6">
                {data &&
                  data.map((item, index) => (
                    <div class="rounded-lg border border-gray-200 p-4 shadow-sm border-gray-700  bg-white/80 md:p-6">
                      <div class="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                        <img
                          class="  h-20 w-20  "
                          src={item.img}
                          alt="imac himage"
                        />

                        <label for="counter-input" class="sr-only">
                          Choose quantity:
                        </label>
                        <div class="flex items-center justify-between md:order-3 md:justify-end">
                          <div class="flex items-center">
                            <FaMinusCircle />

                            <input
                              type="text"
                              id="counter-input"
                              data-input-counter
                              class="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 text-gray-800"
                              placeholder=""
                              value="2"
                              required
                            />
                            <FaPlusCircle />
                          </div>
                          <div class="text-end md:order-4 md:w-32">
                            <p class="text-base font-bold text-gray-900 text-gray-800">
                              ₹{item.price}
                            </p>
                          </div>
                        </div>

                        <div class="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                          <p class="text-base font-medium text-gray-900 hover:underline text-gray-800">
                            {item.name}
                          </p>

                          <div class="flex items-center gap-4">
                            <button
                              onClick={() => handleRemoveCart(item.id)}
                              class="inline-flex items-center text-sm font-medium text-red-600 hover:underline text-red-500"
                            >
                              <svg
                                class="me-1.5 h-5 w-5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  stroke="currentColor"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M6 18 17.94 6M18 18 6.06 6"
                                />
                              </svg>
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
               
            </div>

            <div class="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
              <div class="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm border-gray-700 bg-gray-800 sm:p-6">
                <p class="text-xl font-semibold text-gray-900 text-gray-800">
                  Order summary
                </p>

                <div class="space-y-4">
                  <div class="space-y-2">
                    <dl class="flex items-center justify-between gap-4">
                      <dt class="text-base font-normal text-gray-500 text-gray-400">
                        Original price
                      </dt>
                      <dd class="text-base font-medium text-gray-900 text-gray-800">
                        $7,592.00
                      </dd>
                    </dl>

                    <dl class="flex items-center justify-between gap-4">
                      <dt class="text-base font-normal text-gray-500 text-gray-400">
                        Savings
                      </dt>
                      <dd class="text-base font-medium text-green-600">
                        -$299.00
                      </dd>
                    </dl>

                    <dl class="flex items-center justify-between gap-4">
                      <dt class="text-base font-normal text-gray-500 text-gray-400">
                        Store Pickup
                      </dt>
                      <dd class="text-base font-medium text-gray-900 text-gray-800">
                        $99
                      </dd>
                    </dl>

                    <dl class="flex items-center justify-between gap-4">
                      <dt class="text-base font-normal text-gray-500 text-gray-400">
                        Tax
                      </dt>
                      <dd class="text-base font-medium text-gray-900 text-gray-800">
                        $799
                      </dd>
                    </dl>
                  </div>

                  <dl class="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 border-gray-700">
                    <dt class="text-base font-bold text-gray-900 text-gray-800">
                      Total
                    </dt>
                    <dd class="text-base font-bold text-gray-900 text-gray-800">
                      $8,191.00
                    </dd>
                  </dl>
                </div>

                <Link
                  to={"/checkout"}
                  class="flex w-full items-center justify-center rounded-lg bg-[#A16207] px-5 py-2.5 text-sm font-medium text-gray-100   focus:outline-none focus:ring-4 focus:ring-primary-300  hover:bg-primary-700 focus:ring-primary-800"
                >
                  Proceed to Checkout
                </Link>

                <div class="flex items-center justify-center gap-2">
                  <span class="text-sm font-normal text-gray-500 text-gray-400">
                    {" "}
                    or{" "}
                  </span>
                  <Link
                    to={"/products"}
                    title=""
                    class="inline-flex items-center gap-2 text-sm font-medium text-gray-800 underline hover:no-underline text-primary-500"
                  >
                    Continue Shopping
                    <svg
                      class="h-5 w-5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 12H5m14 0-4 4m4-4-4-4"
                      />
                    </svg>
                  </Link>
                </div>
              </div>

              <div class="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm border-gray-700 bg-gray-800 sm:p-6">
                <form class="space-y-4">
                  <div>
                    <label
                      for="voucher"
                      class="mb-2 block text-sm font-medium text-gray-900 text-gray-800"
                    >
                      {" "}
                      Do you have a voucher or gift card?{" "}
                    </label>
                    <input
                      type="text"
                      id="voucher"
                      class="block w-full rounded-lg border border-gray-300 bg-white p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 border-gray-600  text-gray-800 placeholder:text-gray-400 focus:border-primary-500 focus:ring-primary-500"
                      placeholder=""
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    class="flex w-full items-center justify-center rounded-lg bg-[#A16207] px-5 py-2.5 text-sm font-medium text-gray-100 hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300  hover:bg-primary-700 focus:ring-primary-800"
                  >
                    Apply Code
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
