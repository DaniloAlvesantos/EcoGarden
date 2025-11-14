import { Header, type NavigationType } from "../components/header";

const navigation:NavigationType = [
    {
        title: "Mapa",
        url: "/map",
        isFeature: false,
    },
    {
        title: "Início",
        url: "/",
        isFeature: false,
    },

]

export function DashboardPage() {
  return (
    <>
      <Header navigation={navigation}  />
      <hr />

      <section>
        <h1>Dashboard</h1>
      </section>
    </>
  );
}
