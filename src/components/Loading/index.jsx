function Loading() {
  return (
    <div className="flex flex-col justify-center items-center h-143.75 ">
      <strong className="text-3xl font-medium text-white">
        Carregando os Filmes...
      </strong>
      <div className="flex flex-row gap-2 mt-3">
        <div className="w-5 h-5 rounded-full bg-blue-700 animate-bounce"></div>
        <div className="w-5 h-5 rounded-full bg-blue-700 animate-bounce [animation-delay:-.3s]"></div>
        <div className="w-5 h-5 rounded-full bg-blue-700 animate-bounce [animation-delay:-.5s]"></div>
      </div>
    </div>
  );
}

export default Loading;
