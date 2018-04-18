fn main() {
    let mut v = vec![1, 2, 3, 4, 5];

    for i in &v {
        println!("A reference to {}", i);
    }

    for i in &mut v {
        println!("A mutable reference to {}", i);
    }

    // 注意：你不能在使用 vector 的所有权遍历之后再次遍历它。你可以使用它的引用多次遍历 vector。
    for i in v {
        println!("Take ownership of the vector and its element {}", i);
    }
}
