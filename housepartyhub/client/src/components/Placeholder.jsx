import image_sm from "../../src/images/party-glass-sm.webp";
import image_md from "../../src/images/party-glass-md.webp";
import image_lg from "../../src/images/party-glass-lg.webp";

export default function PlaceHolder() {
  return (
    <div className="placeholder-img">
      <picture>
        <source media="(max-width: 600px)" srcSet={image_sm} />
        <source media="(max-width: 900px)" srcSet={image_md} />
        <img
          src={image_lg}
          alt="Image of Champagne glasses raised up high in a party"
          width={"1500"}
          height={"750"}
          loading="lazy"
        />
      </picture>
    </div>
  );
}
