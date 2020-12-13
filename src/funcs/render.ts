export   function render(query: string, block: any): void {
    const root: any = document.querySelector(query);
    root.appendChild(block.getContent());
    return root;
  }