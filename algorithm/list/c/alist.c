#include "./list.h"

int IsEmpty(List L) {
    return L->Next == Null;
}

int IsLast(Position P, List L) {
    return P->Next == NULL;
}

Position Find(ElementType X, List L) {
    Position P;
    
    P = L->Next;
    while (P != NULL && P->Element != X) {
        P = P->Next;
    }
    return P;
}

Position FindPrevious(ElementType X, List L) {
    
}

void Delete(ElementType X, List L) {
    Position P, TmpCell;
}
