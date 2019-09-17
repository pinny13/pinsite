export class Tuple<T> {
    private _value1:T;
    private _value2:T;

    public constructor (value1:T, value2:T){
        this._value1 = value1;
        this._value2 = value2;
    }

    public get value1():T {
        return this._value1;
    }

    public get value2():T {
        return this._value2;
    }
}