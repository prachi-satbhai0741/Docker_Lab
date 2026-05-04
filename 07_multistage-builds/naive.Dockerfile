FROM golang:1.22
WORKDIR /app
COPY . .
RUN go build -o server main.go
CMD ["./server"]
