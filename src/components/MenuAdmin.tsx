
import { Navbar } from 'flowbite-react';

export default function MenuAdmin() {
  return (
    <Navbar fluid rounded className='w-full dark:bg-transparent'>
      <Navbar.Brand  href="/dashboard">
        
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Project X</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="/">Logout</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}