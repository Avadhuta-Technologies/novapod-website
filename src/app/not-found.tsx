import { Container, Button } from "@/components/ui";

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <span className="font-display text-7xl font-bold text-gradient">404</span>
      <h1 className="mt-4 font-display text-2xl font-bold tracking-tight text-ink-900">
        Page not found
      </h1>
      <p className="mt-3 max-w-sm text-ink-600">
        The page you’re looking for doesn’t exist or has moved.
      </p>
      <div className="mt-8">
        <Button href="/" withArrow>
          Back to home
        </Button>
      </div>
    </Container>
  );
}
