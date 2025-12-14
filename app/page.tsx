import { Container } from "@/components/ui/Container";

export default function Home() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-white color-black">
      <Container size="lg" className="py-20">
        <div className="text-center">
          <h1 className="font-montserrat text-4xl font-bold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
            Welcome to Hexallo
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Building modern web experiences
          </p>
        </div>
      </Container>
    </div>
  );
}
