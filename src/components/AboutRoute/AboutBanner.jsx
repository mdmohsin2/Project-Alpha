export default function AboutBanner() {
    return <div>
        <div className="py-10 text-black" style={{ backgroundColor: "#FEF0F8" }}>
            <div className="grid grid-cols-12">
                <div className="col-span-1"></div>
                <div className="col-span-10">
                    <h2 className="text-5xl font-bold my-4">About us</h2>
                    <h4 className="text-2xl">Your motto</h4>
                </div>
                <div className="col-span-1"></div>

            </div>
        </div>
    </div>
}