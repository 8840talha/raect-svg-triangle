const Triangle = ({ a, b, c }: { a: string; b: string; c: string }) => {
  return (
    <polygon
      points={a + " " + b + " " + c}
      style={{ fill: "lime", stroke: "purple", strokeWidth: 1 }}
    />
  );
};

export default Triangle;
