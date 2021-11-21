https://www.mongodb.com/blog/post/6-rules-of-thumb-for-mongodb-schema-design-part-3
denormalization: coping some of the data into another table

if a user has millions of tweets, create a tweet and reference user within the tweet object itself!