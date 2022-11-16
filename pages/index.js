import Head from "next/head";
import Login from "../components/Login";

export default function Home() {
  return (
    <>
{/* Login */}
<div className="flex flex-col items-center justify-center min-h-screen py-2 bg-[#252A34]">
<Head>
  <title>Login Health</title>
  <link rel="icon" href="../public/favicon.ico" />
</Head>

    <Login/>
</div>



{/* Form */}
{/* Display */}



    </>
  )
}
