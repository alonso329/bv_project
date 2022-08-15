import "./LandingBlocks.css";

export default function LandingBlocks({ imgUrl, imgAlt, title, content }) {
  return (
    <div className="block-layout">
      <img src={imgUrl} alt={imgAlt} />
      <p className="block-title">{title}</p>
      <p className="block-content">{content}</p>
      <p className="learn-more">Learn more</p>
    </div>
  );
}
