'use client'
import Head from "next/head";
import { Button, Htag, P, Rating, Tag } from "@/components"
import { useEffect, useState } from "react";
import RootLayout from "@/layout/Layout";

export default function Home() {
  const [count, setCount] = useState<number>(0)
  const [rating, setRating] = useState<number>(4)

  useEffect(() => {
    console.log('Counter: ', count)

    return function cleanup() {
      console.log('----Unmounted----')
    }
  })

  return (
    <RootLayout>
      <div>
        <Htag tag="h1">{count}</Htag>
        <Button appearance='primary' arrow="right" onClick={() => setCount(count => count + 1)}>Click</Button>
        <Button appearance='ghost' arrow="down">Click</Button>
        <P size="s">Lorem fds fddsfs;dfg</P>
        <P size="m">Lorem fds fddsfs;dfg</P>
        <P size="l">Lorem fds fddsfs;dfg</P>
        <Tag color="red" size="m">testing</Tag>
        <Rating rating={rating} setRating={setRating} isEditable={true} />
      </div>
    </RootLayout>
  );
}
