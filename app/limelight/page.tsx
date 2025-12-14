import { Container } from "@/components/ui/Container";

export default function Limelight() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-white">
      <Container size="lg" className="py-20">
        <div className="text-center">
          <h2 className="font-inter text-4xl font-normal text-gray-900 md:text-5xl lg:text-6xl">
            Coming Soon
          </h2>
        </div>
      </Container>
    </div>
  );
}

