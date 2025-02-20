 ```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: mysql
  namespace: mysql
spec:
  replicas: 1
  selector:
    matchLabels:
      app: mysql
  template:
    metadata:
      labels:
        app: mysql
    spec:
      containers:
      - name: mysql
        image: localhost:30000/mysql:8.0-oracle 
        imagePullPolicy: IfNotPresent
        env:
        - name: MYSQL_ROOT_PASSWORD
          valueFrom:
            secretKeyRef:
              name: db-secret
              key: db-root-pass
        - name: MYSQL_DATABASE
          value: "network"
        - name: MYSQL_DATABASE
          value: "server"
        - name: MYSQL_DATABASE
          value: "other"
        ports:
        - containerPort: 3306
        volumeMounts:
        - name: mysql-storage
          mountPath: /var/lib/mysql
      volumes:
      - name: mysql-storage
        hostPath:
          path: /home/mysql
---
apiVersion: v1
kind: Service
metadata:
  name: mysql
  namespace: mysql
spec:
  type: NodePort
  selector:
    app: mysql
  ports:
    - port: 3306
      targetPort: 3306
      nodePort: 30006
---
apiVersion: v1
kind: List
metadata:
  namespace: mysql
items:
  - apiVersion: v1
    kind: Secret
    type: Opaque
    metadata:
      name: db-secret
      namespace: mysql
    data:
      db-root-pass: "xxxx"
