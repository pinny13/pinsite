/*
Given two priority queues write a method that will return next message based on priority.

nextmessage(qList)
  return message with highest priority of qList

q = queue 
q.queue /dequeue

q1 m1/1 > m2/2 > m3/1 > m4/3

m1/1 > m2/5 > m3/1 > m4/3

Message {
    str : string
    pri: num
}
*/
var nextMessage = function(q1, q2){
    if (q1.head == null){
        if (q2.head == null){
            return null;
        }
        return q2.dequeue();
    }
    
    if (q2.head == null){
        if (q1.head == null){
            return null;
        }
        return q1.dequeue();
    }
    
   let m1 = q1.head();
   let m2 = q2.head();
   
   if (m1.pri >= m2.pri){
       q1.dequeue();
       return m1;
   }
   
   q2.dequeue();
   return m2;
}


 //What if there are n queue?
var nextMessage2 = function(qs){
    if (!qs){
        return null;
    }
    
    let currentMax = -1;
    let currentQueue = null;
    for (let i=0; i < qs.length; i++){
        const q = qs[i];
        let msg = q.head;
        if (msq !== null){
            if (msq.pri > currentMax){
                currentMax = msg.pri;
                currentQueue = q;
            }
        }
    }
    
    if (currentQueue){
        return currentQueue.dequeue();
    }
    
    return null;
}


q1 = m1("a", 1)
q2 = m2("b", 2)

m1 = nextMessage(q1, q2)
m2 = nextMessage(q1, q2)