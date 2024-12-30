import Image from "next/image";


export default function Loading()  {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black/80">
      <div className="w-40 relative aspect-square flex flex-col items-center space-y-4">
        {/* Spinner */}
        <div className="absolute bg-black/0 w-full h-full border-8 border-gray-300 border-t-primary rounded-full animate-spin">
 

        </div>
        <Image
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-12 "
            src="/X.png"
            alt="Logo Nexxom"
            width={80}
            height={40}
          />
        {/* Texte */}
      </div>
    </div>
  );
}
