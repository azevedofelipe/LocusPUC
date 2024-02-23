# Projeto-INF1039

## Instalação

### Clonar o projeto

```
git clone https://github.com/azevedofelipe/LocusPUC
cd LocusPUC
```

### Instalar dependências

```
pip install django-taggit
pip install pipenv
pip install django-filter
pip install django-rest-knox
pip install python-decouple

pipenv install
pipenv shell

pip freeze > requirements.txt
```

### Aplicar Migrações

```
python manage.py migrate
```

### Criar superuser para acessar tela de admin

```
python manage.py createsuperuser
```

### Iniciar servidor

```
python manage.py runserver
```

## Iniciar Aplicação Frontend

### Entrar na pasta Frontend

```
cd frontend
```

### Instalar dependências (Apenas na primeira vez)

```
npm i
```

### Iniciar

```
npm start
```
