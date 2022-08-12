- コンテナ作成
```shell
docker build -t kohee/circle-auth:latest ./circle-auth
# docker run -p 8081:80 --env-file ./circle-auth/.env -it kohee/circle-auth:latest
docker push kohee/circle-auth:latest

docker build --platform amd64 -t kohee/circle-web:latest ./circle-web
# docker run -p 3000:3000 -it kohee/circle-web:latest
docker push kohee/circle-web:latest

docker build --platform amd64  -t kohee/circle-router:latest ./circle-router
docker push kohee/circle-router:latest
```

- local
```shell
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.3.0/deploy/static/provider/cloud/deploy.yaml
skaffold dev
```

- secrets
```
export KUBECONFIG=$HOME/Downloads/okteto-kube.config:${KUBECONFIG:-$HOME/.kube/config}
kubectl config use-context cloud_okteto_com-context
kubectl apply -f k8s/circle-auth-secret.yaml
kubectl config use-context docker-desktop
```