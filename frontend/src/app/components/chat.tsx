export default function Chat() {
  return (
    <div className="">
      <div className="border w-1/3 h-140 mt-20 text-white ml-auto mr-auto ">
        <input
          type="text"
          className=" border border-white pl-2"
          placeholder="Envie uma mensagem"
        />
        <button className="border border-[#0cf187]">Enviar</button>
      </div>
    </div>
  );
}
