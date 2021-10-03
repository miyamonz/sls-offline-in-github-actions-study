# serverless offline を github actions でテストする example

参考: https://codeburst.io/how-i-do-integration-test-for-service-powered-by-serverless-dynamodb-using-jest-e94f0710d28f

参考元は bash でやってるが、bash はつらいので zx に置き換えた。
zx(つまり js)上で子プロセスとして起動して、pid をファイルで保持とかをしないようにしてる

`__test__/integration/`にあるテストを実行する。http リクエストとかは参考元と同じく supertest でリクエストを飛ばした。ただ expect とかは jest 使ってる。axios 的なもののほうがいいかも？
