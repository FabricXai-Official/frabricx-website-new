export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-gray-900 text-white">
      <h1 className="text-xl font-bold">FabricX</h1>
      <nav>
        <ul className="flex space-x-4">
          <li><a href="/about" className="hover:underline">About</a></li>
          <li><a href="/contact" className="hover:underline">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}
