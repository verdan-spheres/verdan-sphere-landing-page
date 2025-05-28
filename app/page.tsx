import Logo from "./components/Logo";

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "black",
      }}
    >
      <Logo />
      <h1
        style={{
          color: "white",
          fontFamily: "Times New Roman, Times, serif",
          fontSize: "3rem",
          margin: "0",
        }}
      >
        Welcome to Verdant Sphere
      </h1>
      <h2
        style={{
          color: "white",
          fontFamily: "Times New Roman, Times, serif",
          fontSize: "2rem",
          fontStyle: "italic",
          marginTop: "10px",
        }}
      >
        Toxic Free Social Media
      </h2>
      <h2
        style={{
          color: "white",
          fontFamily: "Times New Roman, Times, serif",
          fontSize: "2rem",
          fontStyle: "italic",
          MozAnimationDelay: "0.5s",
          marginTop: "10px",
        }}
      >
        Toxic Free Social Media
      </h2>
    </div>
  );
}
