const HoverText = ({ text, className = "text-hover" }) => {
  const letters = text.split("");

  return (
    <span className={className}>
      {letters.map((letter, index) => (
        <span key={index} style={{ "--index": index }}>
          {letter}
        </span>
      ))}
    </span>
  );
};

export default HoverText;
