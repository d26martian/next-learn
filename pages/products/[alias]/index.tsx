import { Metadata } from "next";
import { withLayout } from "@/layout/Layout";
import { useRouter } from "next/router";

export const metadata: Metadata = {
  title: 'Home page',
  description: 'Home',
}

function PageProducts(params) {
  const router = useRouter()
  console.log('-=-=-=-=', params)
  return (
    <main>
      Products Page with --- {params?.segmentName}
    </main>
  );
}

export default withLayout(PageProducts)