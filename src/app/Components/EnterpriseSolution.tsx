import Image from "next/image";
import { cn } from "@/lib/utils";

interface EnterpriseSolutionProps {
  title: string;
  subtitle?: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  backgroundImageSrc?: string;
  className?: string;
  companyName?: string;
}

export default function EnterpriseSolution({
  title,
  subtitle,
  description,
  imageSrc,
  imageAlt,
  backgroundImageSrc,
  className,
  companyName,
}: EnterpriseSolutionProps) {
  // Replace company name in description if provided
  const processedDescription = description.replace("NXT", companyName || "NXT");

  return (
    <section
      className={cn(
        "relative w-full overflow-hidden bg-white py-16 md:py-24",
        className
      )}
    >
      {/* Decorative background element */}
      <div className="absolute left-0 top-0 h-[300px] w-[300px] bg-blue-100 opacity-50"></div>

      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="mb-2 text-4xl font-bold text-teal-900 md:text-5xl lg:text-6xl">
            {title}
          </h1>
          {subtitle && <p className="text-lg text-gray-600">{subtitle}</p>}
        </div>

        {/* Content */}
        <div className="relative grid gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">
          {/* Text content */}
          <div className="flex flex-col justify-center">
            <p className="text-lg leading-relaxed text-gray-700">
              {processedDescription}
            </p>
          </div>

          {/* Image with custom shape */}
          <div className="relative">
            <div className="enterprise-image-container relative h-[500px] w-full overflow-hidden">
              <Image
                src={imageSrc || "/placeholder.svg"}
                alt={imageAlt}
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Background illustration */}
          {backgroundImageSrc && (
            <div className="absolute bottom-0 left-0 -z-10 opacity-10">
              <Image
                src={backgroundImageSrc || "/placeholder.svg"}
                alt="Background illustration"
                width={600}
                height={400}
                className="object-contain"
              />
            </div>
          )}
        </div>
      </div>

      {/* CSS for the custom image shape */}
      <style jsx global>{`
        .enterprise-image-container {
          border-radius: 30px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          clip-path: polygon(
            20% 40%,
            25% 30%,
            40% 20%,
            55% 25%,
            60% 15%,
            75% 25%,
            80% 40%,
            85% 55%,
            80% 70%,
            65% 80%,
            50% 75%,
            40% 85%,
            25% 75%,
            20% 60%
          );
        }
      `}</style>
    </section>
  );
}
