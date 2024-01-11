
interface Props{
    phrase:string;
    author:string;
}

export const PhraseMain = ({phrase,author}:Props) => {
  return (
    <>
         <div className="w-full h-2/4 flex justify-center items-center">
            <h2 className="font-bold text-4xl dark:text-zinc-400"> {phrase}</h2>
        </div>
        <div className="w-full h-1/4 flex justify-end">
            <h3 className="font-bold text-xl dark:text-zinc-400">{author}</h3>
        </div>
    </>
  )
}
