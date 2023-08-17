export default function loading() {
  return (
    <div>
      <div className="skeleton h-[508px] w-full md:h-[400px]"></div>
      <ul className="mx-auto mt-10 flex max-w-[500px] flex-wrap justify-center gap-10">
        {Array(6)
          .fill(1)
          .map((item, i) => (
            <li
              key={i}
              className="skeleton h-[120px] w-[120px]"
              style={{ borderRadius: "999px" }}
            ></li>
          ))}
      </ul>
      <ul className="container mt-10 flex flex-wrap justify-center gap-16">
        {Array(2)
          .fill(1)
          .map((item, i) => (
            <li
              key={i}
              className="skeleton  h-[143px] w-full max-w-[300px] rounded-3xl"
            ></li>
          ))}
      </ul>
    </div>
  );
}
