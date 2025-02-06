import Link from "next/link";
export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-center font-bold mt-9 text-6xl">error('404 Not Found');
            </h1>
            <h2>Págine não encontrada</h2>
            <Link href='/' className="text-red-700 mt-9 bg-slate-300 p-3">
                Voltar
            </Link>
        </div>
    );
}