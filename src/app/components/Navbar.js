"use client"


import { useRouter } from "next/navigation";


const Navbar = () => {
  const router = useRouter();

  const goToMainPage = () => {
    router.push("/page");
  };

  const goToStore = () => {
    router.push("/cart");
  };

  return (
    <nav>
      <button onClick={goToMainPage}>Move to main page</button>
      <br/>
      <button onClick={goToStore}>Go to store</button>
    </nav>
  );
};

export default Navbar;
