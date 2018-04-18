(define (length items)
  (if (null? items)
    0
    (+ 1 (length (cdr items)))))


(define (list-ref items n)
  (if (= n 0)
      (car items)
      (list-ref (cdr items) (- n 1))))


(define (reverse items)
  (define (reverse-iter items n)
    (print list-ref items n))

  (reverse-iter items (length items)))

(define squares (list 1 4 9 16 25))

(print (reverse squares))
