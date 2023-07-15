import { SITE_TITLE } from "../lib/constants";
import Head from "next/head";
import Image from "next/image";
import { BsEggFried } from "react-icons/bs";

export default function Index() {
  return (
    <>
      <Head>
        <title>{SITE_TITLE}</title>
      </Head>

      <Image
        className="object-cover mt-10 rounded-full shadow-xl m-auto"
        width={500}
        height={500}
        src="/assets/edson.jpg"
        alt="Biftek"
      />

      <header>
        <h1 className="font-medium py-10 text-7xl text-center underline">
          {SITE_TITLE}
        </h1>
      </header>

      <main>
        <h2 className="text-center pt-10 pb-5 text-3xl">Pankek</h2>
        <h3 className="text-center text-xl">Malzemeler</h3>
        <BsEggFried className="m-auto my-10" size={32} />
        <ol className="text-center">
          <li>Beyaz peynir</li>
          <li>Yarım demet Maydanoz</li>
          <li>4 Yumurta</li>
          <li>Un</li>
          <li>Süt</li>
          <li>Tuz</li>
          <li>Tereyağ</li>
        </ol>
        <h3 className="text-center text-xl">Hazırlanışı</h3>
        <ol>
          <li>Peyniri ezin.</li>
          <li>Maydanozları ince ince doğrayın.</li>
          <li>Peyniri maydanozla karıştırın.</li>
          <li>Bir kapta yumurta çırpın.</li>
          <li>
            Yumurtanın içine bir bardak süt, peynirle maydanoz, un, tuz hepsini
            koyup karıştırın.
          </li>
          <li>Tavayı tereyağ ile yağlayın.</li>
          <li>
            Karışımdan bir küçük kepçe kadar dökün ve iki yüzünü de pişirin.
          </li>
        </ol>
        Bon Appétit
      </main>

      <footer className="my-10 text-right mx-5">
        <a href="https://gokaygultekin.dev">GG</a>
      </footer>
    </>
  );
}
