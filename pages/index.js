import Login from "../components/Login";
import { useState } from "react";
import Homes from "../components/Homes";





export default function Home() {


  const [isUserLogged, setUserLogged] = useState(false);
  const [correctNetwork, setCorrectNetwork] = useState(false);
  const [currentAccount, setCurrentAccount] = useState('');
  const onConnect = async() =>{
    try{

      const {ethereum } = window;
      if(!ethereum){
        console.log("metamask not connected");
        return;
      }
      let chainId = await ethereum.request({method: 'eth_chainId'});
      console.log("connected through chain Id", chainId);
      const goerli = '0x5';
      if(chainId !== goerli){
        alert("not the correct network");
        setCorrectNetwork(false);
        return;
      }
      else{
        setCorrectNetwork(true);
        console.log("connected ");
        setUserLogged(true);
      }
    }
    catch(error){
      console.log(error);
    }

    const accounts = await ethereum.request({method : 'eth_requestAccounts'});
  }

  const onDisconnect = () =>{
    setUserLogged(false);
  }

  return (
    <>
{/* Login */}
<div>
  {
    !isUserLogged ? <Login onConnect={onConnect}/> : isUserLogged ? <Homes/> : <h1>error</h1>
  }
</div>
    



{/* Form */}
{/* Display */}



    </>
  )
}
