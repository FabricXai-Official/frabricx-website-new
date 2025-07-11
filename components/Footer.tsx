import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#34383B] m-0 p-0 text-[#A8B0B7]">
      <div className="m-0 py-4 px-8 flex items-center justify-between text-center">
        <div>

        </div>
                <div>
          
        </div>
                <div>
          
        </div>
                <div>
          
        </div>
      </div>
      <div className="m-0 py-4 px-8 flex items-center justify-between text-center border-t border-[#DFE1F433]">
        <p>© 2025 fabricXai. All rights reserved.</p>
        <div className="flex gap-2">
          <Link href="/privacy-policy">
            Privacy Policy
          </Link>
          <Link href="/terms-of-service">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
