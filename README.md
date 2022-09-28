# Projeto-INF1039

## Instalação

### Clonar o projeto

```
git clone https://github.com/Rodrigosnrocha/Projeto-INF1039
cd Projeto-INF1039
```

### Instalar dependências

```
pip install django-taggit
pip install pipenv
pip install django-filter
pip install django-rest-knox

pipenv install
pipenv shell
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
