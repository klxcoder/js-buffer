# JSON Request
curl -X POST -H "Content-Type: application/json" -d '{"name":"Alice"}' http://localhost:3000/endpoint

# Binary Request
echo -n "Hello" | curl -X POST -H "Content-Type: application/octet-stream" --data-binary @- http://localhost:3000/endpoint