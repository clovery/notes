export interface INode<T> {
  element: T;
  next: INode<T> | null;
}

/**
 * let linkedlist = new LinkedList()
 */
export default class LinkedList<T> {
  private head: INode<T>; // head
  private tail: INode<T>; // tail

  constructor() {
    this.head = null
    this.tail = null
  }

  public add(node: T): boolean {
    const newNode = this.createNode(node)
    if (this.head === null) {
      this.head = newNode
      this.tail =  newNode

    } else {
      this.tail.next = newNode
      this.tail = newNode
    }

    return true
  }

  public insert(node: T, index?: number) {

  }

  public remove() {};
  public removeLast() {};

  first(): T | null {
    return null;
  }

  last(): T | null {
    return null
  }

  empty() {
    this.head = null
    this.tail = null

    return this
  }

  isEmpty(): boolean {
    return this.head === null
  }

  isLast(node: INode<T>): boolean {
    return node.next === null
  }

  private createNode(node: T): INode<T> {
    return {
      element: node,
      next: null
    }
  }
}

/*
void Insert( ElementType X, List L, Position P )
*/
