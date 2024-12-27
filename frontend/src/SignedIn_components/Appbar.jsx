export function Appbar() {
    return (
        <div className="shadow-lg h-16 flex justify-between items-center px-6 bg-white">
            <div className="text-2xl font-semibold text-blue-600">
                Wasooli App
            </div>
            <div className="flex items-center space-x-4">
                <div className="text-lg text-gray-700">
                    Hello, User
                </div>
                <div className="rounded-full h-12 w-12 bg-blue-500 text-white flex items-center justify-center text-xl font-bold">
                    U
                </div>
            </div>
        </div>
    );
}
