import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";

export function Footer() {
    return (
        <footer className="w-full py-8 bg-black border-t border-white/10 text-center">
            <div className="max-w-7xl mx-auto px-6 flex flex-col items-center justify-center space-y-4">
                <div className="flex space-x-6">
                    <Link href="https://github.com/Kartikp9904" target="_blank" className="text-muted-foreground hover:text-white transition-colors">
                        <Github size={20} />
                    </Link>
                    <Link href="https://linkedin.com/in/kartikp9904" target="_blank" className="text-muted-foreground hover:text-white transition-colors">
                        <Linkedin size={20} />
                    </Link>
                    <Link href="https://twitter.com" className="text-muted-foreground hover:text-white transition-colors">
                        <Twitter size={20} />
                    </Link>
                    <Link href="mailto:kartikp9904@gmail.com" className="text-muted-foreground hover:text-white transition-colors">
                        <Mail size={20} />
                    </Link>
                </div>
                <p className="text-xs text-muted-foreground">
                    &copy; {new Date().getFullYear()} Portfolio. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
