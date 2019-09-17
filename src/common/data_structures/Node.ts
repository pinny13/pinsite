export class psNode {
    private _tail: psNode | null = null;
    private _head: psNode | null = null;
    private _value: any;

    public constructor(tail: psNode | null, head: psNode | null, value: any | null) {
        this.tail(tail);
        this.head(head);
        this.value(value);
    }

    public tail(node?: psNode | null): psNode | null | void {
        if (!node){
            return this._tail;
        }
        
        this._tail = node;
    }

    public head(node?: psNode | null) : psNode | null | void {
        if (!node){
            return this._head;
        }
        
        this._head = node;
    }

    public value(value: any | null | undefined) : any | void {
        if (!value){
            return this._value;
        }
        
        this._value = value;
    }
}