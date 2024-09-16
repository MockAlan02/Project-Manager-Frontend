
import { Navbar } from 'flowbite-react';

export default function Menu() {
  return (
    <Navbar fluid rounded className='fixed w-full'>
      <Navbar.Brand  href="https://flowbite-react.com">
        
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="/" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="/about">About</Navbar.Link>
        <Navbar.Link href="/register">Register</Navbar.Link>
        <Navbar.Link href="/Login">Login</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}