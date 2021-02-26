import Block  from "../classes/classBlock";

export   function render(query: string = ".wrapper", block: Block): void {
    const root: any = document.querySelector(query);
    root.appendChild(block.getContent());
    return root;
  }
