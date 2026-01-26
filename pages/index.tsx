import Head from "next/head";
import { Button, Htag, P, Tag } from "@/components"

export default function Home() {
  return (
    <div>
      <Htag tag="h1">Text</Htag>
      <Button appearance='primary' arrow="right">Click</Button>
      <Button appearance='ghost' arrow="down">Click</Button>
      <P size="s">Lorem fds fddsfs;dfg</P>
      <P size="m">Lorem fds fddsfs;dfg</P>
      <P size="l">Lorem fds fddsfs;dfg</P>
      <Tag color="red" size="m">testing</Tag>
    </div>
  );
}
