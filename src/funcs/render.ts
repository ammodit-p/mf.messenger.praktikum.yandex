export   function render(query: string, block: T): void {
    const root: T = document.querySelector(query);
    root.appendChild(block.getContent());
    return root;
  }