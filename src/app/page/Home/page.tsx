import NavBar from "@/app/component/NavBar/NavBar";
import RootLayout from "@/app/layout";

const Home = () => {
  return (
    <>
      <RootLayout>
        <NavBar/>
        <h1>Homepage Content</h1>
      </RootLayout>
    </>
  );
};

export default Home;
