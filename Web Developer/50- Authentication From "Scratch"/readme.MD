* Authentication: The profess of verifying who a user is. We usually authenticate with a username and password.

* Authorization: Verifying what a specific user has access to.

* How to not store products
    * Never store passwords as they are. -> Use hashing functions instead
    * Hashing functions are functions that map input data of some arbitrary size to fixed-size output values.


* Cryptographic hashing functions
    * [Hash function example](https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Hash_table_4_1_1_0_0_1_0_LL.svg/1200px-Hash_table_4_1_1_0_0_1_0_LL.svg.png)
    * small change in input yields large change in the output
    * same input yields same output
    * impossible to find 2 outputs with same value
    * password hash functions are deliberately (kasten) slow.
    * one way functions, hashed password cannot be reversed by the user.