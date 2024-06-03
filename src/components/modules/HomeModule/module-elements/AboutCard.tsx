import { AboutCardProps } from "../../types/homeModule";

export const AboutCard = ({ number, content }: AboutCardProps): JSX.Element => (
    <div className="w-full flex flex-row gap-4 md:gap-6 items-center">
        <div className="rounded-full bg-white px-4 md:px-6 py-1.5 md:py-3.5 font-bold text-[#100E0E] text-2xl drop-shadow-[0_4px_20px_rgba(239,124,100,0.41)]">
            {number}
        </div>

        <p className="font-medium text-white text-justify text-sm md:text-base">{content}</p>
    </div>
)