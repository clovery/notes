; Exercise 1.2.
; Translate the following expression into prefix form

(define numer (+ 5 4 (- 2 (- 3 (+ 6 (/ 4 5))))))
(define denom (* 3 (- 6 2) (- 2 7)))

(print (/ numer denom))
