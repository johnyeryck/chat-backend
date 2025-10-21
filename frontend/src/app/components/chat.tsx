import Image from "next/image";

interface Chat {
  InputHidden?: boolean;
}

export default function Chat({ InputHidden }: Chat) {
  return (
    <div className=" shadow shadow-gray-800 w-1/3  mt-20 h-120 rounded-lg bg-[#0D0E1C]">
      <div className=" flex justify-evenly " hidden={InputHidden}>
        <input
          type="text"
          className="border border-[#1FFFE1]  rounded-2xl pl-3 w-2/3 "
          placeholder="Envie Uma Mensagem"
        />
        <button type="submit" className="cursor-pointer">
          <Image src="/mandar.png" alt="enviar" width={20} height={20} />
        </button>
      </div>
    </div>
  );
}
