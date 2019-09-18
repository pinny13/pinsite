import {psNode} from '../common';

function getListLength(firstNode: psNode): number {
    let i=0;

    let node: psNode = firstNode;
    while (node.head()) {
        i++;
        node = node.head() as psNode;
    }
    return ++i;
}

function getList5(): psNode {
    const node1: psNode = new psNode(null, null, 'Node1');
    const node2: psNode = new psNode(null, null, 'Node2');
    const node3: psNode = new psNode(null, null, 'Node3');
    const node4: psNode = new psNode(null, null, 'Node4');
    const node5: psNode = new psNode(null, null, 'Node5');

    node1.head(node2);
    node2.tail(node1); node2.head(node3);
    node3.tail(node2); node3.head(node4);
    node4.tail(node3); node4.head(node5);
    node5.tail(node4);

    return node1;
}

export function getListLength_5(): number {
    return getListLength(getList5());
}