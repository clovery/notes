"""
自然语言描述
计算两个非负整数 p 和 q 的最大公约数:若 q 是 0，则最大公约数为 p。否则，将 p 除以 q得到余数r，p和q的最大公约数即为q和 r 的最大公约数。
"""

def gcd(p: int, q: int):
    if (q == 0):
        return p
    r = p % q
    return gcd(q, r)

print(gcd(30, 50))
