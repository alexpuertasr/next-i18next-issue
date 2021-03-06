import Head from "next/head";
import Link from "next/link";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

function Home() {
  const { t } = useTranslation();

  return (
    <div>
      <Head>
        <title>Issue</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          <Link passHref href="/second">
            <a>{t("second")}</a>
          </Link>
        </h1>
      </main>
    </div>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default Home;
