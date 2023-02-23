import { useEffect, useRef } from "react";
import { Cursor } from "react-simple-typewriter";

class TextScramble {
  private el: HTMLElement;
  private chars = "!123456789-_\\/[]{}—=+*^?#________";
  private resolve!: () => void;
  private queue: { from: string; to: string; start: number; end: number; char?: string }[] = [];
  private frameRequest: number | null = null;
  private frame = 0;

  constructor(el: HTMLElement) {
    this.el = el;
    this.update = this.update.bind(this);
  }

  public setText(newText: string): Promise<void> {
    const oldText = this.el.innerText;
    const length = Math.max(oldText.length, newText.length);
    const promise = new Promise<void>((resolve) => (this.resolve = resolve));
    this.queue = [];
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || "";
      const to = newText[i] || "";
      const start = Math.floor(Math.random() * 40);
      const end = start + Math.floor(Math.random() * 40);
      this.queue.push({ from, to, start, end });
    }
    cancelAnimationFrame(this.frameRequest!);
    this.frame = 0;
    this.update();
    return promise;
  }

  private update() {
    let output = "";
    let complete = 0;
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i];
      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar();
          this.queue[i].char = char;
        }
        output += `<span class="dud">${char}</span>`;
      } else {
        output += from;
      }
    }
    this.el.innerHTML = output;
    if (complete === this.queue.length) {
      this.resolve();
    } else {
      this.frameRequest = requestAnimationFrame(this.update);
      this.frame++;
    }
  }

  private randomChar(): string {
    return this.chars[Math.floor(Math.random() * this.chars.length)];
  }
}

const phrases = [
  "Jonathan Opigez",
  "Développeur Fullstack",
  "Bac +2 développeur web et web mobile",
  "Recherche alternance bac +3 CDA",
  "OpenToWork ",

];

const TextAnimation = () => {
  const elRef = useRef<HTMLHeadingElement>(null);
  const fx = useRef<TextScramble | null>(null);

  useEffect(() => {
    if (elRef.current) {
      fx.current = new TextScramble(elRef.current);
      let counter = 0;
      const next = () => {
        fx.current!.setText(phrases[counter]).then(() => {
          setTimeout(next, 3000);
        });
        counter = (counter + 1) % phrases.length;
      };
      next();
    }
  }, []);

  return (
    <span className="text" ref={elRef}>
      {/* initial text */}<Cursor cursorColor='#6E61Ca' />
    </span>
  );
};

export default TextAnimation;
