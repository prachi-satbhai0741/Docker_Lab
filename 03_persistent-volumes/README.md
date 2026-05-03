
# 03 — Persistent Volumes

## What I Learned
- By default container data is lost when container is removed — volumes fix this
- A Docker volume lives outside the container on the host machine
- Same volume can be mounted to multiple containers — data survives container deletion
- This is critical for databases in production

## Commands Used

### Create Volume
```bash
docker volume create db_data
```
Creates a named volume managed by Docker

### Run MySQL with Volume
```bash
docker run -d \
  --name mysql-db \
  -e MYSQL_ROOT_PASSWORD=MySecret123 \
  -e MYSQL_DATABASE=testdb \
  -v db_data:/var/lib/mysql \
  -p 3306:3306 \
  mysql:8
```

### Verify Volume
```bash
docker volume ls
docker volume inspect db_data
```

## Output Screenshots

### Data Inserted
![mysql data](images/mysql-data.png)

### Data Persisted After Container Deletion
![data persisted](images/data-persisted.png)

> **Note:** Both screenshots show the same output intentionally — this proves that even after the original container was deleted, the new container retrieved the exact same data from the volume. Same output = successful persistence! 


## Verification
- `docker volume ls` shows `db_data` 
- Avi,Prachi,Ram visible after container deletion 
- New container `mysql-db-new` reads same data 

##  Key Concepts
| Term | My Understanding |
|------|-----------------|
| Named Volume | Storage managed by Docker, lives outside container |
| -v flag | Mounts a volume into the container at specified path |
| Data Persistence | Data survives even after container is deleted |
| Stateful Container | Container that needs to remember data (like a database) |
