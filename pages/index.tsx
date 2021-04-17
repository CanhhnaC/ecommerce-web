import { IShoppingCart, IUser } from 'src/components/icons';
import Logo from 'src/assets/svg/logo.svg';

export default function Home() {
  return (
    <div className="container mx-auto">
      <h1 className="font-bold">Hello World</h1>
      <IUser />
      <IShoppingCart />
      <Logo />
    </div>
  );
}
