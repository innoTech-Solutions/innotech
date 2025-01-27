/**
    This component are not fully finalized, as I still waiting for the initial UI design
    that would Julian like. Anyway, i'm creating just for the foundation of this component
 */

const reasons = [
    "We offer tailored solutions to fit each client's unique needs",
    "Provide affordable and competitive pricing with flexible packages",
    "Implement optimize and secure services, along with excellent support and maintenance services"
]

export default function WhyChooseUs(){
    return(
        <div className="min-h-screen flex flex-col justify-center items-center">
            <h1 className="font-bold text-5xl italic font-fjalla text-center">Why Choose Our Services?</h1>
            <div className="flex flex-wrap justify-center items-center mt-5 gap-5">
                {reasons.map((key, reason) => (
                    <div
                        key={key}
                        className="flex justify-center items-center rounded-md bg-transparent p-10 w-80 h-44 text-center border border-white"
                    >
                        <span className="font-semibold">
                            {reasons[reason]}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}