from django.shortcuts import render
from django.shortcuts import redirect
from django.db import models
from .models import Article
from django.http import Http404
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from django.contrib.auth import login as auth_login
from django.contrib.auth import logout
def archive(request):
    return render(request, 'archive.html', {"posts": Article.objects.all()})


# Create your views here.

def get_article(request, article_id):
    try:
        post = Article.objects.get(id=article_id)
        return render(request, 'article.html', {"post": post})
    except Article.DoesNotExist:
        raise Http404

def create_post(request):
    if not request.user.is_anonymous:
        if request.method == "POST":
            form = {'text': request.POST["text"], 'title':request.POST["title"]}
            try:
                if Article.objects.get(title=form["title"]):
                    form['errors'] = u'Статья с таким названием уже есть'
                    return render(request, 'create_post.html', {'form': form})
            except Article.DoesNotExist:
                if form["text"] and form["title"]:
                    Article.objects.create(text=form["text"], title=form["title"], author=request.user)
                    return redirect(archive)
                else:
                    form['errors'] = u"Не все поля заполнены"
                    return render(request, 'create_post.html', {'form': form})
        else:
            return render(request, 'create_post.html', {})

    else:
        raise Http404

def register(request):
    if request.user.is_anonymous:
        if request.method == "POST":
            form = {'username': request.POST["username"], 'email':request.POST["email"], 'password':request.POST["password"]}
            users = User.objects.all()
            for user in users:
                if form['username'] == user.username:
                    form['errors'] = u'Пользователь с таким названием уже есть'
                    return render(request, 'register.html', {'form': form})
            User.objects.create_user(form["username"], form["email"], form["password"])
            return redirect(archive)
        else:
            return render(request, 'register.html', {})

    else:
        raise Http404

def login(request):
    if request.user.is_anonymous:
        if request.method == "POST":
            form = {'username': request.POST["username"], 'password':request.POST["password"]}
            user = authenticate(request, username=form['username'], password=form['password'])
            if user is None:
                form['errors'] = u'Неправильно введен логин или пароль'
                return render(request, 'login.html', {'form': form})
            else:
                auth_login(request, user)
                return redirect(archive)
        else:
            return render(request, 'login.html', {})
    else:
        return redirect(archive)

def logout_view(request):
    logout(request)
    return redirect(archive)







                
