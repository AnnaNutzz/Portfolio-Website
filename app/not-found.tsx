import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground p-4">
            <h2 className="text-4xl font-bold mb-4">404</h2>
            <p className="text-xl text-gray-400 mb-8">Page Not Found</p>
            <Link
                href="/"
                className="bg-white text-black px-6 py-2 rounded-md font-medium hover:bg-gray-200 transition-colors"
            >
                Return Home
            </Link>
        </div>
    );
}
