(define (list-ref items n)
  (if (= n 0)
    (car items)
    (list-ref (cdr items) (- n 1))))

(define (length items)
  (if (null? items)
    0
    (+ 1 (length (cdr items)))))

(define squares (list 1 4 9 16 25))

(print squares)
(print (length squares))
(print (list-ref squares 3))
