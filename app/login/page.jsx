import Link from "next/link";

export default function Home() {
  return (
    <div className="w-screen h-screen text-3xl flex flex-col gap-10 justify-center items-center text-center">
      <span>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium
        sed officia a suscipit rem dolore dolores, cupiditate quaerat? Libero,
        provident minus maxime laboriosam perspiciatis pariatur blanditiis hic
        quod illo eaque.
      </span>
      <span className="text-red-400">
        The Page You have tried to access is not made yet...
      </span>
      <span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam tempore
        optio nostrum adipisci, reprehenderit eveniet dolorem ex reiciendis
        maiores deserunt voluptate? Excepturi sint magni animi cupiditate a,
        doloremque recusandae veritatis.
      </span>

      <span>
        <Link href="/">Back</Link>
      </span>
    </div>
  );
}
