import Head from "next/head";
import Link from "next/link";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

function Second() {
  const { t } = useTranslation();

  return (
    <div>
      <Head>
        <title>Issue</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          <Link passHref href="/">
            <a>{t("home")}</a>
          </Link>
        </h1>
        <h1>
          <Link
            passHref
            href={{ pathname: "/second", query: { query: "test" } }}
          >
            <a>{t("add-query")}</a>
          </Link>
        </h1>
        <h1>
          <Link
            passHref
            href={{ pathname: "/second", query: { query: "test-2" } }}
          >
            <a>{t("change-query")}</a>
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

export default Second;
