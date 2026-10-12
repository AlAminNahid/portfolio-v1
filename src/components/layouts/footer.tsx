import Container from "@/components/ui/Container";
import { SITE_NAME } from "@/constants/site";

export default function Footer() {
  return (
    <footer className="border-t border-border pt-8 pb-12">
      <Container className="flex flex-wrap justify-between gap-x-8 gap-y-2.5">
        <p className="label">{SITE_NAME}</p>
        <p className="label">Dhaka, Bangladesh</p>
        <p className="label">
          © {new Date().getFullYear()} All rights reserved
        </p>
      </Container>
    </footer>
  );
}
