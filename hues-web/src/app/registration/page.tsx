
export default function Registration() {
    return (
        <section className="py-20 bg-gray-900 rounded-lg" id="registration">
            <h2 className="text-4xl font-bold text-center mb-10 text-custom-cyan">Become a Member</h2>
            <form className="max-w-xl mx-auto px-4">
                <div className="mb-6">
                    <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="name">Full Name</label>
                    <input className="w-full bg-gray-800 border border-gray-700 rounded py-3 px-4 text-white focus:outline-none focus:border-custom-cyan transition duration-300" id="name" name="name" placeholder="John Doe" type="text" />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="email">Email Address</label>
                    <input className="w-full bg-gray-800 border border-gray-700 rounded py-3 px-4 text-white focus:outline-none focus:border-custom-cyan transition duration-300" id="email" name="email" placeholder="john.doe@example.com" type="email" />
                </div>
                <div className="mb-8">
                    <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="major">Major</label>
                    <input className="w-full bg-gray-800 border border-gray-700 rounded py-3 px-4 text-white focus:outline-none focus:border-custom-cyan transition duration-300" id="major" name="major" placeholder="e.g., Computer Science" type="text" />
                </div>
                <div className="text-center">
                    <button className="bg-custom-cyan text-custom-black font-bold py-3 px-12 rounded-full text-lg hover:bg-transparent hover:text-custom-cyan border-2 border-custom-cyan transition duration-300" type="submit">Submit</button>
                </div>
            </form>
        </section>
    )
}