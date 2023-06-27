#include "list.h"
#include <stdlib.h>
#include "fatal.h"

struct Node {
    ElementType Element;
    Position Next;
};

List MakeEmpty(List L) {
    if (L != NULL) {
        DeleteList(L);
    }
    L = malloc(sizeof(struct Node));
    if (L == NULL) {
        
    }
}

void DeleteList(List L) {
    
}
