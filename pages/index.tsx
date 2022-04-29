import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Card from "../components/Card";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>QR Code Component - FrontEnd Mentor</title>
        <link
          rel="icon"
          href="https://github.com/sudwiptokm/frontend-mentor-QR-code-component/blob/451b7261b7313f0b9ecc9540db4948b305fdb3ae/public/favicon.ico"
        />
      </Head>
      <div className="w-screen h-screen bg-gray-300">
        <Card />
      </div>
    </div>
  );
};

export default Home;
