'use client'


import { Metadata } from "next";
import { withLayout } from "@/layout/Layout";
import { API } from "@/helpers/api";
import { MenuItem } from "@/interfaces/menu.interface";
import { useEffect, useState } from "react";

export const metadata: Metadata = {
  title: 'Home page',
  description: 'Home',
}

async function getMenu(firstCategory: number): Promise<MenuItem[]> {
  const res = await fetch(API.topPage.find, {
    method: 'POST',
    body: JSON.stringify({
      firstCategory
    }),
    headers: new Headers({ 'content-type': 'application/json' })
  })

  return res.json()
}

function Home() {
  // try {
  //   const menu = await getMenu(0)
  // } catch (e) {
  //   console.log(e)
  // }
  const [count, setCount] = useState<number>(0)
  const [rating, setRating] = useState<number>(4)

  useEffect(() => {
    console.log('Counter: ', count)

    return function cleanup() {
      console.log('----Unmounted----')
    }
  })

  return (
    <main>
      Home Page
    </main>
  );
}

export default withLayout(Home)