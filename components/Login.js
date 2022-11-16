import Head from "next/head";





function Login({onConnect}) {

  
  return (
    
        <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-[#252A34]">
        <Head>
          <title>Login Health</title>
          <link rel="icon" href="../public/favicon.ico" />
        </Head>
        <main className="flex flex-col justify-center items-center w-full flex-1 px-20 text-center">
        <div className="bg-[#393E46] rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
        <div className="w-3/5 p-5">
        {/* Sign In  */}
        <div className="text-left font-bold">
        <span className="text-[#FFC7C7]">NIGHT</span> RAID
        </div>
        <div className="py-28 px-12">
          <h2 className="text-3xl font-bold text-[#FFC7C7] mb-2">
            Connect to patient account
          </h2>
          <div className="border-2 w-10 border-[#FFC7C7] inline-block mb-10"></div>
          <div className="flex flex-col items-center">
          <div className="bg-gray-100 w-64 p-2 rounded-xl">
          <input  className="bg-gray-100 rounded-md"type="email" name="email" placeholder="Enter your ID">
        </input>
        </div>
        <div className="bg-gray-100 w-64 p-2 rounded-xl mt-10">
        <input  className="bg-gray-100 rounded-md"type="password" name="password" placeholder="Enter your Password">
        </input>
        </div>
        <button onClick={onConnect} className="border-2 border-[#FFC7C7] rounded-full text-[#FFC7C7] px-12 py-2 inline-block mt-10 font-semibold hover:bg-[#FFC7C7] hover:text-black">Connect</button>
        
          </div>
        </div>
        </div>
        <div className="w-2/5 bg-[#FF2E63] text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
        {/* About */}
        <h2 className="text-3xl font-bold mb-2">
        HOSPITAL  
        </h2>
        <div className="border-2 w-10 border-white inline-block mb-2"></div>
        <div className="mb-10">Enter your hospital ID so as to open the records
        <div className="bg-gray-100 w-64 p-2 rounded-xl mt-6">
          <input  className="bg-gray-100 rounded-md "type="email" name="email" placeholder="Enter your ID">
        </input>
        </div>
        <a href="#" className="border-2 border-white rounded-full px-12 py-2 inline-block mt-10 font-semibold hover:bg-white hover:text-black">Connect</a>
        </div>
        </div>
        
        
        </div>
        </main>
        </div>
    

    

  )
}

export default Login
