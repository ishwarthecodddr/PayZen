export  function Balance({balance}) {
    return <div className="flex">
        <div className="font-bold text-lg ">
            Your Balance
        </div>
        <div className="font-semibold text-lg ml-4">
            Rs {balance}
        </div>

    </div>
}