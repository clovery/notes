class Stack {
  stack: any[];

  constructor() {
    this.stack = []
  }

  public pop() {
    return this.stack.pop()
  }

  public push(element: any) {
    return this.stack.push(element)
  }
}
