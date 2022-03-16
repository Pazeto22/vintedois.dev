import Image from "next/image";
import Tobeyzao from "../../../public/tobey.jpg";

function Tobey() {
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1 style={{ marginBottom: "2rem" }} className="title-h1 fc-s">
          Shazam Carai
        </h1>
        <Image src={Tobeyzao} alt="shazamkrai" />
        <p
          className="body-t fc-b"
          style={{ margin: "2rem 0 0 0", textAlign: "justify" }}
        >
          Mussum Ipsum, cacilds vidis litro abertis. Posuere libero varius.
          Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Atirei
          o pau no gatis, per gatis num morreus. Copo furadis é disculpa de
          bebadis, arcu quam euismod magna. Si num tem leite então bota uma
          pinga aí cumpadi! Diuretics paradis num copo é motivis de denguis.
          Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu
          levo! Mais vale um bebadis conhecidiss, que um alcoolatra anonimis.
          Casamentiss faiz malandris se pirulitá. A ordem dos tratores não
          altera o pão duris. Nullam volutpat risus nec leo commodo, ut interdum
          diam laoreet. Sed non consequat odio. Per aumento de cachacis, eu
          reclamis. Nec orci ornare consequat. Praesent lacinia ultrices
          consectetur. Sed non ipsum felis.
        </p>
        <p
          className="body-t fc-b"
          style={{ margin: "1.5rem 0 2rem 0", textAlign: "justify" }}
        >
          Mussum Ipsum, cacilds vidis litro abertis. Posuere libero varius.
          Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Atirei
          o pau no gatis, per gatis num morreus. Copo furadis é disculpa de
          bebadis, arcu quam euismod magna. Si num tem leite então bota uma
          pinga aí cumpadi! Diuretics paradis num copo é motivis de denguis.
          Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu
          levo! Mais vale um bebadis conhecidiss, que um alcoolatra anonimis.
          Casamentiss faiz malandris se pirulitá. A ordem dos tratores não
          altera o pão duris. Nullam volutpat risus nec leo commodo, ut interdum
          diam laoreet. Sed non consequat odio. Per aumento de cachacis, eu
          reclamis. Nec orci ornare consequat. Praesent lacinia ultrices
          consectetur. Sed non ipsum felis.
        </p>
      </div>
    </>
  );
}

export default Tobey;
