import { Container } from '../../Components/Container';
import { Footer } from '../../Components/Footer';
import { Logo } from '../../Components/Logo';
import { Menu } from '../../Components/Menu';
type MainTemplatesProps = {
  children: React.ReactNode;
};
export function MainTemplates({ children }: MainTemplatesProps) {
  return (
    <>
      <Container>
        <Logo />
      </Container>
      <Container>
        <Menu />
      </Container>
      {children}
      <Container>
        <Footer />
      </Container>
    </>
  );
}
