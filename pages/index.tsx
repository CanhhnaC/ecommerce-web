import { IShoppingCart, IUser } from 'src/components/icons';
import Logo from 'src/assets/svg/logo.svg';
import { Button } from 'src/components/ui';

export default function Home() {
  return (
    <div className="container mx-auto bg-gray-600">
      <h1 className="font-bold">Hello World</h1>
      <IUser />
      <IShoppingCart />
      <Logo />
      <Button>Hello World</Button>
      <Button size="large">Hello World</Button>
      <Button size="small">Hello World</Button>
      <Button variant="primary">Hello World</Button>
      <Button variant="gray">Hello World</Button>
      <Button variant="link">Hello World</Button>
    </div>
  );
}
